import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700">
      <div className="py-6 text-center safe-x-padding flex flex-col items-center gap-2">
        <p className="text-base font-medium md:text-xl lg:text-2xl flex items-center gap-2 justify-center text-gray-800 dark:text-gray-200">
          ©{new Date().getFullYear()} Ayesh Vininda
          <span className="text-red-500" aria-hidden="true">
            <FaHeart className="inline-block" />
          </span>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
