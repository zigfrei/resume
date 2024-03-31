"use client"
import Image from 'next/image';
import styles from './Resume.module.css';
// import Navbar from './Navbar/Navbar';
import { useState } from "react";
import Link from "next/link";

export default function Resume() {
  const [open, setOpen] = useState<null | boolean>(false);
  return (
    <section className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.imageWrapper}>
          <Image
            src='/avatar.png'
            alt='Photo of Georgi'
            className={styles.logo}
            fill
            priority
          />
        </div>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Георгий Ревазашвили</h1>
          <h2 className={styles.subTitle}>Frontend-разработчик</h2>
        </div>
      </div>
      <div className={styles.middleSection}>
        <div className={styles.leftColumnWrapper}>
          <h3 className={styles.commonTitle}>Контакты</h3>
          <div className={styles.contactPoint}>
            <svg fill="#fefea6" width="30px" height="30px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd" />
            </svg>
            <div className={styles.contactPointText}>
              <h4 className={styles.contactPointTitle}>Электронная почта</h4>
              <h5 className={styles.contactPointSubTitle}>georgyrevazashvili@yandex.ru</h5>
            </div>
          </div>

          <div className={styles.contactPoint}>
            <a className={styles.contactPointLink} href="https://t.me/zigfrei" target="_blank">
              <svg fill="#fefea6" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Telegram button</title>
                <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" /></svg>
            </a>
            <div className={styles.contactPointText}>
              <h4 className={styles.contactPointTitle}>Telegram</h4>
              <h5 className={styles.contactPointSubTitle}>https://t.me/zigfrei</h5>
            </div>
          </div>

          <div className={styles.contactPoint}>
            <a className={styles.contactPointLink} href="https://linkedin.com/in/georgyrevazashvili" target="_blank">
              <svg fill="#fefea6" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Linkedin button</title>
                <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
              </svg>
            </a>
            <div className={styles.contactPointText}>
              <h4 className={styles.contactPointTitle}>LinkedIn</h4>
              <h5 className={styles.contactPointSubTitle}>linkedin.com/in/georgyrevazashvili</h5>
            </div>
          </div>

          <div className={styles.contactPoint}>
            <a className={styles.githubLinkHover} href="https://github.com/zigfrei" target="_blank">
              <svg width="30px" height="30px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Github button</title>
                <defs>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#fefea6">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <div className={styles.contactPointText}>
              <h4 className={styles.contactPointTitle}>GitHub</h4>
              <h5 className={styles.contactPointSubTitle}>https://github.com/zigfrei</h5>
            </div>
          </div>

        </div>

        <div className={styles.rightColumnWrapper}>
          <h3 className={styles.commonTitle}>Образование</h3>
          <h4 className={styles.subTitleInvert}>Дополнительное профессиональное образование, курсы</h4>
          <div className={styles.rowWrapper}>
            <h4 className={styles.dateText}>2021-2023</h4>
            <div className={styles.eduTextWrapper}>
              <h5 className={styles.eduTextTitle}>Фронтенд / фулстек разработчик</h5>
              <h5 className={styles.eduTextTitle}>Название программы курса: &quot;Веб-разработчик плюс&quot;</h5>
              <h5 className={styles.eduTextTitle}>Яндекс Практикум</h5>
            </div>
            </div>

            <h4 className={styles.subTitleInvert}>Высшее образование</h4>
            <div className={styles.rowWrapper}>
              <h4 className={styles.dateText}>2006-2011</h4>
              <div className={styles.eduTextWrapper}>
                <h5 className={styles.eduTextTitle}>Химик, инженер-технолог</h5>
                <h5 className={styles.eduTextTitle}>Специализация: &quot;Основной органический и нефтехимический синтез&quot;</h5>
                <h5 className={styles.eduTextTitle}>Белорусский государственный технологический университет</h5>
              </div>
            </div>

            <h4 className={styles.subTitleInvert}>Высшее образование</h4>
            <div className={styles.rowWrapper}>
              <h4 className={styles.dateText}>2006-2011</h4>
              <div className={styles.eduTextWrapper}>
                <h5 className={styles.eduTextTitle}>Химик, инженер-технолог</h5>
                <h5 className={styles.eduTextTitle}>Специализация: &quot;Основной органический и нефтехимический синтез&quot;</h5>
                <h5 className={styles.eduTextTitle}>Белорусский государственный технологический университет</h5>
              </div>
            </div>

          </div>
        </div>

    </section>
  );
}
