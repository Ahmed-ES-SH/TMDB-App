import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import MobailLinks from "./MobailLinks";
import BarsButton from "../_client/BarsButton";
import NavbarDiv from "../_client/NavbarDiv";
import DotsNavbar from "../_client/DotsNavbar";
import ResponsiveSearchBar from "../_client/ResponsiveSearchBar";
import Image from "next/image";
import InputSearchData from "../_client/InputSearchData";
import { navLinks } from "@/app/constants/website";
import Signinbtn from "../_client/navbar/Signinbtn";

export default function Navbar() {
  return (
    <>
      <NavbarDiv>
        <MobailLinks />
        <div className="w-[80%] h-[70px] relative max-sm:w-full max-xl:w-[95%] mx-auto p-4 max-md:p-4 z-[99]">
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="left flex items-center gap-12">
              <div className="flex items-center gap-2 ">
                <BarsButton />
                <Link href={"/"}>
                  <Image
                    src="/website/logo.svg"
                    className="w-24 max-md:w-16"
                    alt="logo"
                    width={1024}
                    height={1280}
                    priority
                  />
                </Link>
              </div>
              <div id="links" className="xl:flex hidden items-center gap-8">
                {navLinks.map((item, index) => {
                  if (item.type === "link") {
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className="text-lg hover:text-primary_blue text-white duration-300 whitespace-nowrap"
                      >
                        {item.label}
                      </Link>
                    );
                  } else if (item.type === "custom") {
                    return (
                      <Link
                        href={item.href}
                        key={index}
                        className="flex items-center gap-2 text-white cursor-pointer hover:text-primary_blue duration-300 group/show"
                      >
                        <p className="whitespace-nowrap">{item.label}</p>
                        <FaCircle className="size-2 text-red-400 " />
                      </Link>
                    );
                  }
                })}

                <DotsNavbar />
              </div>
            </div>
            <div className="right flex items-center gap-0 lg:gap-4">
              <div className="relative">
                <div className="hidden lg:block">
                  <InputSearchData />
                </div>
                <ResponsiveSearchBar />
              </div>
              <Signinbtn />
              {/* <div className="flex items-center gap-2 group ">
                <div className="w-8 h-8  cursor-pointer">
                  <Img
                    src="/website/avatar.jpg"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </NavbarDiv>
    </>
  );
}
