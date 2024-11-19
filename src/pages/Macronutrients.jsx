import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import firebaseApp from '../../firebaseConfig';
import Icon from '../assets/icons/1.png'
function Macronutrients() {
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
    <div id="macro" className="py-10">
      <div className="border-2 border-[#473664] w-[50%] sm:w-[90%] rounded-e-3xl bg-pink-300 flex justify-center py-1">
        <span
          className="font-bobby text-[3rem] sm:text-4xl font-bold text-[#DE638A] tracking-wide"
          style={{
            textShadow: "2px 2px 0 #473664, -2px 2px 0 #473664, 2px -2px 0 #473664, -2px -2px 0 #473664",
            color: "#DE638A"
          }}
        >
          Macronutrients
        </span>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 gap-y-5">
          <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Macronutrients: Mga Sustanya para sa Ligtas na Pagbubuntis!</p>
            <p className='indent-10 text-justify'>
            Sapat na sustansya at nutrisyon ay isa sa mga pinakamahalagang pangangailangan ng isang ina na nagdadalang tao ng kanyang ina. Sa pamamagitan ng pagkonsumo ng sapat na dami ng sustansya, naiiwasan ang pagkakaroon ng komplikasyon habang nagbubuntis. Ang <i>macronutrients</i> ay iilan lamang sa mga pagkain na nagtataglay ng sustansya na kinakailangan ng isang ina. Ang macronutrients ay binubuo ng <i>glucose, protein, fatty acid</i> at <i>iron</i>. Makukuha ang mga nasabing sustansya sa iba’t ibang pagkain, kung saan rinerekomenda na makamit ang tamang dami ng bawat sustanya upang mapanatiling malusog ang kalusugan ng isang ina at ng sanggol. Kung kaya’t mayroon tayong mga <i>doktor</i>, nars, at <i>nutritionists</i> upang magbigay ng gabay sa mga nagbubuntis.
            </p>
          </div>

          <div className="w-[60%] sm:w-[80%] md:w-[60%] h-72 overflow-hidden rounded-2xl bg-black relative">
            {videos[1] && (
            <div className="w-full h-72 overflow-hidden rounded-2xl bg-black relative">
                <video controls className="w-full h-full" src={videos[1].url}></video>
            </div>
            )}
        </div>

        <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Macronutrients: Glukosa para sa Katawang Masigla</p>
            <p className='indent-10 text-justify'>
            Kinakailangan ng isang nagbubuntis ang sapat na enerhiya at pangangatawan upang mapanatiling maayos ang kalusugan ng nagbubuntis at ng kanyang sanggol. Dahil ang isang nagbubuntis na ina ay kumokunsumo ng maraming enerhiya sa pagbibigay ng sustansya sa kanyang sanggol.
            </p>
            <p className='indent-10 text-justify'>
            Ang isang ina na nagdadalang-tao ay nangangailangan na kumain ng karagdagang kaloriya sa kanyang pangkaraniwang diyeta upang ihanda ang kanyang katawan sa pagbubuntis habang siya ay nasa unang trimester. Pagsapit naman ng ikalawang trimester, ang isang ina ay nangangailangan ng 340 na kaloriya kada araw. Pagtungtong naman niya sa ikatlong trimester, kinakailangan niya ng 450 na kaloriya kada araw upang masiguro ang maayos na paglaki ng sanggol at mapanatili ang enerhiya ng ina.
            </p>
            <p className='indent-10 text-justify'>
            Ang pagkonsumo ng <i>glucose</i> ay kinakailangan na nasa tamang dami lamang upang hindi tumaas ang <i>blood sugar level</i> dahil maari itong magresulta sa <i>gestational diabetes</i> kapag ang pagkonsumo nito ay labis sa akmang dami na inirerekomenda ng mga eksperto. Ang <i>gestational diabetes</i> ay isang sakit na mararanasan lamang ng mga ina habang sila ay nagbubuntis kung saan maari itong magdulot ng abnormal ng sanggol na maaring mauwi sa pagkakaroon ng komplikasyon. Ang mga nagbubuntis na mayroong <i>gestational diabetes</i> ay nireresetahan ng gamot na may <i>insulin</i> upang mapababa ang <i>blood sugar levels</i> ng ina. Isa pa sa mga paraan upang maiwasan ang pagkakaroon ng <i>gestational diabetes</i> at <i>pre-term birth</i> ay ang pagkonsumo ng <i>fiber</i>. Ito rin ay kabilang sa <i>macronutrients</i> at matatagpuan sa mga gulay.
            </p>
          </div>

          <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Macronutrients: Matibay na Kalusugan at Katawan? Protina ang Iyong Kaibigan</p>
            <p className='indent-10 text-justify'>
            Ang protina naman ay isang uri ng sustansya kung saan tinutulungan nito ang isang nagbubuntis na ina sa pamamagitan ng pagdevelop ng iba’t ibang parte ng katawan ng sanggol at ina, dagdag pa dito ay nagdudulot din ito ng pag-unlad ng mga selula ng sanggol. Makukuha ang protina sa mga pagkain tulad ng baka, karne, manok at iba pa. Sa bawat trimester ng pagbubuntis, tumataas ng 10-20 gramo ng protina ang kailangang makonsumo upang mapanati ang kalidad ng katawan. Dagdag pa rito ay ang dami ng pagkonsumo ng protina ay binabase sa edad at bigat ng isang ina. Maaring umabot ito ng 71-100 gramo ng protina kada araw upang tuluyang mapanatili ang maayos na pagbubuntis at kalusugan ng sanggol.
            </p>
          </div>

          <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Macronutrients: Fats at Fatty Acid para sa Dagdag Enerhiya at Bitamina</p>
            <p className='indent-10 text-justify'>
            Ang <i>fats</i> ay nabibilang sa grupo ng macronutrients kung saan ito ay nagbibigay ng maraming enerhiya sa isang nagbubuntis upang mapanatili ang maayos na pag-unlad ng <i>fetus</i>. Dagdag pa dito ay nakatutulong din ito sa pagtanggap ng iba’t ibang bitamina tulad ng bitamina A, D, E, at K. Ang <i>fatty acids</i> naman ay pinapanatili ang balance ng <i>prostaglandin</i> sa katawan. Pinapababa din nito ang panganib ng <i>preterm birth</i> at ibang komplikasyon habang nagbubuntis. Ang <i>Omega 3 fatty acid</i> ay pinapaunlad ang mga mata, utak, katawan ng sanggol at kalusugan ng ina.
            </p>
          </div>

          <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Macronutrients: Iwas Anemia? Iron ang Hinahanap mong Sustansya</p>
            <p className='indent-10 text-justify'>
            Maraming dugo ang kinakailangan ng isang nagbubuntis na ina upang mapanatili ang kanyang lakas at sapat na sustansya ng sanggol. Kinakailangan din ang sapat na <i>iron</i> upang patuloy na makagawa ng <i>hemoglobin</i> na natatagpuan sa <i>red blood cells</i>. Ang inererekomendang dami ng <i>iron</i> ay 31.7 mg kung saan kapag nakamit ng isang ina ang akmang dami ay maaring maiwasan ang <i>anemia</i> (kakulangan sa dugo). Pinapanatili rin nito ang integridad ng <i>placenta</i> pati na rin ang iba’t ibang pangangailangan ng sanggol. 
            </p>
            <p className='indent-10 text-justify font-bold'>
            Maaring matagpuan ang mga table kung saan makikita ang mga pagkain na mayaman sa mga nabanggit na macronutrients at ang inirerekomendang dami ng pagkonsumo ng mga ito dito: 
            </p>
          </div>

          <div className="w-full mt-5">
            <div 
              onClick={toggleHandler}
              className="relative gap-10 mt-5 bg-[#FFF1B4] w-[60%] sm:w-[80%] mx-auto rounded-full py-2 cursor-pointer"
              style={{ margin: '0 auto' }}
            >
              <img src={Icon} alt="PDF Icon" className='absolute w-24 left-5 top-1/2 transform -translate-y-1/2 sm:hidden' />
              <span className="font-bold font-bobby text-[#473664] block text-center">PDF VIEW/DOWNLOAD OF MACRONUTRIENTS HERE</span>
            </div>

            {toggle && (
              <div className="dropdown-content bg-white shadow-md rounded mt-2 w-[60%] mx-auto relative z-10" style={{ margin: '0 auto' }}>
                <ul className="divide-y mt-2 grid gap-y-4">
                  <li 
                    className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer"
                    onClick={() => handleDownload("/files/pdf/Kabanata_1_Macronutrients.pdf", "MACRONUTRIENTS")} 
                  >
                    Download PDF
                  </li>
                  <li 
                    className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer" 
                    onClick={() => handleView("/files/pdf/Kabanata_1_Macronutrients.pdf")}
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

export default Macronutrients