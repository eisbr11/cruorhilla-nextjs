import React, { useState, useEffect, FC } from 'react';
import { marked, MarkedOptions } from 'marked';
import { Typography, TypographyProps } from '@mui/material';

export interface MarkedProps {
  options?: MarkedOptions;
  overrides?: MarkedOptions;
  content: string;
  typographyProps: TypographyProps;
}

const TypographyMarkdownViewer: FC<MarkedProps> = ({
  options,
  overrides,
  content,
  typographyProps,
}) => {
  const [html, setHtml] = useState<string>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const printError = (error: any) => {
      if (error instanceof Error) {
        setHtml(`<p>${error.name}: ${error.message}</p><p>${error.stack}</p>`);
      } else {
        setHtml(`<p>${error}</p>`);
      }
    };

    try {
      if (overrides) {
        marked.use(overrides);
      }

      marked.parse(content, options, (error, parsedResult) => {
        if (error) {
          printError(error);
        } else {
          setHtml(parsedResult);
        }
      });
    } catch (e) {
      printError(e);
    }
  }, [options, overrides, content, setHtml]);

  // eslint-disable-next-line react/no-danger,react/jsx-props-no-spreading
  return <Typography {...typographyProps} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default TypographyMarkdownViewer;
