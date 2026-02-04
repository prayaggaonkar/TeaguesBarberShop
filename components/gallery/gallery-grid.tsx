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
  },
  {
    id: 3,
    category: "Beards",
  },
  {
    id: 4,
    category: "Fades",
  },
  {
    id: 5,
    category: "Tapers",
  },
  {
    id: 6,
    category: "Beards",
  },
  {
    id: 7,
    category: "Fades",
  },
  {
    id: 8,
    category: "Tapers",
  },
  {
    id: 9,
    category: "Beards",
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
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${
              activeCategory === category
                ? "bg-accent text-accent-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square overflow-hidden bg-secondary"
          >
            {/* Image */}
            {item.src && (
              <Image
                src={item.src}
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
