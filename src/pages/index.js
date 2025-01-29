import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      {/* Banner Section */}

      <section className="bannerImage w-full">
        <div className=" mx-auto max-w-7xl flex items-center h-full">
          <div className="basis-1/2 ">
            <div className="flex flex-col gap-5">
              <h1 className="text-[65px] capitalize leading-[70px] text-black"  >
                An Ancient Key for Total Wellbeing
              </h1>
              <p className="text-[24px] text-gray-700 font-normal">
                Velit potenti vulputate phasellus quam odio nullam leo nec massa
                ligula cursus. Sapien pellentesque orci facilisis magnis
                efficitur sagittis dictumst.
              </p>
              <button className="text-[17px] capitalize text-white bg-[#f1592a] w-fit px-[40px] py-[10px]">
                discove more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
