"use client";
import {
  opation_about,
  opation_press,
  opation_shop,
} from "@/app/constants/website";
import { usePathname } from "next/navigation";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import Img from "./Img";

const sections = [
  { title: "Shop", items: opation_shop },
  { title: "Press", items: opation_press },
  { title: "About", items: opation_about },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname == "/dashboard") return null;
  return (
    <footer className="bg-secondery_dash p-3">
      <div className="m-auto w-[90%] grid grid-cols-4 max-md:grid-cols-2 border-b border-gray-400 gap-4">
        <div className="h-fit w-3/4">
          <Img
            className="border-b w-40 border-gray-400 mb-2"
            src="/website/logo.svg"
            alt="logo"
          />
          <p className="text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit officiis
            corporis optio natus.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.title} className="text-gray-400">
            <h1 className="text-white text-lg py-2">{section.title}</h1>
            <ul>
              {section.items.map((item) => (
                <li
                  key={item}
                  className="p-1 hover:ml-2 hover:text-primary duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-white text-base pt-4 w-[90%]  mx-auto flex items-center justify-between max-md:flex-col max-sm:items-start max-md:gap-8 gap-4">
        <div className="flex items-center gap-3 w-1/2 max-md:w-fit">
          <p className="border-r border-gray-400 p-2 ">Privacy Policy</p>
          <p className="border-r border-gray-400 p-2 ">Terms & Conditions</p>
          <p className=" ">Code of Conduct</p>
        </div>

        <div className="flex gap-4 text-xl">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaPinterestP />
        </div>
      </div>

      <div className="w-[90%] m-auto text-white pt-4">
        <p className="w-1/2 max-md:w-full text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
          fuga. Ex at maxime eum odio quibusdam pariatur expedita explicabo
          harum! Consectetur ducimus delectus nemo, totam odit!
        </p>
      </div>
    </footer>
  );
}
