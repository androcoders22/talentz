"use client";

import React, { useState } from "react";
import { IconPalette, IconX, IconCheck } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  {
    name: "Brand Primary",
    color1: "#0A1B5E",
    color2: "#1E40AF",
    color3: "#C5E3FA",
  },
  {
    name: "Brand Exact",
    color1: "#E21B22",
    color2: "#2D318E",
    color3: "#6CAAD7",
  },
  {
    name: "Deep Corporate Waves",
    color1: "#B3121A",
    color2: "#1C2166",
    color3: "#4F89B5",
  },
  {
    name: "Vibrant Tech Brand",
    color1: "#FF2A31",
    color2: "#3D43C9",
    color3: "#85C7FA",
  },
  {
    name: "Soft Brand Pastels",
    color1: "#FFA6A9",
    color2: "#A3A7ED",
    color3: "#C5E3FA",
  },
  {
    name: "Blue Dominant",
    color1: "#002aff",
    color2: "#00ccff",
    color3: "#ffffff",
  },
  {
    name: "Red Dominant",
    color1: "#E21B22",
    color2: "#8F1115",
    color3: "#FF6B70",
  },
  {
    name: "Cyber Corporate",
    color1: "#FF3B42",
    color2: "#181B4F",
    color3: "#3E89BE",
  },
  {
    name: "Frosted Glass Brand",
    color1: "#6CAAD7",
    color2: "#FFFFFF",
    color3: "#C1D8F0",
  },
  {
    name: "Sunset over Sea",
    color1: "#E21B22",
    color2: "#2D318E",
    color3: "#751559",
  },
  {
    name: "Platinum & Brand",
    color1: "#BEC6D4",
    color2: "#2D318E",
    color3: "#E21B22",
  },
  {
    name: "Sunset Mirage",
    color1: "#FF3366",
    color2: "#FF9933",
    color3: "#FFCC00",
  },
  {
    name: "Aurora Borealis",
    color1: "#00E676",
    color2: "#2979FF",
    color3: "#D500F9",
  },
  {
    name: "Holographic Pearl",
    color1: "#E0C3FC",
    color2: "#8EC5FC",
    color3: "#E0F3FF",
  },
  {
    name: "Cyber Neon",
    color1: "#00F2FE",
    color2: "#4FACFE",
    color3: "#F093FB",
  },
  {
    name: "Luxe Midnight Gold",
    color1: "#141E30",
    color2: "#243B55",
    color3: "#D4AF37",
  },
  {
    name: "Crimson Ember",
    color1: "#ED213A",
    color2: "#93291E",
    color3: "#FF4E50",
  },
  {
    name: "Ocean Depths",
    color1: "#00B4DB",
    color2: "#0083B0",
    color3: "#11998E",
  },
  {
    name: "Peach & Lavender Dream",
    color1: "#FFB88C",
    color2: "#DE6161",
    color3: "#8360C3",
  },
  {
    name: "Berry Smoothie",
    color1: "#FF0844",
    color2: "#FFB199",
    color3: "#8A2387",
  },
  {
    name: "Mint Bronze",
    color1: "#56AB2F",
    color2: "#A8E063",
    color3: "#D38312",
  },
];

interface ThemePickerProps {
  color1: string;
  color2: string;
  color3: string;
  setColor1: (color: string) => void;
  setColor2: (color: string) => void;
  setColor3: (color: string) => void;
}

export function ThemePicker({
  color1,
  color2,
  color3,
  setColor1,
  setColor2,
  setColor3,
}: ThemePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const applyTheme = (tColor1: string, tColor2: string, tColor3: string) => {
    setColor1(tColor1);
    setColor2(tColor2);
    setColor3(tColor3);
  };

  const isCurrentTheme = (c1: string, c2: string, c3: string) => {
    return (
      color1.toLowerCase() === c1.toLowerCase() &&
      color2.toLowerCase() === c2.toLowerCase() &&
      color3.toLowerCase() === c3.toLowerCase()
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mb-4 w-80 max-h-[70vh] flex flex-col bg-black/60 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden"
          >
            <div className="p-5 border-b border-white/10 flex justify-between items-center bg-black/20">
              <h3 className="text-white font-medium text-lg">Theme Settings</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1 bg-white/5 rounded-full hover:bg-white/10"
              >
                <IconX size={18} />
              </button>
            </div>

            <div className="p-5 overflow-y-auto custom-scrollbar flex-1">
              <div className="mb-6">
                <h4 className="text-white/80 text-sm font-medium mb-3 uppercase tracking-wider">
                  Custom Colors
                </h4>
                <div className="space-y-4">
                  <ColorInput
                    label="Color 1"
                    color={color1}
                    onChange={setColor1}
                  />
                  <ColorInput
                    label="Color 2"
                    color={color2}
                    onChange={setColor2}
                  />
                  <ColorInput
                    label="Color 3"
                    color={color3}
                    onChange={setColor3}
                  />
                </div>
              </div>

              <div>
                <h4 className="text-white/80 text-sm font-medium mb-3 uppercase tracking-wider">
                  Presets ({themes.length})
                </h4>
                <div className="flex flex-col gap-2">
                  {themes.map((theme, idx) => {
                    const active = isCurrentTheme(
                      theme.color1,
                      theme.color2,
                      theme.color3,
                    );
                    return (
                      <button
                        key={idx}
                        onClick={() =>
                          applyTheme(theme.color1, theme.color2, theme.color3)
                        }
                        className={`group relative flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                          active
                            ? "bg-white/20 border border-white/30"
                            : "bg-white/5 border border-transparent hover:bg-white/10"
                        }`}
                      >
                        <span
                          className={`text-sm font-medium ${
                            active
                              ? "text-white"
                              : "text-white/70 group-hover:text-white"
                          }`}
                        >
                          {theme.name}
                        </span>
                        <div className="flex gap-1">
                          <div
                            className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                            style={{ backgroundColor: theme.color1 }}
                          />
                          <div
                            className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                            style={{ backgroundColor: theme.color2 }}
                          />
                          <div
                            className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                            style={{ backgroundColor: theme.color3 }}
                          />
                        </div>
                        {active && (
                          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-white rounded-r-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-black shadow-2xl flex items-center justify-center text-white hover:bg-neutral-800 transition-colors z-50 group border border-white/20"
      >
        <span className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        {isOpen ? <IconX size={24} /> : <IconPalette size={24} />}
      </motion.button>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

function ColorInput({
  label,
  color,
  onChange,
}: {
  label: string;
  color: string;
  onChange: (c: string) => void;
}) {
  return (
    <div className="flex items-center justify-between bg-black/20 p-2.5 rounded-xl border border-white/10">
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/30 shadow-inner shrink-0 cursor-pointer">
          <input
            type="color"
            value={color}
            onChange={(e) => onChange(e.target.value)}
            className="absolute -inset-2 w-12 h-12 cursor-pointer opacity-0"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: color }}
          />
        </div>
        <span className="text-white/90 text-sm font-medium">{label}</span>
      </div>
      <div className="bg-black/30 px-3 py-1.5 rounded-lg border border-white/5 font-mono text-xs text-white/80 uppercase tracking-wider select-all">
        {color}
      </div>
    </div>
  );
}
