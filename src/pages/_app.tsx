import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS 스타일시트 가져오기

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({ 
        duration: 1000
      });
    }
  }, []);
    // 클라이언트 사이드에서만 실행되는 코드

  return <Component {...pageProps} />;
}
