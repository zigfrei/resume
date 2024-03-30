"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Matrix from "@/components/Matrix/Matrix";
import Loading from "@/components/Loading/Loading";
import { FormEvent, useState, useCallback, ChangeEvent, HTMLAttributes, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState<null | boolean>(false);
  return (
    <main className={styles.main}>
      <Matrix loading={loading}  setLoading={setLoading} />
      <Loading loading={loading}  setLoading={setLoading} />
    </main>
  );
}
