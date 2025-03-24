
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900">
          hello
        </h1>
      </motion.div>
    </div>
  );
};

export default Index;
