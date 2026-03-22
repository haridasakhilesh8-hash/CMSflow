"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StepSixPage() {
  return (
    <div className="relative min-h-screen bg-[#0b1020] text-white px-6 py-10 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-10 relative z-10">
        <Link href="/step5" className="text-gray-400 hover:text-white">← Back</Link>
        <div className="text-sm text-gray-400">Step 6 of 7</div>
      </div>

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Types of <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">CMS</span>
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Not all CMS are the same — they are designed for different needs.
        </p>

        <img
          src="https://images.unsplash.com/photo-1558655146-9f40138edfeb"
          className="w-full h-[300px] object-cover rounded-3xl shadow-2xl border border-white/10"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">

        {/* EXPLANATION */}
        <motion.div className="grid md:grid-cols-2 gap-6 items-center bg-white/5 p-8 rounded-2xl border border-white/10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧠 Simple Explanation</h2>
            <p className="text-gray-300 mb-3">
              CMS platforms can be categorized based on how they manage and deliver content.
            </p>
            <p className="text-gray-300">
              The two main types are Traditional CMS and Headless CMS.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            className="rounded-2xl"
          />
        </motion.div>

        {/* VISUAL BLOCKS */}
        <motion.div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">🧩 CMS Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-center">
            {["Traditional CMS", "Headless CMS"].map((item) => (
              <div key={item} className="bg-white/10 p-6 rounded-xl">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* REAL EXAMPLE */}
        <motion.div className="grid md:grid-cols-2 gap-6 items-center bg-white/5 p-8 rounded-2xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            className="rounded-2xl"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">🌍 Real Comparison</h2>
            <ul className="text-gray-300 space-y-3">
              <li>
                <strong>Traditional CMS:</strong> Frontend + Backend together (Example: WordPress)
              </li>
              <li>
                <strong>Headless CMS:</strong> Only backend, content delivered via APIs (Example: Contentful)
              </li>
            </ul>
          </div>
        </motion.div>

        {/* DIAGRAM */}
        <motion.div className="bg-white/5 p-8 rounded-2xl text-center border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">📊 Architecture Difference</h2>

          <div className="flex flex-col md:flex-row justify-center gap-6">

            <div className="bg-white/10 p-6 rounded-xl">
              <p className="mb-2 font-semibold">Traditional CMS</p>
              <p className="text-sm text-gray-300">Content → CMS → Website</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <p className="mb-2 font-semibold">Headless CMS</p>
              <p className="text-sm text-gray-300">Content → API → Any Platform</p>
            </div>

          </div>
        </motion.div>

        {/* KEY POINTS */}
        <motion.div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">📌 Key Points</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Traditional CMS is easier for beginners</li>
            <li>Headless CMS is more flexible</li>
            <li>Choice depends on project needs</li>
          </ul>
        </motion.div>

        {/* NOTE */}
        <motion.div className="bg-purple-500/10 p-8 rounded-2xl border border-purple-400/20">
          <p className="text-gray-300">
            Modern applications prefer Headless CMS for flexibility and scalability.
          </p>
        </motion.div>

        {/* NAV */}
        <div className="flex justify-between pt-10">
          <Link href="/">← Back</Link>
          <Link href="/step7">Next →</Link>
        </div>

      </div>
    </div>
  );
}