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
} from "react-icons/fa6";
import img1 from "@/../public/images/me.jpg";
import Image from "next/image";

const SideCard = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center gap-4">
      {/* Profile Image */}
      <Image
        src={img1}
        alt="Monalisa Ashley"
        className="w-52 h-52 rounded-2xl object-cover -mt-16 border-4 border-white shadow-md"
      />
      {/* Name and Title */}
      <h2 className="text-2xl font-bold mt-2">Sankalp Nagle</h2>
      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
        Full-Stack Web Developer
      </span>
      {/* Social Icons */}
      <div className="flex gap-3 mt-2">
        <a
          href="#"
          className="bg-gray-100 p-2 rounded-lg hover:bg-blue-100 transition"
        >
          <FaFacebookF className="text-blue-600 w-5 h-5" />
        </a>
        <a
          href="#"
          className="bg-gray-100 p-2 rounded-lg hover:bg-blue-100 transition"
        >
          <FaTwitter className="text-sky-400 w-5 h-5" />
        </a>
        <a
          href="#"
          className="bg-gray-100 p-2 rounded-lg hover:bg-pink-100 transition"
        >
          <FaInstagram className="text-pink-500 w-5 h-5" />
        </a>
        <a
          href="#"
          className="bg-gray-100 p-2 rounded-lg hover:bg-blue-100 transition"
        >
          <FaLinkedinIn className="text-blue-700 w-5 h-5" />
        </a>
      </div>
      {/* Contact Info */}
      <div className="bg-gray-50 rounded-2xl w-full mt-4 p-4 flex flex-col gap-4">
        <div className="flex items-center gap-3 border-b pb-3">
          <PhoneIcon className="w-6 h-6 text-pink-400 bg-pink-100 p-1 rounded-lg" />
          <div>
            <div className="text-xs text-gray-400">Phone</div>
            <div className="text-sm font-medium text-gray-700">
              +91 9302959198
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 border-b pb-3">
          <EnvelopeIcon className="w-6 h-6 text-sky-400 bg-sky-100 p-1 rounded-lg" />
          <div>
            <div className="text-xs text-gray-400">Email</div>
            <div className="text-sm font-medium text-gray-700">
              sankalp.nagle06@gmail.com
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 border-b pb-3">
          <MapPinIcon className="w-6 h-6 text-purple-400 bg-purple-100 p-1 rounded-lg" />
          <div>
            <div className="text-xs text-gray-400">Location</div>
            <div className="text-sm font-medium text-gray-700">
              Indore, Madhya Pradesh
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <CalendarIcon className="w-6 h-6 text-fuchsia-400 bg-fuchsia-100 p-1 rounded-lg" />
          <div>
            <div className="text-xs text-gray-400">Birthday</div>
            <div className="text-sm font-medium text-gray-700">
              Sep 06, 1997
            </div>
          </div>
        </div>
      </div>
      {/* Download CV Button */}
      <button className="mt-4 w-full flex items-center hover:cursor-pointer justify-center gap-2 bg-gradient-to-r from-sky-500 to-sky-700 text-white font-semibold py-3 rounded-xl shadow hover:from-sky-600 hover:to-sky-800 transition">
        <ArrowDownTrayIcon className="w-5 h-5" />
        Download CV
      </button>
    </div>
  );
};

export default SideCard;
