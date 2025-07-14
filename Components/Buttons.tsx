"use client";

import {links} from "@/lib/links"
import Link from "next/link";

const Buttons = () => {
  return (
    <section
      id="cta"
      className="w-full bg-neutral-300 dark:bg-neutral-800 py-16 px-6 flex flex-col items-center space-y-6"
    >
      <h2 className="text-3xl font-semibold text-center text-neutral-800 dark:text-neutral-100">
        Know more about me
      </h2>
      <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl">
        Through my Github and LinkedIn!
      </p>
      <div className="flex space-x-4">
        <Link href={links.github}>
            <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg shadow hover:bg-white hover:text-cyan-500 transition">
            Github
            </button>
        </Link>
        <Link href={links.linkedin}>
            <button className="px-6 py-2 border border-cyan-500 text-cyan-500 rounded-lg shadow hover:bg-white transition">
            LinkedIn
            </button>
        </Link>
      </div>
    </section>
  );
};

export default Buttons;
