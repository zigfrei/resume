"use client"
import styles from './Matrix.module.css';
import Image from 'next/image';
import { FormEvent, useState, useCallback, ChangeEvent, HTMLAttributes, useEffect } from "react";


export default function Matrix() {

  //Matrix code
  let canvas: any;
  if (typeof window !== "undefined") {
    // Get the canvas node and the drawing context
    canvas = document.getElementById('canv') as HTMLCanvasElement;
  }
  const ctx = canvas?.getContext('2d');

  // set the width and height of the canvas
  let w = 0;
  let h = 0;
  if (canvas) {
    w = canvas.width = document.body.offsetWidth;
    h = canvas.height = document.body.offsetHeight;
  }

  // draw a black rectangle of width and height same as that of the canvas

  if (ctx) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
  }

  const cols = Math.floor(w / 20) + 1;
  const ypos = Array(cols).fill(0);

  // Generate a random character from the printable ASCII range
  const getRandomChar = () => {
    const minAscii = 32; // ASCII code for space
    const maxAscii = 126; // ASCII code for ~
    const randomAscii = Math.floor(Math.random() * (maxAscii - minAscii + 1)) + minAscii;
    return String.fromCharCode(randomAscii);
  };

  function matrix() {
    if (ctx) {
      ctx.fillStyle = '#0001';
      ctx.fillRect(0, 0, w, h);

      // ctx.fillStyle = '#0f0';
      ctx.fillStyle = '#CFFD80';
      
    w > 700 ? (ctx.font = '15pt monospace') : (ctx.font = '12pt monospace');
    }

    ypos.forEach((y, ind) => {
      const text = getRandomChar();
      const x = ind * 20;
      ctx?.fillText(text, x, y);
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
      else ypos[ind] = y + 20;
    });
  }

  setInterval(matrix, 50);

  //Regular code
  const [loading, setLoading] = useState<null | boolean>(false);

  const handlePressAnyKey = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    // const e = event.currentTarget;
    setLoading(true);
  };

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => setLoading(true);
    document.addEventListener("keydown", keyDownHandler);

    // clean up
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={`${styles.overlayWrapper} ${loading ? styles.loading : ''}`}>
        <canvas width="500" height="200" id="canv" />
        <div onClick={handlePressAnyKey} className={styles.overlay}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Резюме Ревазашвили Георгия</h1>
            <h2 className={styles.subTitle}>Для продолжения нажмите любую клавишу ...</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
