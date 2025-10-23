import { motion } from "framer-motion";
import MenuSection from "../components/MenuSection";

export default function Home() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-serif mb-6">Invitation til Middag</h1>
      <p className="text-lg mb-8 text-gray-600">
        En eksklusiv aften med udsøgt mad og godt selskab — 25 gæster, én uforglemmelig oplevelse.
      </p>
      <MenuSection />
    </motion.div>
  );
}
