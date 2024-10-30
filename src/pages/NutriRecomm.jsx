import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import firebaseApp from '../../firebaseConfig';
import Icon from '../assets/icons/1.png'
import GGG from '../assets/table1.jpg'
function NutriRecomm() {
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
    <div id="macro" className="mt-10 py-10">
      <div className="border-2 border-[#473664] w-[50%] sm:w-[90%] rounded-e-3xl bg-pink-300 flex justify-center py-1">
        <span
          className="font-bobby text-[3rem] sm:text-4xl sm:text-center md:text-center font-bold text-[#DE638A] tracking-wide"
          style={{
            textShadow: "2px 2px 0 #473664, -2px 2px 0 #473664, 2px -2px 0 #473664, -2px -2px 0 #473664",
            color: "#DE638A"
          }}
        >
          Nutritional Recommendation
        </span>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 gap-y-5">
          <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Nutrisyon: Mga Tamang Praktis Para sa Pagbubuntis</p>
            <p className='indent-10 text-justify'>
            Ang tamang nutrisyon partikular sa mga nagbubuntis ay napakahalaga sapagkat makatutulong ito sa pagpapanatili ng kalusugan ng ina at ng sanggol.
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
            <p>Nakalapat ang mga sumusunod na pangunahing gabay sa wastong nutrisyon:</p>
            <ul className='pl-5 list-decimal grid gap-y-4'>
                <li>
                    <span className='font-bold'>Magkaroon ng balanseng diyeta</span> sa pamamagitan ng tatlong beses sa isang araw, kasama ang isa o dalawang masustansyang meryenda. Kumain ng masustansyang pagkain mula sa bawat food group tulad ng prutas, gulay, whole grains, protina, at mga produktong dairy. Kumain ng prutas na may dalawang servings, at gulay na may tatlong servings.
                    <div className='pl-10 mt-2'>
                        <p>Mga Halimbawa:</p>
                        <p>Prutas - oranges, saging, mangga, mansanas, at berries</p>
                        <p>Gulay - broccoli, kamote, kangkong, at okra</p>
                        <p>Whole grains - brown rice, tinapay, beans, at cereal</p>
                        <p>Protina - lean meat, manok, itlog, at isda</p>
                        <p>Dairy foods - gatas at yogurt</p>
                    </div>
                </li>
                <li><span className='font-bold'>Uminom ng prenatal na bitamina at mineral na suplemento</span> tulad ng folic acid, iron, calcium, vitamin D.</li>
                <li><span className='font-bold'>Sapat na pag-inom ng tubig:</span> 8 hanggang 12 baso ng tubig bawat araw.</li>
                <li><span className='font-bold'>Iwasan ang pag inom ng inuming may alak</span> dahil nakakasama ito para sa sanggol.</li>
                <li><span className='font-bold'>Regular na ehersisyo:</span> Mahalaga para sa mga buntis na makapag-ehersisyo ng 30 minuto bawat araw.</li>
                <li><span className='font-bold'>Bawasan ang pagkonsumo ng matatamis at maaalat</span> na pagkain. Limitahan sa dalawang kutsara ng asukal upang hindi magkaroon ng <i>gestational diabetes</i>, at isang kutsarita ng asin upang maiwasan ang <i>high blood pressure</i>.</li>
            </ul>
          </div>

          <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Dami ng Nutrisyon Para sa Iba’t Ibang Yugto ng Pagbubuntis</p>
            <p className='indent-10 text-justify'>
            Bawat yugto ng pagbubuntis ay may inirerekomendang nutrisyon upang mapanatiling malusog ang isang nagbubuntis. Para sa ikalawa at ikatlong trimester ng pagbubuntis, kinakailangang madagdagan ng 300 kaloriya. Importante na tandaan na ang kaloriya ay naka depende sa timbang ng isang tao, kaya hindi natin masasabi ang eksaktong kaloriya na kailangan ng isang nagbubuntis sa bawat trimester.
            </p>
            <p className='font-bold mt-5'>Kahalagahan ng Sapat na Pag-inom ng Tubig</p>
            <ul className='list-decimal pl-10'>
                <li>Upang makagawa ng mas maraming dugo</li>
                <li>Upang mas matatag at maunlad ang sirkulasyon ng dugo ng sanggol</li>
                <li>Upang mabuo ang amniotic fluid na nakapalibot sa sanggol</li>
            </ul>
          </div>

          <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold'>Pinggang Pinoy para sa Buntis</p>
            <p className='indent-10 text-justify'>
            Ang pinggang pinoy para sa buntis ay naglalaman ng gabay sa tamang nutrisyon at pagkain upang matugunan ang pangangailangan sa panahon ng pagbubuntis. Binubuo ito ng go, grow, at glow foods kasama ang gatas.
            </p>
            <div className='grid place-items-center py-5'>
                <img src={GGG} alt="Go, Grow and Glow" className='w-96'/>
            </div>
            <p className='indent-10 text-justify'>
            Ang ¼ ng plato ay mayroong go foods. Ito ay mga pagkaing mayaman sa carbohydrates tulad ng kain, mais, at tinapay. Isa pang kapat (¼) ng plato ay para sa mga grow foods na mayaman sa protina tulad ng karne, isda, itlog, at munggo. At ang huling isa pang kalahati (½) ng plato ay  nakalaan sa mga glow foods na mayaman sa bitamina, mineral, at fiber tulad ng mga gulay at prutas. Kinakailangan din na mayroong gatas at mga produkto ng gatas tulad ng yogurt para sa calcium at iba pang nutrients.
            </p>
          </div>

          <div className='w-[60%] grid gap-2 border-2 border-black py-3 px-4 rounded-lg bg-white sm:w-[80%] md:w-[60%]'>
            <p className='font-bold text-center'>Halimbawa ng Kumpletong Pinggang Pinoy Para sa Buntis</p>
            <p className='font-bold'>Go: </p>
            <ul className='pl-10 list-disc'>
                <li>1 ½ tasa ng kanin</li>
                <li>6 piraso ng maliliit na pandesal</li>
                <li>6 hiwa ng maliliit ng tinapay</li>
                <li>1 ½ tasa ng lutong pansit</li>
                <li>1 ½ katamtamang hiwa ng halamang-ugat (kamote, patatas, at iba pa)</li>
            </ul>
            <p className='font-bold'>Grow: </p>
            <ul className='pl-10 list-disc'>
                <li>2 piraso ng isda na katamtaman ang laki (galunggong)</li>
                <li>3 hiwa ng malaking isda (bangus)</li>
                <li>2 piraso ng katamtamang hita ng manok</li>
                <li>3 servings ng lean meat (chicken, pork, beef)</li>
                <li>3 piraso ng tokwa</li>
                <li>1 pirasong itlog ng manok</li>
            </ul>
            <p className='font-bold'>Glow: </p>
            <ul className='pl-10 list-disc'>
                <li>1 ½ tasa ng lutong gulay (malunggay, saluyot, gabi leaves, ampalaya, kalabasa, carrots, sitaw, at iba pa)</li>
                <li>1 katamtamang laki na prutas (saging, dalanghita, mangga, at iba pa)</li>
                <li>1 hiwa ng malaking prutas (papaya, pinya, pakwan, at iba pa)</li>
            </ul>
            <p className='font-bold mt-5'>
                Maaring matagpuan ang mga table kung saan makikita ang dami ng inirerekomendang Macronutrients at Micronutrients (Vitamins at Minerals) sa isang araw:
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
                <ul className="divide-y mt-2">
                  <li 
                    className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer"
                    onClick={() => handleDownload("/files/pdf/Kabanata_3_Nutritional_Recommendation.pdf", "MACRONUTRIENTS")} 
                  >
                    Download PDF
                  </li>
                  <li 
                    className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer" 
                    onClick={() => handleView("/files/files/pdf/Kabanata_3_Nutritional_Recommendation.pdf")}
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

export default NutriRecomm