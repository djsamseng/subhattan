import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import SEOComponent from "../components/seo-component"

const ImageComponent = ({img, caption, subcaption, color}: { img: any, caption: string, subcaption: string, color: string}) => {
  const subCap = subcaption ? (
    <div className={`text-lg sm:text-xl text-center p-5 ${color}`}>{subcaption}</div>
  ) : (<div></div>);
  return (
    <div className="max-w-[720px] flex flex-col items-center">
      {img}
      <div className="absolute max-w-[720px]">
        <div className={`text-3xl sm:text-5xl text-center text-wrap ${color}`}>{caption}</div>
        { subCap }
      </div>




    </div>
  )
}

const IndexPage = () => {
  const images = [
    {
      img: <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/ZoomBackground.jpg"
        className=""
      />,
      caption: "Your New Zoom Background",
      subcaption: "",
      color: "text-white",
    },
    {
      img: <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/LunchBreak.jpg"
        className=""
      />,
      caption: "Lunch Break",
      subcaption: "",
      color: "text-white",
    },
    {
      img: <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/VinePulling.jpeg"
        className=""
      />,
      caption: "Addressing PR Nitpicks",
      subcaption: "(Pulling Vines = Best Stress Reliever)",
      color: "text-black",
    },
    {
      img: <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/OfficeHappyHourPool.jpeg"
        className=""
      />,
      caption: "Office Happy Hour At The Pool",
      subcaption: "",
      color: "text-white",
    },
    {
      img: <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/SunsetDinner.jpeg"
        className=""
      />,
      caption: "Diner After Work",
      subcaption: "",
      color: "text-white mt-20",
    },
    {
      img: <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/WinFreeSwag.JPG"
        className=""
      />,
      caption: "Win Free Swag",
      subcaption: "",
      color: "text-white",
    },
    {
      img: <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/Tesla.jpeg"
        className=""
      />,
      caption: "Buy The Tesla You've Always Wanted",
      subcaption: "(And Have Somewhere To Park It)",
      color: "text-gray-100",
    },

    /*{
      img: <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/LetTheDogOut.jpg"
        className=""
      />,
      caption: "Let The Dog Out",
      subcaption: "",
    }*/
  ]
  return (
    <div className="font-['Tapestry']">
      <SEOComponent />
      <main>
        <div className="flex flex-col items-center p-5">
          <h1 className="font-['Whisper'] text-7xl sm:text-9xl">Subhattan</h1>
          <h2 className=" text-xl">NYC &#8594; Suburbs</h2>
        </div>

        <div className=" flex flex-col items-center">
          {
            images.map((imData, idx) => {
              const bg = idx % 2 == 0 ? "bg-white" : "bg-white"
              return (
                <div className={`relative ${bg} w-full flex flex-col items-center`}>
                  <ImageComponent img={imData.img} caption={imData.caption} subcaption={imData.subcaption} color={imData.color}/>
                </div>

              );
            })
          }
        </div>
        <div className="text-center font-sans my-5">
          <div className="text-5xl">Convinced Yet?</div>
          <div className="">Take the non-stop/1-stop train to Stamford/Greenwich/Darien/Fairfield</div>
          <div className="">We'll Come Pick You Up and Show You Around</div>
        </div>
        <div className="flex flex-col items-center font-sans my-5">
          <div className="flex flex-row items-center">
            <StaticImage alt="" src="../images/ChantalSeng.jpeg" className=""/>
            <div className="flex flex-col items-start">
              <div className="">Chantal Seng</div>
              <div className="">Contact: <a className="text-sky-600 underline" href="tel:2038247038">203-824-7038</a></div>
              <div className="">Email: <a className="text-sky-600 underline" href="mailto:chantals@afahomes.com">chantals@afahomes.com</a></div>
            </div>
          </div>
          </div>
        <div className="text-center font-sans my-5">
          <div className="text-5xl">But Houses Are Expensive!</div>
          <div className="">You're a Software Engineer - You Can Afford It</div>
          <div className="">(Or You're Underpaid)</div>
        </div>
      </main>
    </div>
  )
}


export default IndexPage
