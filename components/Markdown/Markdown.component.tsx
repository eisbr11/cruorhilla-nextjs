import { useState, useEffect, FC } from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

export interface IMarkedProps {
  content: string;
}

const MarkedViewer: FC<IMarkedProps> = ({ content }) => {
  const [html, setHtml] = useState<string>();

  useEffect(() => {
    let cancelled = false;
    const parseMarkdown = async () => {
      try {
        const rawHtml = await marked.parse(content); // await is important!
        if (!cancelled) {
          const cleanHtml = DOMPurify.sanitize(rawHtml, {
            USE_PROFILES: { html: true },
          });
          setHtml(cleanHtml);
        }
      } catch (error) {
        if (!cancelled) {
          if (error instanceof Error) {
            setHtml(
              `<p>${error.name}: ${error.message}</p><pre>${error.stack}</pre>`
            );
          } else {
            setHtml(`<p>${String(error)}</p>`);
          }
        }
      }
    };
    parseMarkdown();
    return () => {
      cancelled = true;
    };
  }, [content]);

  // eslint-disable-next-line @eslint-react/dom/no-dangerously-set-innerhtml
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkedViewer;
