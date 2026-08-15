"use client";
import { useLanguage } from "@/app/providers/language-context";
import { settings } from '../../db/schema/settings';
import { useEffect, useState } from "react";
import { getYouTubeVideoId } from "@/app/lib/utils";

export default function HeroVideo() {

  const { settings } = useLanguage();

  const [banner, setBanner] = useState({ video: "", image: "", type: "Image" });

  const getUrlVideo = () => {
    const videoId = banner.video;
    if (videoId === null || videoId.length < 1) {
      return '';
    }
    else
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0`
  }


  useEffect(() => {
    console.log(settings)
    setBanner(settings.data.home.banner);
  }, [settings]);

  return (
    <>
      {(banner.type === 'video' && banner.video) &&
        <div className="absolute inset-0 h-full w-full object-cover">
          <iframe
            className="absolute inset-0 h-full w-full scale-[1.5] pointer-events-none"
            src={getUrlVideo()}
            title="Background video"
            allow="autoplay; fullscreen" />
        </div>
      }
    </>
  );
}