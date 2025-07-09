import { useState, useEffect, FC } from 'react';
import { marked } from 'marked';
import { Typography, TypographyProps } from '@mui/material';
import DOMPurify from 'dompurify';

interface ITypographyMarkdownViewerProps {
  content: string;
  typographyProps: TypographyProps;
}

const TypographyMarkdownViewer: FC<ITypographyMarkdownViewerProps> = ({
  content,
  typographyProps,
}) => {
  const [html, setHtml] = useState<string>('');

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

  return (
    <Typography
      {...typographyProps}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default TypographyMarkdownViewer;
