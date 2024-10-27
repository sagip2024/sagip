import React from 'react';
import Slider from '../components/Slider';
import DOH1 from '../assets/doh1.jpg';
import DOH2 from '../assets/doh2.jpg';
import DOH3 from '../assets/doh3.jpg';
import Icons from '../components/Icons';
import Content from '../components/Content';
import Icon1 from '../assets/icons/1.png';
import Icon2 from '../assets/icons/2.png';
import Icon3 from '../assets/icons/3.png';
import Icon4 from '../assets/icons/4.png';
import Icon5 from '../assets/icons/5.png';
import Icon6 from '../assets/icons/6.png';

function Homepage() {
  const arrayImg = [
    { img: DOH1, title: 'Title1' },
    { img: DOH2, title: 'Title2' },
    { img: DOH3, title: 'Title3' },
  ];

  return (
    <>
      <div id="/" className="grid sm:place-items-center md:place-items-center mb-24">
        <div className='flex justify-center items-center sm:w-[80%] md:w-[80%]'>
          <Slider 
            images={arrayImg}
          />
        </div>
        <div className="text-center my-4">
          <span>Description: </span>
        </div>
        <div className="mt-5 grid grid-cols-3 sm:grid-cols-2 gap-x-24 gap-y-10 justify-center items-center mx-auto">
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Macro"
            pageId="macro"
            image={Icon5}
          />
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Micro"
            pageId="micro"
            image={Icon4}
          />
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Nutri Recomm"
            pageId="nutrirecomm"
            image={Icon2}
          />
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Food Supplement"
            pageId="foodsupplement"
            image={Icon6}
          />
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Food Safety" 
            pageId="foodsafety"
            image={Icon3}
          />
          <Icons 
            bgColor="bg-[#F3D9E5]"
            borderColor="border-[#F3D9E5]"
            name="Download Video"
            pageId="downloadables"
            image={Icon1}
          />
        </div>
      </div>

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
        filePath="/files/pdf/"
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
        filePath="/files/pdf/"
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
        filePath="/files/pdf/"
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
        filePath="/files/pdf/"
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
        filePath="/files/pdf/"
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
    </>
  );
}

export default Homepage;
