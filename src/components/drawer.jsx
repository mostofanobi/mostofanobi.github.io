"use client";
import { useRef, useCallback, useEffect } from "react";

const Drawer = ({ open, onClose, children, height = "95%" }) => {
  const drawerRef = useRef(null);
  const dragState = useRef({ active: false, startY: 0, currentY: 0 });

  // Drag handlers — pointer-agnostic helper
  const startDrag = useCallback((clientY) => {
    dragState.current = { active: true, startY: clientY, currentY: clientY };
    if (drawerRef.current) drawerRef.current.style.transition = "none";
  }, []);

  const moveDrag = useCallback((clientY) => {
    if (!dragState.current.active) return;
    dragState.current.currentY = clientY;
    const dy = Math.max(0, clientY - dragState.current.startY);
    if (drawerRef.current)
      drawerRef.current.style.transform = `translateY(${dy}px)`;
  }, []);

  const endDrag = useCallback(() => {
    if (!dragState.current.active) return;
    dragState.current.active = false;
    if (drawerRef.current) {
      drawerRef.current.style.transition = "";
      drawerRef.current.style.transform = "";
    }
    const dy = dragState.current.currentY - dragState.current.startY;
    if (dy > 90) onClose();
  }, [onClose]);

  // Global listeners so drag works even if cursor leaves the handle
  useEffect(() => {
    const onMouseMove = (e) => moveDrag(e.clientY);
    const onTouchMove = (e) => moveDrag(e.touches[0].clientY);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", endDrag);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", endDrag);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", endDrag);
    };
  }, [moveDrag, endDrag]);

  return (
    <>
      <div
        onClick={onClose}
        className={`
          absolute inset-0 z-20 rounded-4xl
          bg-black/25 backdrop-blur-[1px]
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      <div
        ref={drawerRef}
        className={`
          absolute left-0 right-0 bottom-0 z-30
          bg-[#E6E6E6] rounded-t-4xl rounded-b-[28px]
          flex flex-col
          transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          will-change-transform
          ${open ? "translate-y-0" : "translate-y-full"}
        `}
        style={{
          height,
        }}
      >
        <div
          className="shrink-0 h-11 group flex items-center justify-center relative cursor-pointer active:cursor-grabbing select-none"
          onMouseDown={(e) => startDrag(e.clientY)}
          onTouchStart={(e) => startDrag(e.touches[0].clientY)}
          onClick={onClose}
        >
          <div className="w-9 h-1 rounded-full bg-[#CCCCCC] group-hover:bg-[#bbbbbb] transition-colors" />
        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-8 pt-6 scrollbar-none">
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
