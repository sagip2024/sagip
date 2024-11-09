import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import firebaseApp from '../../firebaseConfig';
import Icon from '../assets/icons/1.png'
function Micronutrients() {
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
    <div id="micro" className="mt-10 py-10">
      <div className="border-2 border-[#473664] w-[50%] sm:w-[90%] rounded-e-3xl bg-pink-300 flex justify-center py-1">
        <span
          className="font-bobby text-[3rem] sm:text-4xl font-bold text-[#DE638A] tracking-wide"
          style={{
            textShadow: "2px 2px 0 #473664, -2px 2px 0 #473664, 2px -2px 0 #473664, -2px -2px 0 #473664",
            color: "#DE638A"
          }}
        >
          Micronutrients
        </span>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 gap-y-5">
          <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Micronutrients: Nutrisyon para sa Pag-asenso ng Iba’t ibang Proseso</p>
            <p className='indent-10 text-justify'>
            Ang <i>micronutrients</i> ay isa pang grupo ng mga sustansya na kinakailangan ng mga nagbubuntis upang makamit ang pagunlad ng kalusugan ng ina at nang kanyang sanggol. Ang grupong ito ay binubuo ng iba’t ibang bitamina at mineral kung saan nakakatulong ang mga ito sa pang-araw-araw na proseso na nagaganap sa katawan. Bagamat ang <i>macronutrients</i> ay kinakailangan ng malaking bilang ng pagkonsumo, ang <i>micronutrients</i> naman ay para sa kaunting bilang lamang. Dagdag pa dito, malaki ang tungkulin ng <i>micronutrients</i> bagkus inihahanda ng mga ito ang katawan ng isang ina sa pagbubuntis pati narin sa pangangana  atma siguradong  malusog ang sanggol sa sinapupunan. 
            </p>
          </div>

          <div className="w-[60%] sm:w-[80%] md:w-[60%] h-72 overflow-hidden rounded-2xl bg-black relative">
            {videos[2] && (
            <div className="w-full h-72 overflow-hidden rounded-2xl bg-black relative">
                <video controls className="w-full h-full" src={videos[2].url}></video>
            </div>
            )}
        </div>

        <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Importansya ng Iron-Folic Acid - IFA</p>
            <span className='text-justify'>
            <p className='indent-10'>Ang <i>iron</i> at <i>folic acid</i> ang dalawang primaryang bitamina na inrerekomenda ng mga eksperto na inumin ng mga ina sa pang araw-araw habang sila ay nagbubuntis. Dagdapa dito ay kabilang sila sa mga supplementasyon na maaaring mabili sa mga botika, kadalasan ang sa kanila ay <i>iron-folic acid supplements</i> o IFAs.</p>
            </span>
            <span className='text-justify'>
            <i>Ano nga ba ang Iron?</i>
            <p className='indent-10'>Ang <i>iron</i> ay isang mineral kung saan ito ay tumutulong sa paggawa ng <i>hemoglobin</i>. Ang hemoglobin ay isang uri ng protina na matatagpuan sa ating dugo kung saan ang layunin nito ay ikalat ang iba’t ibang sustansya at <i>oxygen</i> sa iba’t ibang parte ng katawan. Isa pa dito, kinakailangan din ang <i>iron</i> upang maiwasan ang komplikasyon tulad ng anemia.</p>
            </span>
            <span className='text-justify'>
            <i>Ano naman ang Anemia?</i>
            <p className='indent-10'>Ang <i>anemia</i> ay isang sakit kung saan mayroong kakulangan ng dugo ang isang tao. Maaaring ang isang ina na nagbubuntis ay magkaroon ng <i>anemia</i> dahil tumataas ang kinakailangan na dugo upang mabigyang sustansiya ang mga sanggol.</p>
            </span>
            <span className='text-justify'>
            <i>Ano naman ang Folic  acid?</i>
            <p className='indent-10'>Ang <i>folic acid</i> naman ay isang bitmena kung saan ay nakatutulong sa isang ina sa pamamagitan ng paggawa ng ng bagong dugo. Isa pa dito, tumutulong din ito sa pagbuo at <i>develop</i> ng <i>nervous system</i> ng sanggol</p>
            </span>
          </div>

          <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Inirerekomendang Dami ng Iron at Folic-Acid</p>
            <p className='indent-10 text-justify'>
            Ang isang ina na nagbubuntis ay nangangailangan kumonsumo ng <i>iron</i> 31.7mg habang ang <i>folate (folic acid)</i> namin ay 530mcg. Bukod sa <i>supplements</i>, maaaring matagpuan ang dalawang <i>micronutrients</i> na ito sa mga pang-araw-araw na pagkain. 
            </p>
          </div>

          <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Iron-Folic Acid: Rekomendasyon Pagkain kada Trimester</p>
            <p className='indent-10 text-justify'>
            Mga buntis sa unang trimester - 20 mg kada araw
            Mga buntis sa ikalawang trimester - 24 mg kada araw
            Mga buntis sa ikatlong trimester - 29 mg kada araw
            </p>
          </div>

        <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Mga Pagkain na Mayaman sa Iron at Folic Acid</p>
            <p className='indent-10 text-justify'>
                Ang <i>micronutrients</i> ay madalas na makukuha sa mga gulay, prutas, at mga parte ng karne at manok. Makikita sa talahanayan sa ibaba ang ilang halimbawa ng mga pagkain na mayaman sa <i>iron</i> at <i>folate</i>.
            </p>
            <p><i>Mga pagkain na mayaman sa Iron:</i></p>
            <ol className='indent-10'>
                <li>1. Laman ng karne (baboy at baka)</li>
                <li>2. Laman ng manok</li>
                <li>3. Atay ng baboy</li>
                <li>4. Itlog</li>
                <li>5. Okra</li>
                <li>6. Kangkong</li>
                <li>7. Mustasa</li>
                <li>8. Malunggay</li>
            </ol>
            <p><i>Mga pagkain na mayaman sa Folate (Folic Acid)</i></p>
            <ol className='indent-10'>
                <li>1. Mga butong gulay (Monggo, linga, patani)</li>
                <li>2. Prutas na maasim (orange, lemon, kyat-kyat)</li>
            </ol>
        </div>

        <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Iba’t ibang Bitamina at Minerals na Inirerekomenda sa mga Buntis</p>
            <h1 className='font-bold'>Calcium</h1>
            <p className='indent-10 text-justify'>
                Ang <i>calcium</i> ay isang mineral kung saan ang layunin nito ay patibayin at palakasin ang buto ng isang tao. Ang tungkulin naman ng <i>calcium</i> sa pagbubuntis ay ang pagbuo ng ngipin at buto ng isang sanggol habang ito ay nasa sinapupunan. Dagdag pa dito nakakatulong din ito upang maiwasan ang pagkakaroon ng <i>preeclampsia</i> at <i>preterm birth</i> sa mga nagbubuntis. Matatagpuan ang <i>calcium</i> sa mga pagkain tulad ng gatas, yogurt, keso at tokwa. Ang inirerekomenda ng dami ng pagkonsumo ng isang ina na nagbubuntis ay 800mcg para sa una at ikalawang trimester habang 850mcg naman sa ikatlo. 
            </p>
            <h1 className='font-bold'>Bitaminang D</h1>
            <p className='indent-10 text-justify'>
                Ang bitamina D naman ay isang bitamina kung saan ang layunin nito ay tulungan ang katawan na gamitin ang <i>calcium</i>. Tulad ng nabanggit na mineral, pinapatibay din nito ang buto at ngipin ng isang sanggol at nakakatulong din ito na panatilihing ligtas ang sanggol sa pagkakaroon ng <i>brittle bone disease</i>. Ang inirerekomenda na dami ng pagkonsumo ng bitaminang ito ay 15mcg araw-araw.  
            </p>
            <h1 className='font-bold'>Iodine</h1>
            <p className='indent-10 text-justify'>
                Ang <i>iodine</i> naman ay isang mineral kung saan nakakatulong ito upang paunlarin ang paunlarin ang utak at <i>nervous system</i> ng isang sanggol. Tungkulin din ng <i>iodine</i> ay payabungin ang kalusugan ng isang sanggol upang maiwasan ang pagkakaroon ng <i>fetal hypethyroidism</i>. Ayon sa mga eksperto, ang inirerekomenda na daming ng pagkonsumo ng <i>iodine</i> ay 250mcg araw-araw.  
            </p>
            <h1 className='font-bold'>Bitamina A</h1>
            <p className='indent-10 text-justify'>
                Ang bitaminang A ay isang bitamina kung saan ang tungkulin nito ay makatulong sa pagbuo ng bawat <i>organ</i> ng sanggol at pati narin palakasin ang <i>immune system</i> nito. Nakatutulong din ang bitamina A na panatilihing maayos ang paningin ng ina at ng kanyang sanggol. Ngunit, kailangan lamang ng isang inang nagbubuntis na kumonsumo ng sapat na dami ng bitaminang ito dahil maaaring magdulot ito ng mga hindi-kaaya-ayang komplikasyon sa sanggol. Ang inirerekomendang dami ng pagkain ng bitaminang A ay 300mcg habang ipinagbabawal sa mga inang nagbubuntis na lumapagpas 3,000mcg dahil sa mga negatibong epekto nito.  
            </p>
            <p className='font-bold'>Maaring matagpuan ang mga table kung saan makikita ang mga pagkain na mayaman sa mga nabanggit na micronutrients at ang inirerekomendang dami ng pagkonsumo ng mga ito dito:</p>
        </div>
          <div className="w-full mt-5">
            <div 
              onClick={toggleHandler}
              className="relative gap-10 mt-5 bg-[#FFF1B4] w-[60%] sm:w-[80%] mx-auto rounded-full py-2 cursor-pointer"
              style={{ margin: '0 auto' }}
            >
              <img src={Icon} alt="PDF Icon" className='absolute w-24 left-5 top-1/2 transform -translate-y-1/2 sm:hidden' />
              <span className="font-bold font-bobby text-[#473664] block text-center">PDF VIEW/DOWNLOAD OF MICRONUTRIENTS HERE</span>
            </div>

            {toggle && (
              <div className="dropdown-content bg-white shadow-md rounded mt-2 w-[60%] mx-auto relative z-10" style={{ margin: '0 auto' }}>
                <ul className="divide-y mt-2 grid gap-y-4">
                  <li 
                    className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer"
                    onClick={() => handleDownload("/files/pdf/Kabanata_2_Micronutrients.pdf", "MICRONUTRIENTS")} 
                  >
                    Download PDF
                  </li>
                  <li 
                    className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer" 
                    onClick={() => handleView("/files/pdf/Kabanata_2_Micronutrients.pdf")}
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

export default Micronutrients