import Link from "next/link";
import Img from "./Img";
import { FaCircle } from "react-icons/fa";
import { PiSignIn } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import MobailLinks from "./MobailLinks";
import BarsButton from "../_client/BarsButton";
import NavbarDiv from "../_client/NavbarDiv";

export default function Navbar() {
  return (
    <>
      <NavbarDiv>
        <MobailLinks />
        <div className="w-[80%] h-[70px] max-sm:w-full max-lg:w-[95%] mx-auto p-4 max-md:p-4 ">
          <div className="flex items-center justify-between">
            <div className="left flex items-center gap-12">
              <div className="flex items-center gap-2 ">
                <BarsButton />
                <Img src="/website/logo.svg" className="w-24" alt="logo" />
              </div>
              <div id="links" className="xl:flex hidden items-center gap-8">
                <Link
                  className="text-lg hover:text-primary_blue text-white duration-300 whitespace-nowrap"
                  href={"/"}
                >
                  Home
                </Link>
                <div className="flex items-center gap-2 text-white cursor-pointer hover:text-primary_blue duration-300  group/show">
                  <p className="whitespace-nowrap">Top Movies</p>
                  <FaCircle className="size-2" />
                </div>
                <Link
                  className="text-lg hover:text-primary_blue text-white duration-300 whitespace-nowrap"
                  href={"/movies"}
                >
                  Movies
                </Link>
                <Link
                  className="text-lg hover:text-primary_blue text-white duration-300 whitespace-nowrap"
                  href={"/movies"}
                >
                  Pricing plans
                </Link>
                <BiDotsHorizontalRounded className="text-white size-6 cursor-pointer hover:text-primary_blue duration-300" />
              </div>
            </div>
            <div className="right flex items-center gap-0 lg:gap-4">
              <div className=" relative">
                <input
                  type="text"
                  className="hidden lg:block bg-[#151f30] border border-gray-500 rounded-full py-2 w-[350px] placeholder:text-gray-200 placeholder:text-[13px] placeholder:px-6 outline-none px-3 text-gray-200"
                  placeholder="i`m looking for ..."
                />
                <CiSearch className="lg:size-5 size-7 text-primary_blue absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer" />
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
