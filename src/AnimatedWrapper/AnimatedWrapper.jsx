import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedWrapper = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.8) {
        ref.current.classList.add("animate");
      } else {
        ref.current.classList.remove("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <motion.div ref={ref}>{children}</motion.div>;
};

export default AnimatedWrapper;
