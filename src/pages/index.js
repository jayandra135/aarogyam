import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {
  CheckIcon,
  ChatBubbleLeftRightIcon,
  GlobeEuropeAfricaIcon,
  Bars3BottomLeftIcon,
  Cog8ToothIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import whowe1 from "../../public/images/whowe1.jpg";
import whowe2 from "../../public/images/whowe2.jpg";
import leaf from "../../public/images/leaf.png";
import arrow from "../../public/images/arrow.png";
import mark from "../../public/images/mark.png";
import whyChoose from "../../public/images/whyChoose.jpg";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const offerData = [
    {
      icon: null,
      miniTitle: "What We Offer",
      title: "A holistic journey to harmony",
      para: "Aliquam class vivamus a urna dictumst lorem praesent facilisi primis. Malesuada a tortor lorem lacinia sagittis leo.",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      miniTitle: "",
      title: "Consultation",
      para: "Ut placerat tincidunt ullamcorper penatibus metus class ipsum nam fusce. Risus neque eros nec rhoncus luctus.",
    },
    {
      icon: GlobeEuropeAfricaIcon,
      miniTitle: "",
      title: "Ayurvedic Treatments",
      para: "Aliquam class vivamus a urna dictumst lorem praesent facilisi primis. Malesuada a tortor lorem lacinia sagittis leo.",
    },
    {
      icon: BoltIcon,
      miniTitle: "",
      title: "Theta Healing",
      para: "Ut placerat tincidunt ullamcorper penatibus metus class ipsum nam fusce. Risus neque eros nec rhoncus luctus.",
    },
    {
      icon: Bars3BottomLeftIcon,
      miniTitle: "",
      title: "Coaching Program",
      para: "Aliquam class vivamus a urna dictumst lorem praesent facilisi primis. Malesuada a tortor lorem lacinia sagittis leo.",
    },
    {
      icon: Cog8ToothIcon,
      miniTitle: "",
      title: "Yoga & Meditation",
      para: "Aliquam class vivamus a urna dictumst lorem praesent facilisi primis. Malesuada a tortor lorem lacinia sagittis leo.",
    },
  ];

  const whyChooseData = [
    {
      title: "100% Organic Herbal",
      para: "Nisl pharetra lobortis mi litora ultrices si. Enim tellus senectus dignissim cras phasellus netus",
    },
    {
      title: "Professional Therapist",
      para: "Nisl pharetra lobortis mi litora ultrices si. Enim tellus senectus dignissim cras phasellus netus.",
    },
    {
      title: "Hereditary Recipe",
      para: "Nisl pharetra lobortis mi litora ultrices si. Enim tellus senectus dignissim cras phasellus netus.",
    },
  ];
  const howWorkData = [
    {
      id:1,
      title:"Consultation with our experts",
      para:"Cursus potenti maecenas nulla sem letius est torquent luctus. Egestas si efficitur consectetuer litora per augue."
    },
    {
      id:2,
      title:"Get an appointment",
      para:"Cursus potenti maecenas nulla sem letius est torquent luctus. Egestas si efficitur consectetuer litora per augue."
    },
    {
      id:3,
      title:"Enjoy your service",
      para:"Cursus potenti maecenas nulla sem letius est torquent luctus. Egestas si efficitur consectetuer litora per augue."
    },
  ]
  return (
    <>
      {/* Banner Section */}

      <section className="bannerImage w-full">
        <div className=" mx-auto max-w-7xl flex items-center h-full">
          <div className="basis-1/2 ">
            <div className="flex flex-col gap-5">
              <h1 className="text-[65px] capitalize leading-[70px] text-black">
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
      {/* who are we */}
      <section className="mt-28 flex mx-auto max-w-7xl items-center ">
        <div className="basis-2/4">
          <div className="relative  flex items-center justify-center ">
            <div className="grid grid-cols-2 gap-5">
              <Image src={whowe1} alt="whowe1" />
              <Image src={whowe2} alt="whowe2" />
            </div>

            <div className="bg-white shadow-sm p-4 absolute w-[300px] ">
              <div className="border-[#b2be59] border p-5 flex flex-col items-center text-center">
                <Image src={leaf} alt="leaf" className="w-[40px] h-[40px]" />
                <h2 className="text-[25px]">Renew yourself with ayurveda</h2>
                <p className="text-gray-500 text-base">
                  Vestibulum blandit ultrices arcu parturient nulla aptent nec
                  consequat facilisi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-2/5 ml-9">
          <div className="flex flex-col gap-4">
            <h5 className="text-md uppercase text-[17px]">who we are</h5>
            <h2 className="text-[42px] leading-[40px]">
              The natural way to achieving balance and optimal health
            </h2>
            <p className="text-lg text-gray-500">
              Rutrum bibendum etiam nunc penatibus pede. Curae at pede ante ac
              eget quam. Taciti a nulla montes aenean integer sem vehicula dui.
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex gap-x-2">
                <CheckIcon className="w-5 h-5 text-green-800 font-semibold" />
                <h6 className="text-[17px] text-[#535353] font-bold ">
                  100% Organic Herbal
                </h6>
              </div>
              <div className="flex gap-x-2">
                <CheckIcon className="w-5 h-5 text-green-800 font-semibold" />
                <h6 className="text-[17px] text-[#535353] font-bold ">
                  Professional Therapist
                </h6>
              </div>
              <div className="flex gap-x-2">
                <CheckIcon className="w-5 h-5 text-green-800 font-semibold" />
                <h6 className="text-[17px] text-[#535353] font-bold ">
                  Hereditary Recipe
                </h6>
              </div>
              <div className="flex gap-x-2">
                <CheckIcon className="w-5 h-5 text-green-800 font-semibold" />
                <h6 className="text-[17px] text-[#535353] font-bold ">
                  24/7 Customer Support
                </h6>
              </div>
            </div>
            <button className="text-[17px] capitalize text-white bg-[#f1592a] w-fit px-[40px] py-[10px]">
              More about us
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bgSpaceImage mt-28 h-[350px]">
        <div className="mx-auto max-w-7xl h-full">
          <div className="flex items-center h-full">
            <div className="basis-2/5">
              <div className="flex flex-col  ">
                <h2 className="text-[42px] font-medium">
                  Unlock the secrets to living well with ayurveda
                </h2>
                <p className="text-[18px] text-gray-500">
                  Posuere sodales platea elit libero tempus penatibus tellus
                  fermentum aliquet elementum. Montes tristique rutrum ornare
                  vel turpis maecenas lacus senectus. Mi interdum hendrerit enim
                  platea si.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* what we offer */}
      <section className="mx-auto max-w-7xl mt-28">
        <div className="grid grid-cols-3 gap-5 ">
          {offerData?.map((ele, index) => {
            const IconComponent = ele.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col gap-3 bg-gray-100 p-7"
              >
                {IconComponent && (
                  <IconComponent className="w-10 h-10 text-white bg-[#b2be59] p-2" />
                )}
                {index === 0 && (
                  <h2 className="text-[18px] uppercase">{ele?.miniTitle}</h2>
                )}
                <h3
                  className={`${
                    index === 0 ? "text-[42px] leading-[40px]" : "text-[25px]"
                  } `}
                >
                  {ele?.title}
                </h3>
                <p className="text-[16px] text-gray-500">{ele?.para}</p>

                <div className="absolute right-0 top-0 border-l-[6px] border-b-[6px] border-l-white border-b-white  ">
                  <Image
                    src={arrow}
                    alt="arrow"
                    className="w-[40px] h-[40px] shadow-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mx-auto max-w-7xl mt-28 ">
        <div className="flex gap-5">
          <div className="basis-2/5">
            <div className="flex flex-col gap-y-5">
              <h4 className="text-[18px] uppercase">Why Choose Us</h4>
              <h2 className="text-[42px] leading-[45px]">Nature’s secret for your truly health</h2>
              <p className="text-gray-500 text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              {whyChooseData?.map((ele, index) => {
                return (
                  <div className="flex gap-x-5" key={index}>
                    <CheckIcon className="w-[60px] h-[60px] bg-[#b2be59] text-white p-3" />
                    <div className="flex flex-col gap-y-2">
                      <h4 className="text-[20px]">{ele?.title}</h4>
                      <p className="text-[16px] text-gray-500">{ele?.para}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="basis-3/5">
              <Image src={whyChoose} alt="whyChoose" className="w-full" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl mt-28 mb-28">
            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-5">
                  {
                    howWorkData?.map((ele,index)=>{
                        return(
                          <div className={`${index===0?"bg-[#b2be59]":"border-l-4 border-l-[#b2be59] hover:bg-[#b2be59]"} flex gap-x-5 p-5 shadow-lg items-start `}>
                              <h6 className={`${index===0?"bg-white text-[#b2be59]": " bg-[#b2be59] text-white hover:bg-white hover:text-[#b2be59] "} text-[18px] px-5 py-2 ` }>{ele?.id}</h6>
                              <div className="flex flex-col">
                                  <h4 className="text-[24px]">{ele?.title}</h4>
                                  <p className="text-[18px] text-gray-500">{ele?.para}</p>
                              </div>
                          </div>
                        )
                    })
                  }
                </div>
            </div>
      </section>
    </>
  );
}
