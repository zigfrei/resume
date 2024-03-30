"use client"
import styles from './Loading.module.css';
import { FormEvent, useState, useCallback, ChangeEvent, HTMLAttributes, useEffect, Dispatch, ReactElement, SetStateAction } from "react";

type TLoading = {
  loading: null | boolean;
  setLoading: Dispatch<SetStateAction<null | boolean>>
};

export default function Loading(props: TLoading): ReactElement {
  const [lineText, setlineText] = useState<string>("");
  const [printedText, setPrintedText] = useState(0);
  const [show, setShow] = useState(0)
  const [charIndex, setCharIndex] = useState<number>(0);
  const [lineNumber, setLineNumber] = useState<number>(0);
  const textArray = [
    "Loading ...",
    "Rendering a web page ...",
    "Start to parse the HTML ...",
    "Fetch external resources ...",
    "Parse the CSS and build the CSSOM ...",
    "Execute the JavaScript ...",
    "Merge DOM and CSSOM to construct the render tree ...",
    "Calculate layout and paint ...",
    "Done",
  ];

  const typingDelay = 200;
  const newTextDelay = 2000; // Delay between current and next 

  function type() {
    console.log(lineText, charIndex);
    if (charIndex < textArray[lineNumber].length) {
      setlineText(lineText + textArray[lineNumber][charIndex]);
      setCharIndex(charIndex + 1);
    }
  }

  useEffect(() => {
    if (props.loading) {
      const timeout = setTimeout(() => {
        setShow(1)
      }, 5000)
      return () => clearTimeout(timeout)
    }
  }, [props.loading]);

  useEffect(() => {
    if (props.loading && show == 1) {
      setTimeout(type, typingDelay);
      const timeout = setTimeout(() => {
        setShow(2);
        setCharIndex(0);
        setPrintedText(1)
        setlineText('');
        setLineNumber(1);
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [lineText, props.loading, show]);

  useEffect(() => {
    if (props.loading && show == 2) {
      setTimeout(type, typingDelay);
      const timeout = setTimeout(() => {
        setShow(3)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [lineText, props.loading, show]);

  return (
    <section className={`${styles.section} ${props.loading ? styles.loading : ''}`}>
      {printedText>0 && <p className={styles.text}>Loading ...</p>}
      <p className={styles.text}>{lineText}<span className={styles.cursor}>&nbsp;</span></p>
    </section>
  );
}
