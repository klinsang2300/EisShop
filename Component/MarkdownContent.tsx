// components/MarkdownContent.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Import for GitHub Flavored Markdown

interface MarkdownContentProps {
  content: string;
  className?: string; // Optional className for additional styling
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content, className }) => {
  if (!content) {
    return null; // Don't render if content is empty
  }
  return (
    // 'prose' class from @tailwindcss/typography provides default beautiful styling for markdown
    <div className={`prose max-w-none ${className || ''}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;