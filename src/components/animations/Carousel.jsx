import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import "./Carousel.css";

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, trackItemOffset, x, transition }) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];

  const rotateY = useTransform(x, range, [90, 0, -90], { clamp: false });

  return (
    <motion.div
      className="carousel-item"
      style={{
        width: itemWidth,
        rotateY,
      }}
      transition={transition}
    >
      {/* ✅ YOUR EXPERIENCE CARD UI */}
      <div className="
        backdrop-blur-xl
        bg-black
        border border-white/50
        rounded-2xl
        p-6
        shadow-[0_0_30px_rgba(255,255,255,0.05)]
        h-full flex flex-col justify-center
      ">

        <h3 className="text-lg font-semibold text-white tracking-wide">
          {item.role}
          <div className="w-10 h-0.5 bg-white/30 mt-2"></div>
        </h3>

        <p className="text-sm text-gray-400 mt-2">
          {item.company} • {item.duration}
        </p>

        <p className="text-gray-300 mt-4 text-sm leading-relaxed">
          {item.description}
        </p>

      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = [],
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = true,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const enter = () => setIsHovered(true);
      const leave = () => setIsHovered(false);
      container.addEventListener("mouseenter", enter);
      container.addEventListener("mouseleave", leave);
      return () => {
        container.removeEventListener("mouseenter", enter);
        container.removeEventListener("mouseleave", leave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return;
    if (pauseOnHover && isHovered) return;

    const timer = setInterval(() => {
      setPosition((prev) => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const start = loop ? 1 : 0;
    setPosition(start);
    x.set(-start * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  const effectiveTransition = isJumping
    ? { duration: 0 }
    : SPRING_OPTIONS;

  const handleAnimationStart = () => setIsAnimating(true);

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }

    const last = itemsForRender.length - 1;

    if (position === last) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;

    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
        ? -1
        : 0;

    if (direction === 0) return;

    setPosition((prev) => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const activeIndex =
    items.length === 0
      ? 0
      : loop
      ? (position - 1 + items.length) % items.length
      : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className="carousel-container"
      style={{ width: `${baseWidth}px` }}
    >
      <motion.div
        className="carousel-track"
        drag={isAnimating ? false : "x"}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            position * trackItemOffset + itemWidth / 2
          }px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={index}
            item={item}
            index={index}
            itemWidth={itemWidth}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>

      {/* Indicators */}
      <div className="carousel-indicators flex justify-center mt-4 gap-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              activeIndex === index ? "bg-white" : "bg-white/30"
            }`}
            onClick={() => setPosition(loop ? index + 1 : index)}
          />
        ))}
      </div>
    </div>
  );
}