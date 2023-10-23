import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const link = [
    { label: "Dashboard", href: "./" },
    { label: "Issues", href: "./issues" },
  ];

  return (
    <div>
      <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center justify-between">
        <Link href="/">
          <AiFillBug />
        </Link>
        <ul className="flex space-x-10">
          {link.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-300 hover:text-zinc-800"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
