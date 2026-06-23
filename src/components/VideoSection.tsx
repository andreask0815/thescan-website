"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoSectionProps {
  title?: string;
  subtitle?: string;
  videoId?: string;
  posterImage?: string;
}

export default function VideoSection({
  title = "Remote Scanning erleben",
  subtitle = "Sehen Sie, wie unser Team Ihre Radiologie aus der Ferne unterstützt.",
  videoId,
  posterImage = "https://images.unsplash.com/photo-1666214275099-0ca566aefe26?w=1600&q=80",
}: VideoSectionProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 bg-foreground">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/20">
          {videoId && playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => videoId && setPlaying(true)}
              className="group absolute inset-0 w-full h-full"
            >
              <Image
                src={posterImage}
                alt={title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors shadow-lg">
                  <svg
                    className="w-8 h-8 text-foreground ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {!videoId && (
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="text-xs text-white/60 bg-black/40 px-4 py-2 rounded-full">
                    Video folgt in Kürze
                  </span>
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
