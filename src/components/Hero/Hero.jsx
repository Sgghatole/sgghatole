import { useEffect, useRef, useState } from "react";
import "./Hero.css";

function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Handle scroll scrubbing
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section || !isVideoReady) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          const totalHeroScroll = rect.height - window.innerHeight;

          if (totalHeroScroll > 0 && video.duration) {
            // Calculate scroll distance inside the Hero section (0.0 to 1.0)
            const currentScroll = Math.max(0, -rect.top);
            const scrollFraction = Math.min(1, Math.max(0, currentScroll / totalHeroScroll));

            // Sync current video time directly to scroll position
            video.currentTime = scrollFraction * video.duration;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initial calculation
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVideoReady]);

  return (
    <section ref={sectionRef} className="hero">
      <div className="hero-sticky">
        <video
          ref={videoRef}
          className="hero-video"
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={() => setIsVideoReady(true)}
        >
          {/* Serves vertical 9:16 video to screens 768px wide or smaller */}
          <source src="/Videos/HeroVidMob.mp4" media="(max-width: 768px)" />

          {/* Default fallback for tablets and desktops */}
          <source src="/Videos/HeroVid_optimized.mp4" />
        </video>
      </div>
    </section>
  );
}

export default Hero;