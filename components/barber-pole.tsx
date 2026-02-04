"use client";

export function BarberPole({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`fixed top-0 bottom-0 w-4 z-40 hidden lg:block ${
        side === "left" ? "left-0" : "right-0"
      }`}
    >
      {/* Glass cap top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-b-sm shadow-lg" />
      
      {/* Main pole container */}
      <div className="absolute top-8 bottom-8 left-1 right-1 bg-zinc-900 overflow-hidden rounded-sm shadow-inner">
        {/* Animated stripes */}
        <div 
          className="absolute inset-0 animate-barber-spin"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #c41e3a 0px,
              #c41e3a 8px,
              #f5f5f0 8px,
              #f5f5f0 16px,
              #0f4c81 16px,
              #0f4c81 24px,
              #f5f5f0 24px,
              #f5f5f0 32px
            )`,
            backgroundSize: "100% 64px",
          }}
        />
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/20" />
      </div>
      
      {/* Glass cap bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-zinc-700 to-zinc-800 rounded-t-sm shadow-lg" />
    </div>
  );
}
