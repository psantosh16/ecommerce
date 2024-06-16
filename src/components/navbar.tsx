"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [state, setState] = useState(false);

  const menus = [
    { title: "🛍️ ShopCart", path: "/" },
    { title: "Electronics", path: "/product/electronics" },
    { title: "Men", path: "/product/men" },
    { title: "Women", path: "/product/women" },
    { title: "Kids", path: "/product/kids" },
  ];

  return (
    <nav className="bg-zinc-100 w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 md:flex-row-reverse">
        <div className="flex items-center justify-between py-3 md:py-2 md:block">
          <div className="md:hidden">
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => setState(!state)}
            >
              <Menu />
            </Button>
          </div>
          <div id="cart">
            <Link href="/cart">
              <Button size={"sm"} variant={"secondary"}>
                🛒 Cart
              </Button>
            </Link>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-left items-center space-y-4 md:flex md:space-x-6 md:space-y-0 select-none">
            {menus.map((item, idx) => (
              <Button
                key={idx}
                variant={`${idx === 0 ? "ghost" : "link"}`}
                className={`${idx === 0 ? "font-bold text-xl block" : ""}`}
                onClick={() => setState(!state)}
              >
                <Link href={item.path}>{item.title}</Link>
              </Button>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
