"use client"
import styles from './Matrix.module.css';
import Image from 'next/image';

export default function Matrix() {

    let canvas: any;
    if (typeof window !== "undefined") {
// Get the canvas node and the drawing context
canvas = document.getElementById('canv') as HTMLCanvasElement;
}
const ctx = canvas?.getContext('2d');

// set the width and height of the canvas
let w = 0;
let h = 0;
if(canvas){
w = canvas.width = document.body.offsetWidth;
h = canvas.height = document.body.offsetHeight;}

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

function matrix () {
    if(ctx){
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);
    
    // ctx.fillStyle = '#0f0';
    ctx.fillStyle = '#CFFD80';
    ctx.font = '15pt monospace';
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


    return (
        // <section className={styles.section} >
            <canvas width="500" height="200" id="canv" />
        // </section>
    );
}
