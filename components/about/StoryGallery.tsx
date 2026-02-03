"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Story = {
  title: string;
  intro: string;
  images: string[];
};

type StoryGalleryProps = {
  stories: Story[];
};

export default function StoryGallery({ stories }: StoryGalleryProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <>
      <div className="space-y-6">
        {stories.map((story) => (
          <div key={story.title} className="space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-600">
                {story.title}
              </p>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {story.intro}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {story.images.map((src, index) => (
                <button
                  key={`${story.title}-${index}`}
                  type="button"
                  onClick={() => setActiveImage({ src, alt: story.title })}
                  className="block cursor-zoom-in"
                  aria-label={`Open ${story.title} photo`}
                >
                  <Image
                    src={src}
                    alt={story.title}
                    width={1400}
                    height={900}
                    className="w-full rounded-2xl object-cover shadow-lg ring-1 ring-black/5 transition-transform hover:scale-[1.01]"
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded photo"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute -top-3 right-0 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
            >
              Close
            </button>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={1600}
              height={1000}
              className="w-full max-h-[85vh] rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
