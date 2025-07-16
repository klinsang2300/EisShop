// app/terms/page.tsx
import React from 'react';
import styles from './terms.module.css'; // นำเข้า CSS Module สำหรับ layout
import { getTranslations } from 'next-intl/server';

// กำหนด Type สำหรับโครงสร้างข้อมูล
interface SectionData {
  heading: string;
  items?: string[];
  subsections?: SectionData[]; // subsections จะมีโครงสร้างเหมือน SectionData
}

// Component สำหรับแสดงแต่ละส่วนของข้อความเงื่อนไข
// ทำให้ Section component สามารถเรียกตัวเองซ้ำได้ (recursive)
function Section({ heading, items, subsections }: SectionData) {
  return (
    <div className="mb-4"> {/* เพิ่ม margin-bottom เพื่อแยกระหว่างส่วน */}
      <h2 className=" font-semibold mb-2">{heading}</h2>

      {/* รายการแบบตัวเลข (items) */}
      {items && items.length > 0 && (
        <ol className="list-decimal pl-5 mb-4">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      )}


      {subsections && subsections.length > 0 && (
        <div className="ml-2">
          <ol className="list-decimal pl-5 mb-4">
            {subsections.map((sub, index) => (
              <li key={index} >{sub.heading}
                {sub.subsections?.map((sub, index) => (
                  <ul key={index}><SubSection key={index} {...sub} /></ul>
                ))}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
function SubSection({ heading, items, subsections }: SectionData) {
  return (


    <li>
      {heading}
      <div className="ml-4">
        <ul>
          {items?.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
        </div>
    </li>


  )
}
interface TermsPageProps {
  params: {
    locale: string;
  };
}

export default async function TermsPage({ params }: TermsPageProps) {

  const t= await  getTranslations ('termsAndConditionsPage')
  const sectionsData:SectionData[] = t.raw('sections');
  return (
    <div className='page-container my-[1%]'>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>SG</h1>
       <p>{t('title')}</p> {/* ใช้ t() สำหรับข้อความภาษา */}
          <p>{t('subtitle')}</p> {/* ใช้ t() สำหรับข้อความภาษา */}
        </div>

        <div className={styles.card}>

          {/* ใช้ className="prose" สำหรับเนื้อหาหลัก เพื่อให้ Typography Plugin ทำงาน */}
          <div className="prose prose-lg">
            {/* Loop ผ่าน sections หลัก และเรียก Section component เพื่อ render */}
            {sectionsData && sectionsData.length > 0 && sectionsData.map((section, index) => (
              <Section key={index} {...section} />
            ))}
          </div>

          {/* ปุ่มและข้อความ "I agree to all the terms and conditions" */}
          <div className="flex flex-col items-center mt-8">
            <label className="flex items-center space-x-2 mb-4">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="text-sm text-gray-700">Yes, I agree to all the terms and conditions</span>
            </label>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md">
              CONFIRM
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}