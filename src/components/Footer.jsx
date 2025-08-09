import React from "react";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-12 text-sm text-gray-600 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Left Section */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <img src="/images/sim.png" alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-gray-800 text-lg">simfree</span>
          </div>
          <p className="text-gray-500 leading-relaxed">
            Ut sit semper magna iaculis consequat pulvinar et nibh.
            Molestie pretium mauris turpis quam cras sit et.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-800">Documentation</a></li>
            <li><a href="#" className="hover:text-gray-800">GitHub</a></li>
            <li><a href="#" className="hover:text-gray-800">GitHub</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-800">Blog</a></li>
            <li><a href="#" className="hover:text-gray-800">Changelog</a></li>
            <li><a href="#" className="hover:text-gray-800">FAQs</a></li>
          </ul>
        </div>

        {/* More Company + Right Column */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
          <ul className="space-y-2 mb-6">
            <li><a href="#" className="hover:text-gray-800">Contact</a></li>
            <li><a href="#" className="hover:text-gray-800">X (Twitter)</a></li>
            <li><a href="#" className="hover:text-gray-800">Privacy</a></li>
            <li><a href="#" className="hover:text-gray-800">Terms</a></li>
          </ul>
          {/* Align to top, icons under © */}
          <div>
            <p className="mb-2">© 2024</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-800"><FaLinkedin size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-gray-800"><FaInstagram size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-gray-800"><FaXTwitter size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
