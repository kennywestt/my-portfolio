import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="px-6 py-10">
        <h2 className="text-3xl font-bold">Welcome to my portfolio</h2>
      </main>
    </>
  );
}
