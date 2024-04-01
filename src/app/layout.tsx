import type { Metadata } from "next";
import { Handjet, Press_Start_2P } from "next/font/google";
import "./globals.css";

const handjet = Handjet({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-handjet',
});

const press_start_2P = Press_Start_2P({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-press_start_2P',
  weight: "400"
});

export const metadata: Metadata = {
  title: "Домашняя страница Ревазашвили Георгия",
  description: "Добро пожаловать. Снова. Страница выполнена в стиле CRT monitor effect / terminal. Контент буду обновлять по мере возможности.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${handjet.variable} ${press_start_2P.variable}`}>{children}</body>
    </html>
  );
}
