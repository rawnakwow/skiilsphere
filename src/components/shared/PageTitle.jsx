"use client";

import { motion } from "framer-motion";

export default function PageTitle({ title, subtitle }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center md:text-left">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-default-500">{subtitle}</p>}
    </motion.div>
  );
}
