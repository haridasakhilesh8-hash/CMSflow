"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StepThreePage() {
  return (
    <div className="relative min-h-screen bg-[#0b1020] text-white px-6 py-10 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-10 relative z-10">
        <Link href="/step2" className="text-gray-400 hover:text-white">← Back</Link>
        <div className="text-sm text-gray-400">Step 3 of 7</div>
      </div>

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Problems <span className="bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text">Without CMS</span>
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Managing content without CMS creates delays, dependency, and frustration.
        </p>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          className="w-full h-[300px] object-cover rounded-3xl shadow-2xl border border-white/10"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">

        {/* EXPLANATION */}
        <motion.div className="grid md:grid-cols-2 gap-6 items-center bg-white/5 p-8 rounded-2xl border border-white/10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧠 Simple Explanation</h2>
            <p className="text-gray-300">
              Without CMS, every content update depends on developers, making the process slow and inefficient.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
            className="rounded-2xl"
          />
        </motion.div>

        {/* VISUAL BLOCKS */}
        <motion.div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">🧩 Common Problems</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["Slow Updates", "Developer Dependency", "High Effort", "Not Scalable"].map((item) => (
              <div key={item} className="bg-white/10 p-4 rounded-xl">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* REAL EXAMPLE */}
        <motion.div className="grid md:grid-cols-2 gap-6 items-center bg-white/5 p-8 rounded-2xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="rounded-2xl"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">🌍 Real-Life Scenario</h2>
            <ul className="text-gray-300 space-y-2">
              <li>Marketing wants to update homepage</li>
              <li>Needs developer help</li>
              <li>Developer is busy</li>
              <li>Update gets delayed</li>
            </ul>
          </div>
        </motion.div>

        {/* DIAGRAM */}
        <motion.div className="bg-white/5 p-8 rounded-2xl text-center border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">📊 Problem Workflow</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {["Content Team", "Request", "Developer", "Update Delay"].map((item, i) => (
              <React.Fragment key={item}>
                <div className="bg-white/10 px-6 py-3 rounded-xl">{item}</div>
                {i < 3 && <span>→</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* KEY POINTS */}
        <motion.div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">📌 Key Points</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Content updates are slow</li>
            <li>Teams depend on developers</li>
            <li>Workflow is inefficient</li>
          </ul>
        </motion.div>

        {/* NOTE */}
        <motion.div className="bg-red-500/10 p-8 rounded-2xl border border-red-400/20">
          <p className="text-gray-300">
            These challenges created the need for a better solution — CMS.
          </p>
        </motion.div>

        {/* NAV */}
        <div className="flex justify-between pt-10">
          <Link href="/step2">← Back</Link>
          <Link href="/step4">Next →</Link>
        </div>

      </div>
    </div>
  );
}