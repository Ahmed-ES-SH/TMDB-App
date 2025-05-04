import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import { PiSignIn } from "react-icons/pi";
import MobailLinks from "./MobailLinks";
import BarsButton from "../_client/BarsButton";
import NavbarDiv from "../_client/NavbarDiv";
import DotsNavbar from "../_client/DotsNavbar";
import ResponsiveSearchBar from "../_client/ResponsiveSearchBar";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    {
      label: "Home",
      href: "/",
      type: "link",
    },
    {
      label: "Top Movies",
      type: "custom", // عنصر مخصص (ليس رابطًا فعليًا)
    },
    {
      label: "Movies",
      href: "/movies",
      type: "link",
    },
    {
      label: "Pricing plans",
      href: "/movies",
      type: "link",
    },
  ];
  return (
    <>
      <NavbarDiv>
        <MobailLinks />
        <div className="w-[80%] h-[70px] relative max-sm:w-full max-xl:w-[95%] mx-auto p-4 max-md:p-4 ">
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="left flex items-center gap-12">
              <div className="flex items-center gap-2 ">
                <BarsButton />
                <Image
                  src="/website/logo.svg"
                  className="w-24 max-md:w-16"
                  alt="logo"
                  width={1024}
                  height={1280}
                  priority
                />
              </div>
              <div id="links" className="xl:flex hidden items-center gap-8">
                {navLinks.map((item, index) => {
                  if (item.type === "link") {
                    return (
                      <Link
                        key={index}
                        href={item.href as string}
                        className="text-lg hover:text-primary_blue text-white duration-300 whitespace-nowrap"
                      >
                        {item.label}
                      </Link>
                    );
                  } else if (item.type === "custom") {
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-white cursor-pointer hover:text-primary_blue duration-300 group/show"
                      >
                        <p className="whitespace-nowrap">{item.label}</p>
                        <FaCircle className="size-2" />
                      </div>
                    );
                  }
                })}

                <DotsNavbar />
              </div>
            </div>
            <div className="right flex items-center gap-0 lg:gap-4">
              <div className="relative">
                <input
                  type="text"
                  className="hidden lg:block bg-[#151f30] border-2 border-gray-500 rounded-full py-2 w-[300px] 2xl:w-[350px] placeholder:text-gray-200 placeholder:text-[13px] placeholder:px-6 outline-none px-3 text-gray-200 focus:border-sky-300 duration-300"
                  placeholder="i`m looking for ..."
                />
                <ResponsiveSearchBar />
              </div>
              <Link href={"/signin"} className="flex items-center gap-2 group ">
                <h4 className="group-hover:text-primary_blue text-white duration-300 whitespace-nowrap">
                  Sign in
                </h4>
                <PiSignIn className="size-6 text-primary_blue group-hover:text-green-500 duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </NavbarDiv>
    </>
  );
}
