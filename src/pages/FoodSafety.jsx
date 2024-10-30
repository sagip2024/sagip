import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import firebaseApp from '../../firebaseConfig';
import Icon from '../assets/icons/1.png'

function FoodSafety() {
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
                console.log(videoData);
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
          Food Safety
        </span>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 gap-y-5">
          <div className='w-[50%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Nutrisyon: Kumain ng Ligtas, Para sa Malusog na Bukas</p>
            <p className='indent-10 text-justify'>
            Ang ligtas na pagkain para sa mga buntis na ina ay napakahalaga upang maprotektahan ang kanilang kalusugan laban sa mga posibleng panganib mula sa kontaminasyon at hindi wastong nutrisyon.
            </p>
          </div>

        <div className="w-[50%] sm:w-[80%] md:w-[60%] h-72 overflow-hidden rounded-2xl bg-black relative">
            {videos[0] && (
            <div className="w-full h-72 overflow-hidden rounded-2xl bg-black relative">
                <video controls className="w-full h-full" src={videos[0].url}></video>
            </div>
            )}
        </div>

        <div className='w-[50%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>1. Paghuhugas ng kamay at mga lugar</p>
            <ul className='pl-12 list-disc'>
                <li><span className='font-bold'>Hugasan mabuti ang mga kamay</span> gamit ang tubig at sabon sa loob ng 20 segundo bago at pagkatapos humawak ng pagkain, at pagkatapos gumamit ng banyo, magpalit ng diaper, at humawak ng mga alagang hayop.</li>
                <li><span className='font-bold'>Hugasan ang mga cutting board, plato, at kasangkapan</span> gamit ang mainit na tubig na may sabon pagkatapos maghanda ng bawat pagkain.</li>
                <li><span className='font-bold'>Gumamit ng papel na tuwalya</span> para linisin ang mga ibabaw ng kusina. Kung gumagamit ng mga tuwalya ng tela, labhan ang mga ito nang madalas.</li>
                <li><span className='font-bold'>Banlawan ang mga sariwang prutas at gulay</span> gamit ang tubig, kasama na ang mga balat at alisan ng balat na hindi kinakain.</li>
                <li><span className='font-bold'>Linisin ang mga takip ng lata</span> bago buksan.</li>
            </ul>
          </div>

          <div className='w-[50%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>1. Paghihiwalay ng mga pagkain</p>
            <ul className='pl-12 list-disc'>
                <li><span className='font-bold'>Hugasan mabuti ang mga kamay</span> gamit ang tubig at sabon. Ugaliing maghugas ng kamay sa loob ng 20 segundo bago at pagkatapos humawak ng pagkain, at pagkatapos gumamit ng banyo, magpalit ng diaper, at humawak ng mga alagang hayop.</li>
                <li><span className='font-bold'>Hugasan ang mga cutting board, plato, at kasangkapan</span> gamit ang mainit na tubig na may sabon pagkatapos maghanda ng bawat pagkain.</li>
                <li><span className='font-bold'>Gumamit ng papel na tuwalya</span> para linisin ang mga ibabaw ng kusina. Kung gumagamit ng mga tuwalya ng tela, labhan ang mga ito nang madalas.</li>
                <li><span className='font-bold'>Banlawan ang mga sariwang prutas at gulay</span> gamit ang tubig, kasama na ang mga balat at alisan ng balat na hindi kinakain.</li>
                <li><span className='font-bold'>Linisin ang mga takip ng lata</span> bago buksan.</li>
            </ul>
          </div>
          <div className='w-[50%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>3. Pagluluto sa tamang temperatura</p>
            <ul className='pl-12 list-disc'>
                <li><span className='font-bold'>Gamitin ang <i>food thermometer</i></span> upang tiyakin ang kaligtasan ng karne, manok, seafood, at mga produkto ng itlog para sa lahat ng paraan ng pagluluto. Dapat na maluto ang mga pagkain sa tamang minimum na internal na temperatura upang patayin ang mga mapanganib na bakterya tulad ng salmonella. Ito ay isang uri ng bakterya na nagdudulot ng impeksyon sa bituka ng tao, lalo na kapag kumakain ng kontaminadong pagkain.</li>
                <li><span className='font-bold'>Kapag nagluluto sa <i>microwave oven</i>,</span> takpan ang pagkain, ihalo, at i-rotate para sa pantay na pagluluto. Kung walang turntable, i-rotate ang pinggan ng mano-mano isang beses o dalawang beses sa pagluluto.</li>
                <li><span className='font-bold'>Pakuluan ang mga sarsa, sopas, at <i>gravy</i></span> kapag nire-reheat.</li>
            </ul>
          </div>

          <div className='w-[50%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>4. Pagpapalamig ng mga pagkain</p>
            <ul className='pl-12 list-disc'>
                <li><span className='font-bold'>Gumamit ng appliance <i>thermometer</i></span> upang tiyakin na ang temperatura ay laging 40°F o mas mababa at ang freezer ay 0°F o mas mababa.</li>
                <li><span className='font-bold'>Ilagay agad ang karne, manok, itlog, seafood, at iba pang <i>perishable</i> na pagkain sa refrigerator o freezer</span>  sa loob ng 2 oras mula sa pagluluto o pagbili. I-refrigerate sa loob ng 1 oras kung ang temperatura sa labas ay higit sa 90°F.</li>
                <li><span className='font-bold'>Huwag i-defrost ang pagkain sa <i>room temperature.</i></span> May tatlong ligtas na paraan upang i-defrost ang pagkain: sa <i>refrigerator</i>, sa malamig na tubig, at sa microwave. Ang pagkain na dinifrost sa malamig na tubig o sa <i>microwave</i> ay dapat lutuin agad.</li>
                <li><span className='font-bold'>Marinate ang pagkain sa <i>refrigerator.</i></span></li>
                <li><span className='font-bold'>Kung may maraming tirang pagkain hatiin ito</span> at ilagay ito sa isang container para mas mabilis lumamig sa loob ng <i>refrigerator.</i></li>
            </ul>
            <p className='font-bold'>Maaring i-download ang impormasyon tungkol sa food safety dito:</p>
          </div>

          <div className="w-full mt-5">
            <div 
              onClick={toggleHandler}
              className="relative gap-10 mt-5 bg-[#FFF1B4] w-[50%] sm:w-full mx-auto rounded-full py-2 cursor-pointer"
              style={{ margin: '0 auto' }}
            >
              <img src={Icon} alt="PDF Icon" className='absolute w-24 left-5 top-1/2 transform -translate-y-1/2 sm:hidden' />
              <span className="font-bold font-bobby text-[#473664] block text-center">PDF VIEW/DOWNLOAD OF FOOD SAFETY HERE</span>
            </div>

            {toggle && (
              <div className="dropdown-content bg-white shadow-md rounded mt-2 w-[50%] mx-auto relative z-10" style={{ margin: '0 auto' }}>
                <ul className="divide-y mt-2">
                  <li 
                    className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer"
                    onClick={() => handleDownload("/files/pdf/Kabanata_5_Food_Safety.pdf", "FOOD_SAFETY")} 
                  >
                    Download PDF
                  </li>
                  <li 
                    className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer" 
                    onClick={() => handleView("/files/files/pdf/Kabanata_5_Food_Safety.pdf")}
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

export default FoodSafety