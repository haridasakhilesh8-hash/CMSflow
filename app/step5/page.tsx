"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StepFivePage() {
  return (
    <div className="relative min-h-screen bg-[#0b1020] text-white px-6 py-10 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-10 relative z-10">
        <Link href="/step4" className="text-gray-400 hover:text-white">← Back</Link>
        <div className="text-sm text-gray-400">Step 5 of 7</div>
      </div>

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          What is a <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">CMS</span>
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Let’s understand the tool that changed how websites are managed.
        </p>

        <img
          src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
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
              A CMS (Content Management System) is a tool that helps you create,
              manage, and publish content on a website.
            </p>
            <p className="text-gray-300">
              You don’t need to write code — everything is handled through a user interface.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            className="rounded-2xl"
          />
        </motion.div>

        {/* VISUAL BLOCKS */}
        <motion.div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">🧩 What CMS Does</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["Create Content", "Edit Easily", "Publish", "Manage Website"].map((item) => (
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
            <h2 className="text-2xl font-semibold mb-4">🌍 Real-Life Example</h2>
            <ul className="text-gray-300 space-y-2">
              <li>Login to CMS</li>
              <li>Write blog or update page</li>
              <li>Click publish</li>
              <li>Changes go live instantly 🚀</li>
            </ul>
          </div>
        </motion.div>

        {/* DIAGRAM */}
        <motion.div className="bg-white/5 p-8 rounded-2xl text-center border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">📊 CMS Workflow</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {["Content", "CMS", "Publish", "Website"].map((item, i) => (
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
            <li>No coding required</li>
            <li>Easy to manage content</li>
            <li>Fast publishing</li>
            <li>Used by businesses worldwide</li>
          </ul>
        </motion.div>

        {/* NOTE */}
        <motion.div className="bg-blue-500/10 p-8 rounded-2xl border border-blue-400/20">
          <p className="text-gray-300">
            CMS bridges the gap between technical development and business content needs.
          </p>
        </motion.div>

        {/* NAV */}
        <div className="flex justify-between pt-10">
          <Link href="/step4">← Back</Link>
          <Link href="/step6">Next →</Link>
        </div>

      </div>
    </div>
  );
}