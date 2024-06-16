// import MapIframe from "@/components/MapIframe";
// import { FadeIn } from "@/components/FadeIn";
// import GridPattern from "@/components/GridPattern";
// import Header from "@/components/Header";
// import React, { useState, useEffect, useRef } from "react";
// import WAVES from "vanta/dist/vanta.waves.min";
// import * as THREE from "three";
import React from "react";
import HomepageLayout from "@/components/HomepageLayout";
import Header from "@/components/Header";

export default function Home() {
    
  // const [vantaEffect, setVantaEffect] = useState(0);
  // const vantaRef = useRef(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       WAVES({
  //         el: vantaRef.current,
  //         THREE: THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 500,
  //         minWidth: 500,
  //         scale: 1.00,
  //         scaleMobile: 1.00
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
      {/* <Header /> */}
      <HomepageLayout />
    </main>
  );
}


