import PriceBreakdown from "../components/PriceBreakdown";
import { motion } from "framer-motion";

export default function Price() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-serif mb-8 text-center">Prisberegning</h1>
      <PriceBreakdown />
    </motion.div>
  );
}
