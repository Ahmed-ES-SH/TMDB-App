import Img from "@/app/_components/_globalComponents/Img";
import MotionDiv from "@/app/_components/_globalComponents/MotionDiv";
import SignupForm from "@/app/_components/_client/auth/SignupForm";

export default function SignUpPage() {
  const variants = {
    hidden: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <>
      <div className="relative w-full min-h-screen max-xl:pt-[80px] max-xl:pb-[30px] flex items-center justify-center overflow-hidden bg-black">
        {/* background */}
        <Img
          src="/website/main-bg.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover z-1 opacity-40"
        />

        {/* Form Content*/}
        <MotionDiv
          variants={variants}
          className="z-2 bg-fourth_color backdrop-blur-md shadow-lg rounded-xl  max-w-4xl w-[95%] border border-gray-700 p-6 flex flex-col items-center gap-6"
        >
          <Img src="/website/logo.svg" className="w-24" />

          <h2 className="text-white text-xl font-semibold">Welcome</h2>
          <p className="text-sm text-gray-300 text-center">
            Register with new account to continue watching
          </p>
          {/* Sign up Form For Clean Code */}
          <SignupForm />
        </MotionDiv>
      </div>
    </>
  );
}
