"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0b1020] text-white px-6 py-10 overflow-hidden">

      {/* BG GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />

      {/* HERO */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-16">

        {/* LEFT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold leading-tight mb-6"
          >
            Understand <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              CMS the Right Way
            </span>
          </motion.h1>

          <p className="text-gray-400 text-lg mb-8">
           Learn how CMS works — step by step.
          </p>

          <Link href="/step1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-xl text-lg"
            >
              Start Learning →
            </motion.button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            className="rounded-3xl shadow-2xl border border-white/10"
          />
        </motion.div>

      </div>

      {/* FLOW SECTION */}
      <div className="max-w-5xl mx-auto mt-24 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Your CMS Journey
        </h2>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">

          {[
            "Website",
            "Before CMS",
            "Problems",
            "Why CMS",
            "What is CMS",
            "Types",
            "Platforms"
          ].map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <div className="bg-white/10 px-4 py-2 rounded-xl">{item}</div>
              {i < 6 && <span>→</span>}
            </div>
          ))}

        </div>

      </div>

      {/* CTA */}
      <div className="text-center mt-24">

        <Link href="/step1">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-10 py-4 rounded-xl text-lg"
          >
            Begin →
          </motion.button>
        </Link>

      </div>

    </div>
  );
}  