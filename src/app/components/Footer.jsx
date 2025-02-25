"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ClockIcon,
  PhoneIcon,
  EmailIcon,
  MapPinIcon,
  InstagramIcon,
  XIcon,
  FacebookIcon,
} from "./SvgIcons";
import { usePathname } from "next/navigation";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Life At Bennet", href: "/life-at-bennet" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-white pt-16 pb-8 border-t-4 border-[#aeca1d] 2xl:container">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-start text-center space-y-6">
            {/* Logo */}
            <div className="flex  w-full">
              <Image
                src="/bennet.png"
                alt="Bennet Pharmaceuticals Ltd."
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            {/* Contact Details */}
            <div className="space-y-4 text-start ml-2.5">
              <div className="flex items-center space-x-3 md:mt-3 lg:mt-1 ">
                <div className="scale-[0.8] -ml-1 max-w-[24px]">
                  <MapPinIcon className="w-4 h-4 text-[#9DC41A]" />
                </div>
                <p className="text-sm">
                  608 B Wing, 6th Floor
                  <br />
                  Manubhai Tower, Sayajigunj, Sayajigunj,
                  <br />
                  Vadodara, Gujarat 390005
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-4 h-4 text-[#9DC41A]" />
                <p className="text-sm">0265 236 1750</p>
              </div>
              <div className="flex items-center space-x-3">
                <EmailIcon className="w-4 h-4 text-[#9DC41A]" />
                <p className="text-sm">sale@bennet.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <ClockIcon className="w-4 h-4 text-[#9DC41A]" />
                <p className="text-sm">10:00 - 18:00, Mon - Sat</p>
              </div>
            </div>
          </div>

          {/* Quicklinks */}
          <div className="flex flex-col md:items-center md:text-center space-y-6">
            <h3 className="text-lg font-bold mb-6 lg:mb-2  ml-2 md:ml-0">
              Quicklinks
            </h3>
            <ul className="space-y-3 text-start ml-2.5 ">
              {navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#9DC41A]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:items-center md:text-center space-y-6">
            <h3 className="text-lg font-bold mb-6 lg:mb-2 ml-2 md:ml-0 ">
              Connect With Us
            </h3>
            <div className="space-y-4 text-start ml-2.5">
              <div className="flex items-center space-x-3">
                <FacebookIcon className="w-4 h-4 text-[#9DC41A]" />
                <span className="text-sm">xyz@.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <XIcon className="w-4 h-4 text-[#9DC41A]" />
                <span className="text-sm">xyz@.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <InstagramIcon className="w-4 h-4 text-[#9DC41A]" />
                <span className="text-sm">xyz@.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
