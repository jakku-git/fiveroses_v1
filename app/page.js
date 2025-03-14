'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { BackgroundBoxesDemo } from "./components/BackgroundBoxesDemo";



export default function Home() {
  return (
    <div className="font-sans antialiased bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#FFD1DC,transparent)]"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-20 bg-white bg-opacity-90 backdrop-blur shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          <div className="text-3xl font-semibold tracking-tighter text-gray-900">fiveroses</div>
          <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
            {['About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
              <li key={item} className="hover:text-black cursor-pointer transition duration-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
          style={{ playbackRate: 0.5 }}
        >
          <source src="/5981788-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold tracking-tight"
          >
            YOUR BRAND&apos;S STORY STARTS HERE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-xl font-light"
          >
            WHERE YOUR IDEAS COME ALIVE
          </motion.p>
          {/* Custom Animated Button */}
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-lg font-medium text-white backdrop-blur-3xl">
              Start Now
            </span>
          </button>
        </div>
      </section>

      {/* Background Boxes Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 max-w-3xl text-center">
          <BackgroundBoxesDemo />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="container mx-auto px-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} fiveroses. All rights reserved. | info@fiveroses.com.au
          </p>
        </div>
      </footer>
    </div>
  );
}
