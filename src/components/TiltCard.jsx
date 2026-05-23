import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const TiltCard = ({ children, className = '', style = {} }) => {
  const ref = useRef(null);

  // Relative mouse coordinates (-0.5 to 0.5)
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Soft spring config for physics weight
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  // Convert to rotation degrees
  const rX = useTransform(springX, [-0.5, 0.5], [8, -8]);
  const rY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates around center (0,0)
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    rotateX.set(mouseY / height);
    rotateY.set(mouseX / width);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rX,
        rotateY: rY,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      className={`${className} cursor-pointer`}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
