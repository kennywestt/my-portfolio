import { useEffect, useState } from "react";

const TYPING_TEXT = "개발자의 여정의 시작";
const TYPING_SPEED = 75; // ms 단위(글자 하나당 딜레이)
const TEXT_FADE_DELAY = 500; // 전체 타이핑 끝난 뒤 FadeIn용 추가 딜레이

export default function Intro({ duration = 1200, onEnd }: { duration?: number; onEnd?: () => void }) {
  const [animate, setAnimate] = useState(false);
  const [fullWhite, setFullWhite] = useState(false);
  const [typed, setTyped] = useState("");      // 타이핑 텍스트
  const [textVisible, setTextVisible] = useState(false);

  // 타이핑 효과
  useEffect(() => {
    let typingTimeout: NodeJS.Timeout | undefined;
    if (!fullWhite && typed.length < TYPING_TEXT.length) {
      typingTimeout = setTimeout(() => {
        setTyped(TYPING_TEXT.slice(0, typed.length + 1));
      }, TYPING_SPEED);
    } else if (typed.length === TYPING_TEXT.length) {
      // 전체 타이핑 끝났을 때 페이드인 처리
      setTimeout(() => setTextVisible(true), TEXT_FADE_DELAY);
    }
    return () => typingTimeout && clearTimeout(typingTimeout);
    // eslint-disable-next-line
  }, [typed, fullWhite]);

  // 빅뱅 애니메이션/인트로 종료 시퀀스
  useEffect(() => {
    setAnimate(true);
    // 빛 퍼짐 시작은 duration만큼 기다린다(타이핑+페이드 맞추려면 delay 조정)
    const t1 = setTimeout(() => {
      setFullWhite(true); // 빛이 다 퍼진 뒤 화면 전체가 하얗게!
      setTimeout(() => {
        if (onEnd) onEnd();
      }, 350);
    }, duration);
    return () => clearTimeout(t1);
  }, [duration, onEnd]);

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black overflow-hidden">
      {/* 중앙의 작은 점 */}
      {!fullWhite && (
        <div
          className={`
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
            bg-white rounded-full shadow-2xl blur-[2px]
            ${animate ? "w-10 h-10 opacity-100 scale-100" : "w-2 h-2 opacity-70 scale-50"}
            transition-all duration-500`}
        />
      )}

      {/* 광원이 퍼지면서 화면 전체를 채움 */}
      {!fullWhite && (
        <div
          className={`
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            bg-white rounded-full blur-2xl pointer-events-none
            ${animate ? "w-[250vw] h-[250vw] opacity-100 scale-100" : "w-0 h-0 opacity-50 scale-10"}
            transition-all duration-[1100ms]`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.41,1.4,0.68,1)"
          }}
        />
      )}

      {/* 타이핑 텍스트 */}
      {!fullWhite && (
        <div className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-4xl md:text-5xl
          text-black drop-shadow-[0_1px_18px_white] select-none
          transition-opacity duration-2000
          ${textVisible ? "opacity-90" : "opacity-70"}
        `}>
          {typed}
          <span className="inline-block animate-pulse" style={{ width: "0.8em" }}>
            {typed.length < TYPING_TEXT.length ? "|" : ""}
          </span>
        </div>
      )}

      {/* 마지막 완전히 하얀 화면 */}
      {fullWhite && (
        <div className="fixed inset-0 bg-white transition-opacity duration-300" />
      )}
    </div>
  );
}
