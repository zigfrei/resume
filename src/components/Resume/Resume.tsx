"use client"
import Image from 'next/image';
import styles from './Resume.module.css';
import { useState } from "react";
import GymIcon from '../SVGIcons/GymIcon';
import MailIcon from '../SVGIcons/MailIcon';
import TelegramIcon from '../SVGIcons/TelegramIcon';
import LinkedinIcon from '../SVGIcons/LinkedinIcon';
import GitHubIcon from '../SVGIcons/GitHubIcon';
import GameIcon from '../SVGIcons/GameIcon';
import BookIcon from '../SVGIcons/BookIcon';
import CookingIcon from '../SVGIcons/CookingIcon';
import ForestIcon from '../SVGIcons/ForestIcon';

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
          <div className={styles.contactWrapper}>
            <div className={styles.contactPoint}>
              <MailIcon />
              <div className={styles.contactPointText}>
                <h4 className={styles.contactPointTitle}>Электронная почта</h4>
                <h5 className={styles.contactPointSubTitle}>georgyrevazashvili@yandex.ru</h5>
              </div>
            </div>

            <div className={styles.contactPoint}>
              <a className={styles.contactPointLink} href="https://t.me/georrg55" target="_blank">
                <TelegramIcon />
              </a>
              <div className={styles.contactPointText}>
                <h4 className={styles.contactPointTitle}>Telegram</h4>
                <h5 className={styles.contactPointSubTitle}><a className={styles.experienceLink} href="https://t.me/georrg55" target="_blank">https://t.me/georrg55</a></h5>
              </div>
            </div>

            <div className={styles.contactPoint}>
              <a className={styles.contactPointLink} href="https://linkedin.com/in/georgyrevazashvili" target="_blank">
                <LinkedinIcon />
              </a>
              <div className={styles.contactPointText}>
                <h4 className={styles.contactPointTitle}>LinkedIn</h4>
                <h5 className={styles.contactPointSubTitle}><a className={styles.experienceLink} href="linkedin.com/in/georgyrevazashvili" target="_blank">linkedin.com/in/georgyrevazashvili</a></h5>
              </div>
            </div>

            <div className={styles.contactPoint}>
              <a className={styles.githubLinkHover} href="https://github.com/zigfrei" target="_blank">
                <GitHubIcon />
              </a>
              <div className={styles.contactPointText}>
                <h4 className={styles.contactPointTitle}>GitHub</h4>
                <h5 className={styles.contactPointSubTitle}><a className={styles.experienceLink} href="https://github.com/zigfrei" target="_blank">https://github.com/zigfrei</a></h5>
              </div>
            </div>
          </div>
          <h3 className={styles.commonTitle}>Навыки</h3>
          <h4 className={styles.skillsTitleInvert}>Знание языков</h4>
          <div className={styles.skillsLanguagePoint}>
            <h5 className={styles.contactPointTitle}>Русский - родной</h5>
            <h5 className={styles.contactPointTitle}>Английский - B1 - Средний</h5>
          </div>
          <h4 className={styles.skillsTitleInvert}>Программирование</h4>
          <h5 className={styles.contactPointTitle}>HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Vue3, Nuxt3, Redux Toolkit, Git, Jest, Storybook
            Node.js, NestJS, SEO оптимизация, верстка писем HTML, jQuery</h5>

          <h3 className={`${styles.commonTitle} ${styles.titleMargin}`}>Хобби</h3>
          <div className={styles.hobbyWrapper}>
            <GymIcon /> <GameIcon /> <BookIcon /> <CookingIcon /> <ForestIcon />
          </div>


        </div>

        <div className={styles.rightColumnWrapper}>
          <h3 className={`${styles.commonTitle} ${styles.titleMargin}`}>Образование</h3>
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

          <h3 className={`${styles.commonTitle} ${styles.titleMargin}`}>Опыт работы</h3>
          <h4 className={styles.subTitleInvert}>Коммерческий опыт</h4>

          <div className={styles.rowWrapper}>
            <h4 className={styles.dateText}>Апрель 2024 — настоящее время</h4>
            <div className={styles.eduTextWrapper}>
              <h5 className={styles.eduTextTitle}><a className={styles.experienceLink} href="https://www.switchcase.dev/" target="_blank">SwitchCase</a></h5>
              <h5 className={styles.eduTextTitle}>Фронтенд разработчик</h5>
              <h5 className={styles.eduTextTitle}>Верстка лэндингов на Nuxt 3, внесение правок и верстка на vue2</h5>
            </div>
          </div>

          <div className={styles.rowWrapper}>
            <h4 className={styles.dateText}>Сентябрь 2023 — Апрель 2024</h4>
            <div className={styles.eduTextWrapper}>
              <h5 className={styles.eduTextTitle}>Частная практика — фриланс</h5>
              <h5 className={styles.eduTextTitle}>Фронтенд / фулстек разработчик</h5>
              <h5 className={styles.eduTextTitle}>Next.js: <a className={styles.experienceLink} href="https://kirpiflex.by/" target="_blank">https://kirpiflex.by/</a><br />
                Разработка темы на Wordpress + Cart js: <a className={styles.experienceLink} href="https://выборпрезидента.рф" target="_blank">https://выборпрезидента.рф</a><br />
                HTML+CSS+JS: <a className={styles.experienceLink} href="https://www.accu-traffic.ca/" target="_blank">https://www.accu-traffic.ca/</a><br />
                Устранение замечаний на сайте созданном на YII2: <a className={styles.experienceLink} href="https://makeuplab.by/" target="_blank">https://makeuplab.by/</a></h5>
            </div>
          </div>

          <div className={styles.rowWrapper}>
            <h4 className={styles.dateText}>Сентябрь 2023 — настоящее время</h4>
            <div className={styles.eduTextWrapper}>
              <h5 className={styles.eduTextTitle}>Неоплачиваемая стажировка</h5>
              <h5 className={styles.eduTextTitle}>Фронтенд разработчик</h5>
              <h5 className={styles.eduTextTitle}>Работаем над коммерческим проектом <a className={styles.experienceLink} href="https://tesseramosaic.art/" target="_blank">https://tesseramosaic.art/</a><br />
                Реализовал там регистрацию/авторизацию, личный кабинет, страницу курсов, UI-kit: <a className={styles.experienceLink} href="https://renenorth.github.io/Mosaic-courses-website/ " target="_blank">Storybook UI-kit</a>, внедрил тестирование компанентов, написание историй. Много работаю с кодом предыдущих разработчиков. Провожу code review коллеги фронтендера. Еженедельно на митапах взаимодействую с командой разработки PM, backend-разработчик, UI/UX-дизайнер. На бэкенде Django, сборка на docker compose, фронтенд React + Redux Toolkit + CRA.
              </h5>
            </div>
          </div>
          <h4 className={styles.subTitleInvert}>Учебный опыт</h4>
          <div className={styles.rowWrapper}>
            <h4 className={styles.dateText}>Май 2021 — Май 2023</h4>
            <div className={styles.eduTextWrapper}>
              <h5 className={styles.eduTextTitle}>Фронтенд / фулстек разработчик</h5>
              <h5 className={styles.eduTextTitle}>
                1. Проект Mesto.
                Функционал: Single Page Application, валидация пользователя, добавление/удаление фотографий, адаптивная верстка.
                Технологии: JavaScript, HTML, CSS, Webpack, БЭМ, работа с напарником - VSCode Live Share.<br />
                <a className={styles.experienceLink} href="https://github.com/zigfrei/mesto-project" target="_blank">https://github.com/zigfrei/mesto-project/</a><br />

                2. Проект Stellar Burgers.
                Функционал: реализован Drag & Drop, роутинг, валидация пользователя токеном, добавление/удаление заказов, история заказов.
                Технологии: React, Redux, React DND, WebSocket, TypeScript.<br />
                <a className={styles.experienceLink} href="https://github.com/zigfrei/react-burger" target="_blank">https://github.com/zigfrei/react-burger</a><br />

                3. Проект МБОУ АЛГОСОШ им. Фибоначчи
                Функционал: Unit-тестирование, E2E тестирование с использованием Cypress, изучение алгоритмов и структур данных на практике.
                Технологии: React js, TypeScript, Jest, Cypress, yarn<br />
                <a className={styles.experienceLink} href="https://github.com/zigfrei/algososh" target="_blank">https://github.com/zigfrei/algososh</a><br />

                4. Проект по докеризации и деплою сервиса “КупиПодариДай”.
                В рамкам проекта размешал на виртуальной машине сервера готовый проект с базой данных, бэком и фронтом.
                Для безопасности разделял докер образы и их взаимодействие друг с другом через Docker Compose. Получал сертификаты через certbot.<br />
                <a className={styles.experienceLink} href="https://github.com/zigfrei/web-plus-docker-and-compose" target="_blank">https://github.com/zigfrei/web-plus-docker-and-compose</a><br />

              </h5>
            </div>
          </div>

          <h4 className={styles.subTitleInvert}>Нерелевантный опыт</h4>
          <div className={styles.rowWrapper}>
            <h4 className={styles.dateText}>Май 2021 — Май 2023</h4>
            <div className={styles.eduTextWrapper}>
              <h5 className={styles.eduTextTitle}>Ведущий инженер-технолог</h5>
              <h5 className={styles.eduTextTitle}>ОАО «Гродно Азот»</h5>
              <h5 className={styles.eduTextTitle}>По распределению с ВУЗа был отправлен на завод. Работал аппаратчиком вел - технологический процесс, потом начальником смены — руководил сменой из 15 человек, а после работал ведущим инженером-технологом. В сферу обязанностей ведущего инженера-технолога входит работа с документацией - разработка, согласование, утверждение.
              </h5>
            </div>
          </div>

        </div>
      </div>

    </section >
  );
}
