"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StepOnePage() {
  return (
    <div className="relative min-h-screen bg-[#0b1020] text-white px-6 py-10 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-10 relative z-10">
        <Link href="/" className="text-gray-400 hover:text-white">← Back</Link>
        <div className="text-sm text-gray-400">Step 1 of 7</div>
      </div>

      {/* TITLE + HERO IMAGE */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          What is a <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Website</span>
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Let’s understand something you use every day — but rarely think about.
        </p>

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          className="w-full h-[300px] object-cover rounded-3xl shadow-2xl border border-white/10"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">

        {/* EXPLANATION WITH IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 items-center bg-white/5 p-8 rounded-2xl backdrop-blur border border-white/10"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧠 Simple Explanation</h2>
            <p className="text-gray-300 mb-4">
              A website is something you use every day — like Google, Amazon, or YouTube.
            </p>
            <p className="text-gray-300">
              It is made up of multiple pages (Home, About, Contact), all connected together and shown to users through the internet.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            className="rounded-2xl shadow-lg border border-white/10"
          />
        </motion.div>

        {/* VISUAL BLOCKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 p-8 rounded-2xl backdrop-blur border border-white/10"
        >
          <h2 className="text-2xl font-semibold mb-6">🧩 What makes a Website?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["Pages", "Content", "Design", "Server"].map((item) => (
              <div key={item} className="bg-white/10 p-4 rounded-xl border border-white/10">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* REAL EXAMPLE WITH IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 items-center bg-white/5 p-8 rounded-2xl backdrop-blur border border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            className="rounded-2xl shadow-lg border border-white/10"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">🌍 Real-Life Example</h2>
            <p className="text-gray-300 mb-3">Think about Amazon:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Home page → shows products</li>
              <li>Product page → shows details</li>
              <li>Cart → holds your items</li>
              <li>Checkout → completes purchase</li>
            </ul>
            <p className="text-gray-300 mt-4">
              All these pages together make one website.
            </p>
          </div>
        </motion.div>

        {/* MAIN VISUAL DIAGRAM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 p-8 rounded-2xl backdrop-blur border border-white/10 text-center"
        >
          <h2 className="text-2xl font-semibold mb-6">📊 How a Website Works</h2>

          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
            className="mx-auto mb-6 rounded-2xl border border-white/10 shadow-lg"
          />

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-300">
            {["User", "Browser", "Server", "Website", "Response"].map((item, i) => (
              <React.Fragment key={item}>
                <div className="bg-white/10 px-6 py-3 rounded-xl border border-white/10">
                  {item}
                </div>
                {i < 4 && <span>→</span>}
              </React.Fragment>
            ))}
          </div>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            When you open a website, your browser sends a request to a server. The server processes it and sends back the website content you see.
          </p>
        </motion.div>

        {/* KEY POINTS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 p-8 rounded-2xl backdrop-blur border border-white/10"
        >
          <h2 className="text-2xl font-semibold mb-4">📌 Key Points</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>A website is a collection of pages</li>
            <li>It is stored on a server</li>
            <li>You access it using a browser</li>
            <li>It shows content like text, images, and videos</li>
          </ul>
        </motion.div>

        {/* NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-500/10 p-8 rounded-2xl border border-blue-400/20"
        >
          <h2 className="text-2xl font-semibold mb-4">💡 Important Note</h2>
          <p className="text-gray-300">
            A website is not just what you see. Behind it, there is a server, data, and communication happening every time you open a page.
          </p>
        </motion.div>

        {/* NAVIGATION (FIXED) */}
        <div className="flex justify-between items-center pt-10">
          <Link href="/" className="text-gray-400 hover:text-white">
            ← Back
          </Link>

          <Link
            href="/step2"
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            Next →
          </Link>
        </div>

      </div>
    </div>
  );
}