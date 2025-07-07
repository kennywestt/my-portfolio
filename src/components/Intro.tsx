import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <motion.span
        className="text-4xl md:text-5xl font-extrabold text-cyan-400 select-none"
        initial={{ scale: 1, rotate: 0, opacity: 1 }}
        animate={{
          scale: 0,
          rotate: 360,
          opacity: 0
        }}
        transition={{
          duration: 1.1,
          ease: "easeIn"
        }}
      >
        Welcome to my Portfolio
      </motion.span>
    </motion.div>
  );
}
