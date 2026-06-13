"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Photo({
  src,
  alt,
  caption,
  className = "",
  rounded = true,
  index = 0,
  sizes = "(max-width: 768px) 95vw, 50vw",
  priority = false,
  aspectRatio,
  objectPosition = "center",
}: {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
  rounded?: boolean;
  index?: number;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: string;
  objectPosition?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });

  return (
    <figure
      ref={ref}
      style={aspectRatio ? { aspectRatio } : undefined}
      className={`group relative overflow-hidden ${
        rounded ? "rounded-xl" : ""
      } ${className}`}
    >
      {/* lightweight reveal: opacity + transform only (GPU-composited, no paint) */}
      <motion.div
        className="absolute inset-0 will-change-[opacity,transform]"
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: (index % 6) * 0.05, ease: EASE }}
      >
        <Image
          src={src}
          alt={alt || caption || ""}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
          style={{ objectPosition, filter: "saturate(0.85) contrast(1.03)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(42,59,59,0.04) 0%, rgba(42,59,59,0.10) 55%, rgba(27,40,39,0.34) 100%)",
          }}
        />
      </motion.div>

      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-2 p-4 text-paper">
          <span className="h-px w-5 bg-gold-light" />
          <span className="text-[0.78rem] font-medium tracking-wide">{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
