import { useState, useEffect, FC } from 'react';
import { marked, MarkedOptions } from 'marked';

export interface IMarkedProps {
  options?: MarkedOptions;
  overrides?: MarkedOptions;
  content: string;
}

const MarkedViewer: FC<IMarkedProps> = ({ options, overrides, content }) => {
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

  // eslint-disable-next-line @eslint-react/dom/no-dangerously-set-innerhtml
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkedViewer;
