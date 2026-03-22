"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StepSevenPage() {
  return (
    <div className="relative min-h-screen bg-[#0b1020] text-white px-6 py-10 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-10 relative z-10">
        <Link href="/step6" className="text-gray-400 hover:text-white">← Back</Link>
        <div className="text-sm text-gray-400">Step 7 of 7</div>
      </div>

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Popular <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">CMS Platforms</span>
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          These are real tools used by companies worldwide to manage websites.
        </p>

        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
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
              Different CMS platforms are built for different needs — from blogs to enterprise-level systems.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            className="rounded-2xl"
          />
        </motion.div>

        {/* VISUAL BLOCKS */}
        <motion.div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">🧩 Popular Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {["WordPress", "AEM", "Shopify", "Contentful", "Strapi", "Drupal"].map((item) => (
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
            <h2 className="text-2xl font-semibold mb-4">🌍 Real Usage</h2>
            <ul className="text-gray-300 space-y-2">
              <li>WordPress → Blogs & small websites</li>
              <li>AEM → Enterprise applications</li>
              <li>Shopify → E-commerce platforms</li>
              <li>Contentful → Headless applications</li>
            </ul>
          </div>
        </motion.div>

        {/* DIAGRAM */}
        <motion.div className="bg-white/5 p-8 rounded-2xl text-center border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">📊 CMS Ecosystem</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {["Content", "CMS Platform", "Website/App", "Users"].map((item, i) => (
              <React.Fragment key={item}>
                <div className="bg-white/10 px-6 py-3 rounded-xl">{item}</div>
                {i < 3 && <span>→</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* KEY POINTS */}
        <motion.div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">📌 Key Takeaways</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Different CMS for different needs</li>
            <li>Choose based on project scale</li>
            <li>CMS powers most modern websites</li>
          </ul>
        </motion.div>

        {/* NOTE (FINAL MESSAGE) */}
        <motion.div className="bg-green-500/10 p-8 rounded-2xl border border-green-400/20 text-center">
          <p className="text-gray-300 text-lg">
            🎉 You now understand CMS from basics to real-world platforms.
          </p>
          <p className="text-gray-400 mt-2">
            You’re ready to explore tools like AEM, WordPress, or Headless CMS in depth.
          </p>
        </motion.div>

        {/* NAV */}
        <div className="flex justify-between pt-10">
          <Link href="/step6">← Back</Link>
          <Link href="/">Go to Home →</Link>
        </div>

      </div>
    </div>
  );
}