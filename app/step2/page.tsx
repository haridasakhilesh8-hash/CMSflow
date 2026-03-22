"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StepTwoPage() {
  return (
    <div className="relative min-h-screen bg-[#0b1020] text-white px-6 py-10 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-10 relative z-10">
        <Link href="/step1" className="text-gray-400 hover:text-white">← Back</Link>
        <div className="text-sm text-gray-400">Step 2 of 7</div>
      </div>

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Life <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Before CMS</span>
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Managing websites was completely manual and required coding knowledge.
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
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
              Before CMS, developers had to manually write and update website code for every change.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            className="rounded-2xl"
          />
        </motion.div>

        {/* VISUAL BLOCKS */}
        <motion.div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">🧩 What was needed?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["HTML", "CSS", "JavaScript", "Hosting"].map((item) => (
              <div key={item} className="bg-white/10 p-4 rounded-xl">
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
            <h2 className="text-2xl font-semibold mb-4">🌍 Real-Life Scenario</h2>
            <ul className="text-gray-300 space-y-2">
              <li>Edit code</li>
              <li>Upload files</li>
              <li>Deploy website</li>
              <li>Wait for update</li>
            </ul>
          </div>
        </motion.div>

        {/* DIAGRAM */}
        <motion.div className="bg-white/5 p-8 rounded-2xl text-center border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">📊 Old Workflow</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {["Content Change", "Developer", "Code Update", "Deploy"].map((item, i) => (
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
            <li>Manual coding required</li>
            <li>Time-consuming updates</li>
            <li>Dependent on developers</li>
          </ul>
        </motion.div>

        {/* NOTE */}
        <motion.div className="bg-red-500/10 p-8 rounded-2xl border border-red-400/20">
          <p className="text-gray-300">
            This complexity led to the invention of CMS systems.
          </p>
        </motion.div>

        {/* NAV */}
        <div className="flex justify-between pt-10">
          <Link href="/step1">← Back</Link>
          <Link href="/step3">Next →</Link>
        </div>

      </div>
    </div>
  );
}