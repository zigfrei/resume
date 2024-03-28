import Image from "next/image";
import styles from "./page.module.css";
import Matrix from "@/components/Matrix/Matrix";

export default function Home() {
  return (
    <main className={styles.main}>
      <Matrix />
    </main>
  );
}
