import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import "./masonry-gallery.css";

interface MasonryGalleryItem {
  src: string;
  alt: string;
}

interface MasonryGalleryProps {
  items: MasonryGalleryItem[];
  className?: string;
}

export const MasonryGallery = ({ items, className }: MasonryGalleryProps) => {
  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className={cn("masonry-grid", className)}
      columnClassName="masonry-grid_column"
    >
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-xl cursor-pointer"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.div>
      ))}
    </Masonry>
  );
};
