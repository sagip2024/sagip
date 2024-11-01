import React from 'react'
import AboutUs from '../assets/about/About.jpg'
import Star from '../assets/about/Star.png'
import Rocket from '../assets/about/Rocket.png'
import Moon from '../assets/about/Moon.png'
import Cloud from '../assets/about/Cloud.png'
function About() {
  return (
    <>
      <div className='width-full py-3 grid place-items-center'>
        <div className='bg-[#F7B9C4] my-2 grid place-items-center rounded-full w-64 h-9'>
          <span className='font-bobby text-3xl text-[#DE638A]'
            style={{
              textShadow: "2px 2px 0 #473664, -2px 2px 0 #473664, 2px -2px 0 #473664, -2px -2px 0 #473664",
              color: "#DE638A"
            }}
          >About Us</span>
        </div>
      </div>
      <div className='w-full flex bg-[#efb9c6] py-6'>
            <div className='w-[90%] grid place-items-center'>
              <div className='grid place-items-center w-[80%]'>
                <span>Mabuhay! Pagbati sa inyo sa Katatagan, Kahusayan at Katapan!</span>
                <span className='text-center'>Kung mayroon kayong katanungan, maaari niyo kaming kontakin sa mga sumusunod na plataporma;</span>
                <p>- Gmail: sagipwebpage2024@gmail.com</p>
                <p>- Contact Number: 09561289513 </p>
              </div>
            </div>
            <div className='w-[50%] flex items-center'>
              <img src={AboutUs} alt="" className='w-80 h-72 ml-10' />
            </div>
      </div>
      <div className='w-full h-[80%] grid mt-1 relative'>
        <img src={Moon} alt="" className='sm:hidden md:hidden absolute left-10 w-40 h-40 animate-mini-bounce'/>
        <img src={Cloud} alt="" className='sm:hidden md:hidden absolute bottom-0 left-20 w-40 h-40 animate-mini-bounce'/>
        <img src={Star} alt="" className='sm:hidden md:hidden absolute right-10 w-40 h-40 animate-mini-bounce'/>
        <img src={Rocket} alt="" className='sm:hidden md:hidden absolute bottom-0 right-20 w-52 h-52 animate-mini-bounce'/>
          <div className='z-50 grid place-items-center'>
            <div className='grid place-items-center mt-5 w-[60%] sm:w-[80%] md:w-[80%]'>
              <span className='text-center font-bobby text-5xl mb-1'
                style={{
                  textShadow: "2px 2px 0 #473664, -2px 2px 0 #473664, 2px -2px 0 #473664, -2px -2px 0 #473664",
                  color: "#F7B9C4"
                }}
              >VISION</span>
              <p className='indent-10 font-quicksand text-xl font-semibold text-justify'>Ang S.A.G.I.P ay naglalayon na maging isang maaasahan at mapagkakatiwalaang mapagkukunan ng kaalaman at suporta para sa mga unang nagbubuntis na ina, na nagbibigay ng napapanahong impormasyon at gabay sa nutrisyon upang matiyak ang malusog at mahusay na pagbubuntis.</p>
            </div>
          </div>
          <div className='z-50 grid place-items-center mb-10'>
            <div className='grid place-items-center mt-5 w-[60%] sm:w-[80%] md:w-[80%]'>
              <span className='text-center font-bobby text-5xl mb-1'
                style={{
                  textShadow: "2px 2px 0 #473664, -2px 2px 0 #473664, 2px -2px 0 #473664, -2px -2px 0 #473664",
                  color: "#F7B9C4"
                }}
              >MISSION</span>
              <p className='indent-10 font-quicksand text-xl font-semibold text-justify'>Ang S.A.G.I.P ay binibigyang kapangyarihan ang mga unang nagbubuntis na ina sa pamamagitan ng makabago at abot-kayang solusyon para sa mas epektibong pag-aaral tungkol sa nutrisyon at pangmatagalang kalusugan sa pagbubuntis. Layunin nitong makapagbigay ng angkop at madaling gamitin na pag-aaral na maaaring isagawa ayon sa sariling bilis, upang matulungan ang mga ina na matutunan ang mahahalagang impormasyon kahit saan at kahit kailan. </p>
            </div>
          </div>
      </div>
    </>
  )
}

export default About