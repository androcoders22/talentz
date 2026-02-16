"use client";

import React, { useLayoutEffect, useRef, useCallback, useEffect } from "react";
import type { ReactNode } from "react";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div
    className={`scroll-stack-card relative w-full aspect-video my-8 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top overflow-hidden ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: "hidden",
      willChange: "transform",
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  // Cache the original offsetTop of each card so we never read live layout
  const cardOffsetsRef = useRef<number[]>([]);
  const endOffsetRef = useRef<number>(0);
  const rafPending = useRef(false);

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (end <= start) return 0;
      if (scrollTop < start) return 0;
      if (scrollTop > end) return 1;
      return (scrollTop - start) / (end - start);
    },
    [],
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return parseFloat(value as string);
    },
    [],
  );

  /** Measure all card offsets once and cache them */
  const cacheOffsets = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    // Temporarily reset transforms so we get true layout positions
    const savedTransforms: string[] = [];
    cards.forEach((card) => {
      savedTransforms.push(card.style.transform);
      card.style.transform = "none";
    });

    // Force a layout read
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    cards[0].offsetTop;

    const offsets: number[] = [];
    cards.forEach((card) => {
      if (useWindowScroll) {
        const rect = card.getBoundingClientRect();
        offsets.push(rect.top + window.scrollY);
      } else {
        offsets.push(card.offsetTop);
      }
    });
    cardOffsetsRef.current = offsets;

    // Cache end element offset
    const endElement = useWindowScroll
      ? (document.querySelector(".scroll-stack-end") as HTMLElement | null)
      : (scrollerRef.current?.querySelector(
          ".scroll-stack-end",
        ) as HTMLElement | null);

    if (endElement) {
      if (useWindowScroll) {
        const rect = endElement.getBoundingClientRect();
        endOffsetRef.current = rect.top + window.scrollY;
      } else {
        endOffsetRef.current = endElement.offsetTop;
      }
    }

    // Restore transforms
    cards.forEach((card, i) => {
      card.style.transform = savedTransforms[i];
    });
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    const cards = cardsRef.current;
    const offsets = cardOffsetsRef.current;
    if (!cards.length || !offsets.length) return;

    const scrollTop = useWindowScroll
      ? window.scrollY
      : scrollerRef.current
        ? scrollerRef.current.scrollTop
        : 0;
    const containerHeight = useWindowScroll
      ? window.innerHeight
      : scrollerRef.current
        ? scrollerRef.current.clientHeight
        : 0;

    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight,
    );
    const endElementTop = endOffsetRef.current;

    cards.forEach((card, i) => {
      if (!card) return;

      const cardTop = offsets[i];
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd,
      );
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cards.length; j++) {
          const jCardTop = offsets[j];
          const jTriggerStart =
            jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      // Round to whole pixels to avoid sub-pixel jitter
      const roundedY = Math.round(translateY);
      const roundedScale = Math.round(scale * 10000) / 10000;
      const roundedRotation = Math.round(rotation * 100) / 100;

      const transform = `translate3d(0, ${roundedY}px, 0) scale(${roundedScale})${roundedRotation ? ` rotate(${roundedRotation}deg)` : ""}`;
      const filter = blur > 0 ? `blur(${Math.round(blur)}px)` : "none";

      card.style.transform = transform;
      card.style.filter = filter;

      if (i === cards.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
  ]);

  const scheduleUpdate = useCallback(() => {
    if (rafPending.current) return;
    rafPending.current = true;
    animationFrameRef.current = requestAnimationFrame(() => {
      rafPending.current = false;
      updateCardTransforms();
    });
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : (scrollerRef.current?.querySelectorAll(".scroll-stack-card") ?? []),
    ) as HTMLElement[];
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
    });

    // Cache all offsets once
    cacheOffsets();
    updateCardTransforms();

    // Bind scroll — just use native scroll + RAF, no Lenis for window mode
    const scrollTarget = useWindowScroll ? window : scrollerRef.current;

    const onScroll = () => scheduleUpdate();

    if (scrollTarget) {
      scrollTarget.addEventListener("scroll", onScroll, { passive: true });
    }

    // Recache offsets on resize
    const onResize = () => {
      cacheOffsets();
      updateCardTransforms();
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (scrollTarget) {
        scrollTarget.removeEventListener("scroll", onScroll);
      }
      window.removeEventListener("resize", onResize);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardOffsetsRef.current = [];
      rafPending.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    cacheOffsets,
    updateCardTransforms,
    scheduleUpdate,
  ]);

  // When using window scroll, we don't need a scroll container — just render children inline
  if (useWindowScroll) {
    return (
      <div className={className}>
        <div className="scroll-stack-inner">
          {children}
          <div className="scroll-stack-end w-full h-px" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim()}
      ref={scrollerRef}
      style={{
        overscrollBehavior: "contain",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div className="scroll-stack-inner pt-[20vh] px-20 pb-200 min-h-screen">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
