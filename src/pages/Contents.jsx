import React from 'react';
import Content from '../components/Content';
import Icon10 from '../assets/icons/10.png';
import Icon7 from '../assets/icons/7.png';
import Icon9 from '../assets/icons/9.png';
import Icon8 from '../assets/icons/8.png';
import Macronutrients from './Macronutrients';
import Micronutrients from './Micronutrients';
import FoodSafety from './FoodSafety';
import FoodSupplement from './FoodSupplement';
import Downloadables from './Downloadables';
function Contents() {
  return (
    <div className="relative">
        <img 
        src={Icon7} 
        alt="" 
        className="fixed top-0 left-0 z-0 mt-[10%] w-96 drop-shadow-2xl animate-mini-bounce sm:hidden md:hidden" 
        />
        <img 
        src={Icon9} 
        alt="" 
        className="fixed top-0 right-10 z-0 mt-[-2%] w-96 mr-[-5%] drop-shadow-2xl animate-mini-bounce sm:hidden md:hidden" 
        />
        <img 
        src={Icon8} 
        alt="" 
        className="fixed bottom-0 z-0 w-96 drop-shadow-2xl animate-mini-bounce sm:hidden md:hidden" 
        />
        <img 
        src={Icon10} 
        alt="" 
        className="fixed bottom-20 z-0 right-0 w-96 drop-shadow-2xl animate-mini-bounce sm:hidden md:hidden" 
        />
      <div className="relative z-10 bg-white bg-opacity-0">
        <Macronutrients />
        <Micronutrients />
        {/* <Content 
          title="Micronutrients"
          description1="DESCRIPTION"
          description2="DESCRIPTION"
          videoIndex={2}
          filePath="/files/pdf/Kabanata_2_Micronutrients.pdf"
          fileName="Kabanata_2_Micronutrients.pdf"
          link="https://firebasestorage.googleapis.com/v0/b/sagip-a7258.appspot.com/o/pdfs%2FKabanata%202_%20Micronutrients.pdf?alt=media&token=084b8e63-9e8b-4233-a51a-121ac60c9073"
          pdfName="MICRO"
          id="micro"
          desc1={true}
          desc2={true}
          showVideo={true}
          toggle1={true}
        /> */}
        <Content 
          title="Nutrition Recommendation"
          description1="DESCRIPTION"
          description2="DESCRIPTION"
          filePath="/files/pdf/Kabanata_3_Nutritional_Recommendation.pdf"
          videoIndex={3}
          fileName="Kabanata_3_Nutritional_Recommendation.pdf"
          link="https://firebasestorage.googleapis.com/v0/b/sagip-a7258.appspot.com/o/pdfs%2FKabanata%203_%20Nutritional%20Recommendation.pdf?alt=media&token=109a63f7-c286-4115-85e8-7b5401b898b4"
          pdfName="NUTRITION RECOMMENDATION"
          id="nutrirecomm"
          desc1={true}
          desc2={true}
          showVideo={true}
          toggle1={true}
        />
        {/* <Content 
          title="Food Supplement"
          description1="DESCRIPTION"
          description2="DESCRIPTION"
          filePath="/files/pdf/Kabanata_4_Food_Supplement.pdf"
          videoIndex={0}
          fileName="Kabanata_4_Food_Supplement.pdf"
          link="https://firebasestorage.googleapis.com/v0/b/sagip-a7258.appspot.com/o/pdfs%2FKabanata%204_%20Food%20Supplement.pdf?alt=media&token=a9f8e4fa-d417-49b2-9b9e-6d01d1240f7b"
          pdfName="FOOD SUPPLEMENT"
          id="foodsupplement"
          desc1={true}
          desc2={true}
          showVideo={true}
          toggle1={true}
        /> */}
        <FoodSupplement />
        <FoodSafety />
        <Downloadables />
      </div>
    </div>
  );
}

export default Contents;
