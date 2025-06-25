import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="프론트엔드 개발자 포트폴리오" />
      </Head>

      <Header />

      <main className="px-6 py-10">
        <h2 className="text-2xl font-semibold">환영합니다 👋</h2>
        <p className="mt-4 text-gray-700">프론트엔드 개발자 이경근의 포트폴리오입니다.</p>
      </main>
    </>
  );
}
