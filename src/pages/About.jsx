import React, { useEffect, useState } from 'react';
import { useFirebaseStorage } from '../context/firebaseStorage';

function About() {
  const [about, setabouts] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state
  const { listFilesInFolder } = useFirebaseStorage();

  useEffect(() => {
    const fetchIcons = async () => {
      setLoading(true);  // Set loading to true when fetching data
      try {
        const paths = await listFilesInFolder('images/about');
        const fullPaths = paths.map(
          path => `https://firebasestorage.googleapis.com/v0/b/sagip-a7258.appspot.com/o/${encodeURIComponent(path)}?alt=media`
        );
        setabouts(fullPaths);
      } catch (error) {
        console.error("Error fetching icons:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchIcons();
  }, [listFilesInFolder]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-3xl font-bold text-[#DE638A]">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="width-full py-3 grid place-items-center">
        <div className="bg-[#F7B9C4] my-2 grid place-items-center rounded-full w-64 h-9 border-[#473664] border-2">
          <span
            className="font-bobby text-3xl text-[#DE638A] tracking-widest"
            style={{
              textShadow: "1px 1px 0 #473664, -2px 2px 0 #473664, 2px -2px 0 #473664, -2px -2px 0 #473664",
              color: "#DE638A",
            }}
          >
            About Us
          </span>
        </div>
      </div>
      <div className="w-full flex bg-[#efb9c6] py-6 px-10 sm:grid sm:gap-y-10">
        <div className="w-[60%] grid sm:w-full">
          <span className="font-quicksand text-xl sm:text-center">
            Mabuhay! Pagbati sa inyo sa Katatagan, Kahusayan at Katapan!
          </span>
          <br />
          <div className="text-justify font-quicksand">
            <p className="indent-10">
              Kami ay grupo ng mga mananaliksik at estudyante na nagmula sa kursong narsing ng Far Eastern University –
              Manila (FEU). Nais naming pasalamatan kayo sa pagtangkilik at pag-gamit ng website na ito upang paunlarin ang
              inyong kalusagan at kaalaman ukol sa maternal na nutrisyon. Wari’y itong website na ito ay produkto lamang ng
              isang proyekto at pananaliksik na nagngangalang, <b><i>“Development and evaluation of Support and Guidance: an Innovative tool for Primimother’s Nutrition (S.A.G.I.P) webpage for maternal nutritional knowledge of primigravida mothers.”</i></b>
              na aming isinasagawa para sa aming pananaliksik sa kurso, isa rin sa aming mga layunin bilang mga susunod na nars
              ng ating bansa, ay makatulong at makapagbigay ng mahahalagang impormasyon para sa ikauunlad ng kalusugan ng mga
              nanay. Ang pagbubuntis at ang konsepsiyon ng isang sanggol ay ilan lamang sa mga mirakulo na pinaubaya ng mundong
              ito. Kung kaya’t nangangailangan ng masinsinang pangangalaga at gabay ang ibinibigay sa mga nanay upang sila ay
              mapanatiling malusog, gayundin sa kanilang mga sanggol. Muli nais naming magbigay ng pasasalamat sa inyo!
            </p>
            <br />
            <p>Kung mayroon kayong katanungan, maaari niyo kaming kontakin sa mga sumusunod na plataporma;</p>
            <div className="grid">
              <span className="indent-100">- Gmail: sagipwebpage2024@gmail.com</span>
              <span className="indent-10 sm:indent-5">- Contact Number: 09561289513</span>
            </div>
          </div>
        </div>
        <div className="w-[40%] flex justify-center items-center sm:w-full">
          <img src={about[0]} alt="" className="w-96 h-96 ml-10 sm:ml-0" />
        </div>
      </div>
      <div className="w-full h-[80%] lg:grid xl:grid mt-1 relative">
        <img src={about[3]} alt="" className="sm:hidden md:hidden absolute left-10 w-40 h-40 animate-mini-bounce" />
        <img src={about[2]} alt="" className="sm:hidden md:hidden absolute bottom-0 left-20 w-40 h-40 animate-mini-bounce" />
        <img src={about[5]} alt="" className="sm:hidden md:hidden absolute right-10 w-40 h-40 animate-mini-bounce" />
        <img src={about[4]} alt="" className="sm:hidden md:hidden absolute bottom-0 right-20 w-52 h-52 animate-mini-bounce" />
        <div className="grid place-items-center sm:mt-10 md:mt-10">
          <div className="grid place-items-center mt-5 w-[60%] sm:w-[80%] md:w-[80%]">
            <span
              className="text-center font-bobby text-5xl mb-1"
              style={{
                textShadow: "2px 2px 0 #473664, -2px 2px 0 #473664, 2px -2px 0 #473664, -2px -2px 0 #473664",
                color: "#F7B9C4",
              }}
            >
              VISION
            </span>
            <p className="indent-10 font-quicksand text-xl font-semibold text-justify">
              Ang S.A.G.I.P ay naglalayon na maging isang maaasahan at mapagkakatiwalaang mapagkukunan ng kaalaman at suporta
              para sa mga unang nagbubuntis na ina, na nagbibigay ng napapanahong impormasyon at gabay sa nutrisyon upang
              matiyak ang malusog at mahusay na pagbubuntis.
            </p>
          </div>
        </div>
        <div className="grid place-items-center mb-10 sm:mt-10 md:mt-10">
          <div className="grid place-items-center mt-5 w-[60%] sm:w-[80%] md:w-[80%]">
            <span
              className="text-center font-bobby text-5xl mb-1"
              style={{
                textShadow: "2px 2px 0 #473664, -2px 2px 0 #473664, 2px -2px 0 #473664, -2px -2px 0 #473664",
                color: "#F7B9C4",
              }}
            >
              MISSION
            </span>
            <p className="indent-10 font-quicksand text-xl font-semibold text-justify sm:mb-10">
              Ang S.A.G.I.P ay binibigyang kapangyarihan ang mga unang nagbubuntis na ina sa pamamagitan ng makabago at abot-kayang
              solusyon para sa mas epektibong pag-aaral tungkol sa nutrisyon at pangmatagalang kalusugan sa pagbubuntis. Layunin
              nitong makapagbigay ng angkop at madaling gamitin na pag-aaral na maaaring isagawa ayon sa sariling bilis, upang
              matulungan ang mga ina na matutunan ang mahahalagang impormasyon kahit saan at kahit kailan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

