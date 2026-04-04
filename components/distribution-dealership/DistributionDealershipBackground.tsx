"use client";

import { useEffect, useRef, useState } from "react";

const FORWARD_VIDEO_SRC = "/Simple_Instrumental_Video_Generated.mp4";
const REVERSE_VIDEO_SRC = "/Simple_Instrumental_Video_Generated-reverse.mp4";
const FADE_DURATION_SECONDS = 0.5;

type VideoDirection = "forward" | "reverse";

async function playVideo(video: HTMLVideoElement) {
    try {
        await video.play();
        return true;
    } catch {
        return false;
    }
}

export function DistributionDealershipBackground() {
    const forwardVideoRef = useRef<HTMLVideoElement | null>(null);
    const reverseVideoRef = useRef<HTMLVideoElement | null>(null);
    const [activeVideo, setActiveVideo] = useState<VideoDirection>("forward");

    useEffect(() => {
        const forwardVideo = forwardVideoRef.current;
        const reverseVideo = reverseVideoRef.current;

        if (!forwardVideo || !reverseVideo) {
            return;
        }

        let mounted = true;
        let currentDirection: VideoDirection = "forward";
        let isSwitching = false;
        let rafId = 0;

        const revealVideo = (direction: VideoDirection) => {
            if (!mounted) {
                return;
            }

            currentDirection = direction;
            setActiveVideo(direction);
        };

        const scheduleMonitor = () => {
            if (!mounted) {
                return;
            }

            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(monitorActiveVideo);
        };

        async function switchTo(direction: VideoDirection) {
            if (!mounted || isSwitching || currentDirection === direction) {
                return;
            }

            isSwitching = true;

            const nextVideo = (direction === "forward" ? forwardVideo : reverseVideo)!;
            const previousVideo = (direction === "forward" ? reverseVideo : forwardVideo)!;

            nextVideo.currentTime = 0;

            const didPlay = await playVideo(nextVideo);

            if (!didPlay || !mounted) {
                isSwitching = false;
                scheduleMonitor();
                return;
            }

            previousVideo.pause();
            revealVideo(direction);
            isSwitching = false;
            scheduleMonitor();
        }

        function monitorActiveVideo() {
            if (!mounted || isSwitching) {
                return;
            }

            const activeVideo = (currentDirection === "forward" ? forwardVideo : reverseVideo)!;

            if (!Number.isFinite(activeVideo.duration) || activeVideo.duration <= 0 || activeVideo.paused) {
                scheduleMonitor();
                return;
            }

            const remainingTime = activeVideo.duration - activeVideo.currentTime;

            if (remainingTime <= FADE_DURATION_SECONDS) {
                void switchTo(currentDirection === "forward" ? "reverse" : "forward");
                return;
            }

            scheduleMonitor();
        }

        const handleForwardEnded = () => {
            void switchTo("reverse");
        };

        const handleReverseEnded = () => {
            void switchTo("forward");
        };

        forwardVideo.addEventListener("ended", handleForwardEnded);
        reverseVideo.addEventListener("ended", handleReverseEnded);

        void playVideo(forwardVideo);
        scheduleMonitor();

        return () => {
            mounted = false;
            cancelAnimationFrame(rafId);
            forwardVideo.pause();
            reverseVideo.pause();
            forwardVideo.removeEventListener("ended", handleForwardEnded);
            reverseVideo.removeEventListener("ended", handleReverseEnded);
        };
    }, []);

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black">
            <video
                ref={forwardVideoRef}
                className={`absolute inset-0 h-full w-full scale-[1.06] object-cover transition-opacity duration-200 ease-out ${activeVideo === "forward" ? "opacity-100" : "opacity-0"}`}
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
                tabIndex={-1}
            >
                <source src={FORWARD_VIDEO_SRC} type="video/mp4" />
            </video>

            <video
                ref={reverseVideoRef}
                className={`absolute inset-0 h-full w-full scale-[1.06] object-cover transition-opacity duration-200 ease-out ${activeVideo === "reverse" ? "opacity-100" : "opacity-0"}`}
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
                tabIndex={-1}
            >
                <source src={REVERSE_VIDEO_SRC} type="video/mp4" />
            </video>
        </div>
    );
}
