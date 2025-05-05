import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import { PiSignIn } from "react-icons/pi";
import MobailLinks from "./MobailLinks";
import BarsButton from "../_client/BarsButton";
import NavbarDiv from "../_client/NavbarDiv";
import DotsNavbar from "../_client/DotsNavbar";
import ResponsiveSearchBar from "../_client/ResponsiveSearchBar";
import Image from "next/image";
import InputSearchData from "../_client/InputSearchData";

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
                <InputSearchData />
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
