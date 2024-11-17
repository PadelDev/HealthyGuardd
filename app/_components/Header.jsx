import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link dari Next.js
import { Button } from "@/components/ui/button";

function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "ChatAI",
      path: "/CHATAI",
    },
    {
      id: 3,
      name: "Article",
      path: "/Article",
    },
    {
      id: 4,
      name: "Prediksi Biaya ",
      path: "/Prediksi Biaya ",
    },
    {
      id: 5,
      name: "Personalized Medicine",
      path: "/Personalized Medicine",
    },
    {
      id: 6,
      name: " Analisis Nutrisi ",
      path: "/ Analisis Nutrisi ",
    },
    {
      id: 7,
      name: " Consultasi Doctor  ",
      path: "/ Consultasi Doctor ",
    },
  ];

  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo1.png" alt="logo" width={180} height={80} />

        <ul className="md:flex gap-8 hidden">
          {Menu.map((item) => (
            <li
              key={item.id}
              className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>


      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
