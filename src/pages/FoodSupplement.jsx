import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import firebaseApp from '../../firebaseConfig';
import Icon from '../assets/icons/1.png'

function FoodSupplement() {
    const [toggle, setToggle] = useState(false);
    const [videos, setVideos] = useState([]);
  
    const storage = getStorage(firebaseApp);
  
    const toggleHandler = () => {
      setToggle(!toggle);
    };
  
    const handleDownload = (filePath, fileName) => {
      const link = document.createElement('a');
      link.href = filePath; 
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log(`Download initiated for PDF: ${fileName}`);
    };
    const handleView = (link) => {
        window.open(link, '_blank');
        };
        useEffect(() => {
            const fetchVideos = async () => {
            try {
                const videosRef = ref(storage, 'videos');
                const videoList = await listAll(videosRef);
                const videoData = await Promise.all(
                videoList.items.map(async (itemRef) => {
                    const url = await getDownloadURL(itemRef);
                    const name = itemRef.name;
                    return { url, name };
                })
                );
                setVideos(videoData);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
            };
        
        fetchVideos();
        }, [storage]);
  return (
    <div id="foodsupplement" className="mt-10 py-10">
      <div className="border-2 border-[#473664] w-[50%] sm:w-[90%] rounded-e-3xl bg-pink-300 flex justify-center py-1">
        <span
          className="font-bobby text-[3rem] sm:text-4xl font-bold text-[#DE638A] tracking-wide"
          style={{
            textShadow: "2px 2px 0 #473664, -2px 2px 0 #473664, 2px -2px 0 #473664, -2px -2px 0 #473664",
            color: "#DE638A"
          }}
        >
          Food Supplement
        </span>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 gap-y-5">
          <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Nutrisyon: Mga Pandagdag na Pagkain, sa Buntis ay Ihain</p>
            <p className='indent-10 text-justify'>
            Ang <i>food supplements</i> o mga pandagdag na pagkain ay mga karagdagang bitamina at mineral na iniinom upang masiguro na may sapat na nutrisyon ang isang tao. Para sa mga buntis, mahalaga ang mga ito upang mapanatiling malusog ang ina at sanggol. Madalas itong nasa anyo ng tabletas, kapsula, o likido. 
            </p>
          </div>

        <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Mga Pagkain na Mayaman sa Iron at Folic Acid</p>
            <p className='indent-10 text-justify'>
                Ang <i>micronutrients</i> ay madalas na makukuha sa mga gulay, prutas, at mga parte ng karne at manok. Makikita sa talahanayan sa ibaba ang ilang halimbawa ng mga pagkain na mayaman sa <i>iron</i> at <i>folate</i>.
            </p>
            <p><i>Mga pagkain na mayaman sa Iron:</i></p>
            <ol className='pl-5 list-decimal grid gap-y-4'>
                <li><span className='font-bold'>Ferrous Sulfate at Folic Acid</span> ay mga pangunahing bahagi ng mga prenatal vitamins upang maiwasan ang anemia at neural tube defects sa mga sanggol.</li>
                <li><span className='font-bold'>Calcium Carbonate + Vitamin D3</span> para sa kalusugan ng buto at ngipin ng sanggol at ng ina.</li>
                <li><span className='font-bold'>Multivitamins with Iron</span> ay essential medicine dahil nagbibigay ito ng kumpletong nutrisyon at maiwasan ang komplikasyon. </li>
                <li><span className='font-bold'>Vitamin A</span> para sa <i>immune function</i> at mata ng sanggol. </li>
                <li><span className='font-bold'>Omega-3 DHA</span> para sa pag-unlad ng utak at paningin ng sanggol lalo sa huling trimester. </li>
            </ol>
        </div>

        <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
          <p className='font-bold'>Dapat gumamit ng supplements sa mga sumusunod na pagkakataon:</p>
          <ul className='list-disc pl-5 text-justify grid gap-y-4'>
            <li><span className='font-bold'>Ferrous Sulfate at Folic Acid</span> ay mga pangunahing bahagi ng mga prenatal vitamins upang maiwasan ang anemia at neural tube defects sa mga sanggol.</li>
            <li><span className='font-bold'>Calcium Carbonate + Vitamin D3</span> para sa kalusugan ng buto at ngipin ng sanggol at ng ina.</li>
            <li><span className='font-bold'>Multivitamins with Iron</span> ay essential medicine dahil nagbibigay ito ng kumpletong nutrisyon at maiwasan ang komplikasyon.</li>
            <li><span className='font-bold'>Vitamin A</span> para sa <i>immune function</i> at mata ng sanggol.</li>
            <li><span className='font-bold'>Omega-3 DHA</span> para sa pag-unlad ng utak at paningin ng sanggol lalo sa huling trimester.</li>
          </ul>
        </div>

        <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
          <p className='font-bold'>Mga Paalala sa Posibleng Panganib at Tamang Paggamit ng Supplements</p>
          <ul className='list-disc pl-5 text-justify grid gap-y-4'>
            <li>Sundin ang reseta ng doktor</li>
            <li>Iwasan ang labis na pagkonsumo</li>
            <li>Mag-ingat sa mga over-the-counter (OTC) products</li>
            <li>Huwag gamitin bilang kapalit ng masustansyang pagkain</li>
          </ul>
          <p className='font-bold'>Maaring i-download ang impormasyon tungkol sa food supplements dito:</p>
        </div>

          <div className="w-full mt-5">
            <div 
              onClick={toggleHandler}
              className="relative gap-10 mt-5 bg-[#FFF1B4] w-[60%] sm:w-[80%] mx-auto rounded-full py-2 cursor-pointer"
              style={{ margin: '0 auto' }}
            >
              <img src={Icon} alt="PDF Icon" className='absolute w-24 left-5 top-1/2 transform -translate-y-1/2 sm:hidden' />
              <span className="font-bold font-bobby text-[#473664] block text-center">PDF VIEW/DOWNLOAD OF FOOD SUPPLEMENT HERE</span>
            </div>

            {toggle && (
              <div className="dropdown-content bg-white shadow-md rounded mt-2 w-[60%] mx-auto relative z-10" style={{ margin: '0 auto' }}>
                <ul className="divide-y mt-2">
                  <li 
                    className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer"
                    onClick={() => handleDownload("/files/pdf/Kabanata_4_Food_Supplements.pdf", "FOOD_SUPPLEMENTS")} 
                  >
                    Download PDF
                  </li>
                  <li 
                    className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer" 
                    onClick={() => handleView("/files/pdf/Kabanata_4_Food_Supplements.pdf")}
                  >
                    View PDF
                  </li>
                </ul>
              </div>
            )}
          </div>
      </div>
    </div>
  )
}

export default FoodSupplement