import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

// 이 컴포넌트를 Hero/메인레이아웃에 추가하면 됨!
export default function StarsBackground() {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      zIndex: 1,
      pointerEvents: "none", //pointerEvents는 클릭, 터치, 마우스 이벤트를 완전히 무시
      }}>

      <Canvas 
      camera={{ position: [0, 0, 1] }}
      style={{ pointerEvents: "none" }}>
        <Stars
          radius={100}     // 별 퍼짐 반경
          depth={60}       // 별 깊이(입체)
          count={1800}     // 별 개수 (더 많게 하려면 2500~3000도 추천)
          factor={10}       // 별 크기/밝기
          saturation={0}   // 흰색
          fade             // 멀수록 흐려지는 효과
          speed={2.0}      // 별 회전 속도 (크게 주면 더 역동적)
        />
      </Canvas>
    </div>
  );
}
