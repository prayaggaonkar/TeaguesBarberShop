"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    category: "Fades",
    src: "/images/img_2689.png",
  },
  {
    id: 2,
    category: "Tapers",
    src: "/images/IMG_9936.jpg",
  },
  {
    id: 3,
    category: "Beards",
    src: "/images/IMG_8379.jpg",
  },
  {
    id: 4,
    category: "Fades",
    src: "/images/IMG_9937.jpg",
  },
  {
    id: 5,
    category: "Tapers",
    src: "/images/IMG_8378.jpg",
  },
  {
    id: 6,
    category: "Beards",
    src: "/images/Resized_Screenshot_20260202_080128_Gallery.jpg",
  },
  {
    id: 7,
    category: "Fades",
    src: "/images/IMG_9934.jpg",
  },
  {
    id: 8,
    category: "Tapers",
    src: "/images/Resized_Screenshot_20260202_080635_Gallery.jpg",
  },
  {
    id: 9,
    category: "Beards",
    src: "/images/IMG_9933.jpg",
  },
];

const categories = ["All", "Fades", "Tapers", "Beards"];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Filter */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 relative overflow-hidden ${
              activeCategory === category
                ? "bg-barber-red text-white"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:border-barber-blue/50 border border-transparent"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="group relative aspect-square overflow-hidden bg-secondary"
          >
            {/* Corner accent on hover */}
            <div className={`absolute top-0 left-0 w-0 h-0.5 ${index % 2 === 0 ? 'bg-barber-red' : 'bg-barber-blue'} group-hover:w-full transition-all duration-300 z-20`} />
            <div className={`absolute top-0 left-0 w-0.5 h-0 ${index % 2 === 0 ? 'bg-barber-red' : 'bg-barber-blue'} group-hover:h-full transition-all duration-300 z-20`} />
            {/* Image */}
            {item.src && (
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                priority={item.id === 1}
                className="object-cover z-0"
              />
            )}

            {/* Placeholder */}
            {!item.src && (
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <span className="text-muted-foreground text-sm uppercase tracking-widest">
                  Image {item.id}
                </span>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-xs uppercase tracking-widest text-accent mb-2">
                  {item.category}
                </p>
                <p className="text-sm text-foreground">{item.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">
            No images found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
