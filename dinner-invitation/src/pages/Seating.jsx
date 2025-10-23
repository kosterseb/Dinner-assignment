import SeatingPlan from "../components/SeatingPlan";
import { motion } from "framer-motion";

export default function Seating() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-serif mb-8 text-center">Bordplan</h1>
      <SeatingPlan />
    </motion.div>
  );
}
