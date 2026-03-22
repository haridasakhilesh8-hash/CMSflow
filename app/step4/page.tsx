"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StepFourPage() {
  return (
    <div className="relative min-h-screen bg-[#0b1020] text-white px-6 py-10 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-10 relative z-10">
        <Link href="/step3" className="text-gray-400 hover:text-white">← Back</Link>
        <div className="text-sm text-gray-400">Step 4 of 7</div>
      </div>

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Why <span className="bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">CMS is Needed</span>
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          CMS solves the problems of slow updates and developer dependency.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692"
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
              A CMS allows content teams to update websites directly without needing developers.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
            className="rounded-2xl"
          />
        </motion.div>

        {/* VISUAL BLOCKS */}
        <motion.div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">🧩 What CMS Enables</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["Edit Content", "Publish Instantly", "No Coding", "Fast Updates"].map((item) => (
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
            <h2 className="text-2xl font-semibold mb-4">🌍 Real-Life Workflow</h2>
            <ul className="text-gray-300 space-y-2">
              <li>Open CMS dashboard</li>
              <li>Edit content easily</li>
              <li>Click publish</li>
              <li>Website updates instantly 🚀</li>
            </ul>
          </div>
        </motion.div>

        {/* DIAGRAM */}
        <motion.div className="bg-white/5 p-8 rounded-2xl text-center border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">📊 New Workflow</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {["Content Team", "CMS", "Publish", "Live Website"].map((item, i) => (
              <React.Fragment key={item}>
                <div className="bg-white/10 px-6 py-3 rounded-xl">{item}</div>
                {i < 3 && <span>→</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* KEY POINTS */}
        <motion.div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">📌 Key Benefits</h2>
          <ul className="text-gray-300 space-y-2">
            <li>No dependency on developers</li>
            <li>Faster content updates</li>
            <li>Easy to use</li>
            <li>Improves team efficiency</li>
          </ul>
        </motion.div>

        {/* NOTE */}
        <motion.div className="bg-green-500/10 p-8 rounded-2xl border border-green-400/20">
          <p className="text-gray-300">
            CMS transforms website management from complex coding to simple content editing.
          </p>
        </motion.div>

        {/* NAV */}
        <div className="flex justify-between pt-10">
          <Link href="/step3">← Back</Link>
          <Link href="/step5">Next →</Link>
        </div>

      </div>
    </div>
  );
}