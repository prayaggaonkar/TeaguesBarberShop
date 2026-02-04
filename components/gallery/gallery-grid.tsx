"use client";

import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    category: "Fades",
    src: "/images/IMG_2689.JPEG",
    alt: "Classic fade haircut",
  },
  {
    id: 2,
    category: "Tapers",
    alt: "Traditional gentleman's cut",
  },
  {
    id: 3,
    category: "Beards",
    alt: "Beard trim and shape",
  },
  {
    id: 4,
    category: "Fades",
    alt: "High skin fade",
  },
  {
    id: 5,
    category: "Tapers",
    alt: "Side part haircut",
  },
  {
    id: 6,
    category: "Beards",
    alt: "Full beard grooming",
  },
  {
    id: 7,
    category: "Fades",
    alt: "Mid fade with texture",
  },
  {
    id: 8,
    category: "Tapers",
    alt: "Pompadour style",
  },
  {
    id: 9,
    category: "Beards",
    alt: "Beard lineup and fade",
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
            type="button"
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
            className="group relative aspect-square bg-secondary overflow-hidden"
          >
            {/* Image (only renders if src exists) */}
            {item.src && (
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Placeholder for now */}
            {!item.src && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground text-sm uppercase tracking-widest">
                  Image {item.id}
                </span>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
