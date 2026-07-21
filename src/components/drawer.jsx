"use client";

import { motion, AnimatePresence, useDragControls } from "framer-motion";

const SHEET_TRANSITION = { type: "spring", damping: 32, stiffness: 300 };
const CLOSE_VELOCITY_THRESHOLD = 500;
const CLOSE_DISTANCE_THRESHOLD = 90;

const Drawer = ({ open, onClose, children, height = "95%" }) => {
  const dragControls = useDragControls();

  const handleDragEnd = (_, info) => {
    if (
      info.offset.y > CLOSE_DISTANCE_THRESHOLD ||
      info.velocity.y > CLOSE_VELOCITY_THRESHOLD
    ) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            onClick={onClose}
            className="absolute inset-0 z-50 rounded-4xl bg-black/25 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            key="sheet"
            className="absolute left-0 right-0 bottom-0 z-30 bg-neutral-200 rounded-t-4xl flex flex-col"
            style={{ height }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={SHEET_TRANSITION}
            drag="y"
            dragListener={false}
            dragControls={dragControls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={handleDragEnd}
          >
            <div
              className="shrink-0 h-8 group flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none touch-none"
              onPointerDown={(e) => dragControls.start(e)}
              onClick={onClose}
            >
              <div className="w-9 h-1 rounded-full bg-neutral-400/60 group-hover:bg-neutral-400 transition-colors" />
            </div>

            <div className="flex-1 overflow-y-auto px-5 pb-8 pt-6 scrollbar-none">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
