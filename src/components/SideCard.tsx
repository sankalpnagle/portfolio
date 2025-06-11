import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import img1 from "@/../public/images/me.jpg";
import Image from "next/image";

const SideCard = () => {
  return (
    <div className="w-full mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 flex flex-col items-center gap-4 transition-colors duration-200">
      {/* Profile Image */}
      <Image
        src={img1}
        alt="Monalisa Ashley"
        className="w-52 h-52 rounded-2xl object-cover -mt-16 border-4 border-white dark:border-gray-800 shadow-md"
      />
      {/* Name and Title */}
      <h2 className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-100">
        Sankalp Nagle
      </h2>
      <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm font-medium">
        Full-Stack Web Developer
      </span>
      {/* Social Icons */}
      <div className="flex gap-3 mt-2">
        <a
          href="https://www.facebook.com/sankalpn/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
        >
          <FaFacebookF className="text-blue-600 dark:text-blue-400 w-5 h-5" />
        </a>
        <a
          href="https://github.com/sankalpnagle"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
        >
          <FaGithub className="text-sky-400 w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/sankalp_nagle/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-900/30 transition"
        >
          <FaInstagram className="text-pink-500 dark:text-pink-400 w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/sankalp-nagle-a54166199/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
        >
          <FaLinkedinIn className="text-blue-700 dark:text-blue-400 w-5 h-5" />
        </a>
      </div>
      {/* Contact Info */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl w-full mt-4 p-4 flex flex-col gap-4">
        <div className="flex items-center gap-3 border-b dark:border-gray-700 pb-3">
          <PhoneIcon className="w-6 h-6 text-pink-400 bg-pink-100 dark:bg-pink-900/30 p-1 rounded-lg" />
          <div>
            <div className="text-xs text-gray-400 dark:text-gray-500">
              Phone
            </div>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              <a
                href="tel:+919302959198"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400"
              >
                +91 9302959198
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 border-b dark:border-gray-700 pb-3">
          <EnvelopeIcon className="w-6 h-6 text-sky-400 bg-sky-100 dark:bg-sky-900/30 p-1 rounded-lg" />
          <div>
            <div className="text-xs text-gray-400 dark:text-gray-500">
              Email
            </div>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              <a
                href="mailto:sankalp.nagle06@gmail.com"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400"
              >
                sankalp.nagle06@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 border-b dark:border-gray-700 pb-3">
          <MapPinIcon className="w-6 h-6 text-purple-400 bg-purple-100 dark:bg-purple-900/30 p-1 rounded-lg" />
          <div>
            <div className="text-xs text-gray-400 dark:text-gray-500">
              Location
            </div>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Indore, Madhya Pradesh
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <CalendarIcon className="w-6 h-6 text-fuchsia-400 bg-fuchsia-100 dark:bg-fuchsia-900/30 p-1 rounded-lg" />
          <div>
            <div className="text-xs text-gray-400 dark:text-gray-500">
              Birthday
            </div>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Sep 06, 1997
            </div>
          </div>
        </div>
      </div>
      {/* Download CV Button */}
      <a
        href="/cv.pdf"
        download="Sankalp_Nagle_Resume.pdf"
        className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-sky-700 dark:from-sky-600 dark:to-sky-800 text-white font-semibold py-3 rounded-xl shadow hover:from-sky-600 hover:to-sky-800 dark:hover:from-sky-700 dark:hover:to-sky-900 transition"
      >
        <ArrowDownTrayIcon className="w-5 h-5" />
        Download CV
      </a>
    </div>
  );
};

export default SideCard;
