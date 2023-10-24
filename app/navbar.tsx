'use client';

import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const currentPath = usePathname();
  const link = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues"},
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
              className = {classnames({
                'text-green-300 underline' : link.href === currentPath,
                'text-zinc-300' : link.href !== currentPath,
                'hover:text-green-800 transition-colors' : true
              })}>
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
