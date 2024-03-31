"use client"
import styles from './Loading.module.css';
import { FormEvent, useState, useCallback, ChangeEvent, HTMLAttributes, useEffect, Dispatch, ReactElement, SetStateAction } from "react";

type TLoading = {
  loading: null | boolean;
  setLoading: Dispatch<SetStateAction<null | boolean>>
  setOpenMainView: Dispatch<SetStateAction<null | boolean>>
};

export default function Loading(props: TLoading): ReactElement {
  const [lineText, setlineText] = useState<string>("");
  const [show, setShow] = useState(0)
  const [charIndex, setCharIndex] = useState<number>(0);
  const [lineNumber, setLineNumber] = useState<number>(0);
  // const textArray = [
  //   "Loading ...",
  //   "Rendering a web page ...",
  //   "Start to parse the HTML ...",
  //   "Fetch external resources ...",
  //   "Parse the CSS and build the CSSOM ...",
  //   "Execute the JavaScript ...",
  //   "Merge DOM and CSSOM to construct the render tree ...",
  //   "Calculate layout and paint ...",
  //   "Done",
  // ];

  const textArray = [
    "Загрузка ...",
    "Рендеринг веб-страницы ...",
    "Начать парсинг HTML кода и создание DOM ...",
    "Извлечь внешние ресурсы ...",
    "Начать парсинг CSS кода и создать CSSOM ...",
    "Выполнить JavaScript код ...",
    "Объединить DOM и CSSOM для построения дерева рендеринга ...",
    "Рассчитать макет и раскрасить ...",
    "Готово",
    ">",
  ];

  const typingDelay = 50;
  const newTextDelay = 700; // Delay between current and next 

  function type() {
    if (charIndex < textArray[lineNumber].length) {
      setlineText(lineText + textArray[lineNumber][charIndex]);
      setCharIndex(charIndex + 1);
    }
  }

  //5s deal
  useEffect(() => {
    if (props.loading) {
      const timeout = setTimeout(() => {
        setShow(1)
      }, 5000)
      return () => clearTimeout(timeout)
    }
  }, [props.loading]);

  //printing Loading ...
  useEffect(() => {
    if (props.loading && show == 1) {
      setTimeout(type, typingDelay);
      const timeout = setTimeout(() => {
        setShow(2);
        setCharIndex(0);
        setlineText('');
        setLineNumber(1);
      }, newTextDelay)
      return () => clearTimeout(timeout)
    }
  }, [lineText, props.loading, show]);

  //printing Rendering a web page ...
  useEffect(() => {
    if (props.loading && show == 2) {
      setTimeout(type, typingDelay);
      const timeout = setTimeout(() => {
        setShow(3);
        setCharIndex(0);
        setlineText('');
        setLineNumber(2);
      }, newTextDelay)
      return () => clearTimeout(timeout)
    }
  }, [lineText, props.loading, show]);

  //printing Start to parse the HTML ...
  useEffect(() => {
    if (props.loading && show == 3) {
      setTimeout(type, typingDelay);
      const timeout = setTimeout(() => {
        setShow(4);
        setCharIndex(0);
        setlineText('');
        setLineNumber(3);
      }, newTextDelay)
      return () => clearTimeout(timeout)
    }
  }, [lineText, props.loading, show]);

  //printing Fetch external resources ...
  useEffect(() => {
    if (props.loading && show == 4) {
      setTimeout(type, typingDelay);
      const timeout = setTimeout(() => {
        setShow(5);
        setCharIndex(0);
        setlineText('');
        setLineNumber(4);
      }, newTextDelay)
      return () => clearTimeout(timeout)
    }
  }, [lineText, props.loading, show]);

  //printing Parse the CSS and build the CSSOM ...
  useEffect(() => {
    if (props.loading && show == 5) {
      setTimeout(type, typingDelay);
      const timeout = setTimeout(() => {
        setShow(6);
        setCharIndex(0);
        setlineText('');
        setLineNumber(5);
      }, newTextDelay)
      return () => clearTimeout(timeout)
    }
  }, [lineText, props.loading, show]);

  //printing Execute the JavaScript ...
  useEffect(() => {
    if (props.loading && show == 6) {
      setTimeout(type, typingDelay);
      const timeout = setTimeout(() => {
        setShow(7);
        setCharIndex(0);
        setlineText('');
        setLineNumber(6);
      }, newTextDelay)
      return () => clearTimeout(timeout)
    }
  }, [lineText, props.loading, show]);

  //printing Merge DOM and CSSOM to construct the render tree ...
  useEffect(() => {
    if (props.loading && show == 7) {
      setTimeout(type, typingDelay);
      const timeout = setTimeout(() => {
        setShow(8);
        setCharIndex(0);
        setlineText('');
        setLineNumber(7);
      }, newTextDelay)
      return () => clearTimeout(timeout)
    }
  }, [lineText, props.loading, show]);

  //printing Calculate layout and paint ...
  useEffect(() => {
    if (props.loading && show == 8) {
      setTimeout(type, typingDelay);
      const timeout = setTimeout(() => {
        setShow(9);
        setCharIndex(0);
        setlineText('');
        setLineNumber(8);
      }, newTextDelay)
      return () => clearTimeout(timeout)
    }
  }, [lineText, props.loading, show]);

  //printing Done
  useEffect(() => {
    if (props.loading && show == 9) {
      setTimeout(type, typingDelay);
      const timeout = setTimeout(() => {
        setShow(10);
        setCharIndex(0);
        setlineText('');
        setLineNumber(9);
      }, newTextDelay)
      return () => clearTimeout(timeout)
    }
  }, [lineText, props.loading, show]);

  //printing deleting
  useEffect(() => {
    if (props.loading && show == 10) {
      setTimeout(type, typingDelay);
      const timeout = setTimeout(() => {
        setShow(11);
        setLineNumber(10);
      }, 200)
      return () => clearTimeout(timeout)
    }
  }, [lineText, props.loading, show]);

    //Delete Loading layer
    useEffect(() => {
      if (props.loading && show == 11) {
        const timeout = setTimeout(() => {
          setLineNumber(11);
          props.setOpenMainView(true);
        }, 2500)
        return () => clearTimeout(timeout)
      }
    }, [lineText, props.loading, show]);


  return (
    <section className={`${styles.section} ${props.loading ? styles.loading : ''} ${ lineNumber > 9 ? styles.deleting : ''} ${ lineNumber > 10 ? styles.deleteLayer : ''}`}>
      {lineNumber > 0 && <p className={styles.text}>{textArray[0]}</p>}
      {lineNumber > 1 && <p className={styles.text}>{textArray[1]}</p>}
      {lineNumber > 2 && <p className={styles.text}>{textArray[2]}</p>}
      {lineNumber > 3 && <p className={styles.text}>{textArray[3]}</p>}
      {lineNumber > 4 && <p className={styles.text}>{textArray[4]}</p>}
      {lineNumber > 5 && <p className={styles.text}>{textArray[5]}</p>}
      {lineNumber > 6 && <p className={styles.text}>{textArray[6]}</p>}
      {lineNumber > 7 && <p className={styles.text}>{textArray[7]}</p>}
      {lineNumber > 8 && <p className={styles.text}>{textArray[8]}</p>}
      <p className={styles.text}>{lineText}<span className={styles.cursor}>&nbsp;</span></p>
    </section>
  );
}
