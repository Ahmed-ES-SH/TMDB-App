import Link from "next/link";

export const Genre1 = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Sci - Fi",
  "Thriller",
  "Biography",
  "Family",
  "Romance",
  " Animation",
];
export const Genre2 = [
  "Thriller",
  "Adventure",
  "Biography",
  "Action",
  "Family",
  "Sci - Fi",
  "Romance",
  "Drama",
  "Comedy",
];

export const opation_nav = [
  "About us",
  <Link href="/dashbord" key={"key"}>
    profile
  </Link>,
  "Contacts",
  "Interview",
  "Admin pages",
  "Privacy policy",
  <Link href="/signin" key={"key"}>
    Sign in
  </Link>,
  <Link href="/signup" key={"key"}>
    Sign up
  </Link>,
  "Forgot password",
  "404 Page",
];

export const opation_shop = [
  "Sell online",
  "Features",
  "Examples",
  "Website editors",
  "Online retail",
];
export const opation_press = [
  "Events",
  "News",
  "Awards",
  "Testimonials",
  "Online retail",
];
export const opation_about = [
  "Contact",
  "Services",
  "Team",
  "Career",
  "Contacts",
];

export const prof_opation = [
  <Link href={"/dashbord"} key="key">
    Profile
  </Link>,

  <div key="key">Logout</div>,
];

export const dash_navs = [
  {
    title: "Profile",
    icon: "fa-solid fa-user",
  },
  {
    title: "watched",
    icon: "fa-solid fa-eye",
  },
  {
    title: "Watchlist",
    icon: "fa-solid fa-list-check",
  },
  {
    title: "Favorite",
    icon: "fa-solid fa-heart",
  },
];

/// styles for classes

export const Styles = {
  h1: "px-12 max-sm:px-4 py-2 duration-300 font-bold  border cursor-pointer text-white rounded-md w-fit",
  shadow_light:
    "0px 10px 15px -3px #2f80ed,0px 10px 15px -3px #2f80ed,0px 10px 15px -3px #2f80ed",
};
