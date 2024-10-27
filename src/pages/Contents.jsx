import React from 'react';
import Content from '../components/Content';
import Icon10 from '../assets/icons/10.png';
import Icon7 from '../assets/icons/7.png';
import Icon9 from '../assets/icons/9.png';
import Icon8 from '../assets/icons/8.png';
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
        <Content 
          title="Macronutrients"
          description1="DESCRIPTION1"
          description2="DESCRIPTION2"
          filePath="/files/pdf/Kabanata_1_Macronutrients.pdf"
          fileName="Kabanata_1_Macronutrients.pdf"
          videoIndex={1}
          link="/files/files/pdf/Kabanata_1_Macronutrients.pdf"
          pdfName="MACRONUTRIENTS"
          id="macro"
          desc1={true}
          desc2={true}
          showVideo={true}
          toggle1={true}
        />
        <Content 
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
        />
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
        <Content 
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
        />
        <Content 
          title="Food Safety"
          description1="DESCRIPTION"
          description2="DESCRIPTION"
          filePath="/files/pdf/Kabanata_5_Food_Safety.pdf"
          videoIndex={0}
          fileName="Kabanata_5_Food_Safety.pdf"
          link="https://firebasestorage.googleapis.com/v0/b/sagip-a7258.appspot.com/o/pdfs%2FKabanata%205_%20Food%20Safety.pdf?alt=media&token=a2cde8cf-1ab5-4a5b-8145-707ff4b62b4a"
          pdfName="FOOD SAFETY"
          id="foodsafety"
          desc1={true}
          desc2={true}
          showVideo={true}
          toggle1={true}
        />
        <Content 
          title="Downloadables"
          description1="DESCRIPTION"
          description2="DESCRIPTION"
          filePath="/files/pdf/Kabanata_5_Food_Safety.pdf"
          videoIndex={0}
          fileName="Kabanata_5_Food_Safety.pdf"
          link="https://firebasestorage.googleapis.com/v0/b/sagip-a7258.appspot.com/o/pdfs%2FKabanata%205_%20Food%20Safety.pdf?alt=media&token=a2cde8cf-1ab5-4a5b-8145-707ff4b62b4a"
          pdfName="FOOD SAFETY"
          id="foodsafety"
          desc1={false}
          desc2={false}
          showVideo={false}
          toggle2={true}
        />
      </div>
    </div>
  );
}

export default Contents;
