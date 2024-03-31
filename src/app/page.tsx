"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Matrix from "@/components/Matrix/Matrix";
import Loading from "@/components/Loading/Loading";
import Header from "@/components/Header/Header";
import Resume from "@/components/Resume/Resume";
import { FormEvent, useState, useCallback, ChangeEvent, HTMLAttributes, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState<null | boolean>(false);
  const [openMainView, setOpenMainView] = useState<null | boolean>(false);
  return (
    <div className={`${styles.page} ${openMainView ? styles.pageFullHeight : ''}`}>
      <div className={styles.monitorCRTEffect} />
      <Matrix loading={loading} setLoading={setLoading} />
      <Loading loading={loading} setLoading={setLoading} setOpenMainView={setOpenMainView} />
      {openMainView && (<>
      <Header />
      <main className={styles.main}>
        <Resume />
      </main>
      </>)
      }
    </div>
  );
}
