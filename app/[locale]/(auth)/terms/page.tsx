// app/[locale]/terms/page.tsx


import MarkdownContent from '@/Component/MarkdownContent';
import { useTranslations } from 'next-intl';

export default function TermsAndConditionsPage() {
  // ดึงข้อมูลทั้งก้อนของ termsAndConditionsPage
  // t.raw() จะให้ Object/Array ดิบๆ ไม่ใช่ string ที่ผ่านการแปล
  const t = useTranslations('termsAndConditionsPage');
  const pageData = t.raw('sections');

  // ตรวจสอบว่า pageData เป็น Array และเรียงลำดับตาม 'order'
  const sortedSections = Array.isArray(pageData)
    ? [...pageData].sort((a: any, b: any) => a.order - b.order)
    : [];


  return (
    <div className="container mx-auto  max-w-4xl"> {/* เพิ่ม max-w-4xl เพื่อจำกัดความกว้างของเนื้อหาหลัก */}
      <h1 className="text-4xl font-extrabold  text-center text-gray-900">{t('title')}</h1>

      {sortedSections.map((section: any) => (
        <div key={section.id} className=" bg-white rounded-lg shadow-md">
          {/* หัวข้อหลักของแต่ละ Section */}
          <h2 className="text-3xl font-bold  border-b  text-blue-700">
            {section.title}
          </h2>

          {/* วนลูปแสดง Content Blocks ภายในแต่ละ Section */}
          {section.contentBlocks.map((block: any, index: number) => {
            switch (block.type) {
              case 'paragraph':
                // MarkdownContent จะจัดการ <p> ให้เอง
                return (
                  <MarkdownContent
                    key={index}
                    content={block.text}
                    // className="mb-4" // สามารถเพิ่ม margin-bottom ที่นี่ได้ ถ้าต้องการควบคุม
                  />
                );
              case 'subheading':
                // MarkdownContent จะจัดการ ## (H2) ให้เอง
                return (
                  <MarkdownContent
                    key={index}
                    content={block.text}
                    // className="mt-6 mb-3" // สามารถเพิ่ม margin-top/bottom ได้
                  />
                );
              case 'list':
                // MarkdownContent จะจัดการ - (ul) หรือ 1. (ol) ให้เอง
                return (
                  <MarkdownContent
                    key={index}
                    content={block.text}
                    // className="mb-4"
                  />
                );
              // สามารถเพิ่ม case อื่นๆ ได้ ถ้ามี type เพิ่มเติมในอนาคต (เช่น 'image', 'table')
              default:
                // Fallback สำหรับ type ที่ไม่รู้จัก
                return (
                  <MarkdownContent
                    key={index}
                    content={block.text}
                    // className="mb-4"
                  />
                );
            }
          })}
        </div>
      ))}
    </div>
  );
  
}