import { useRef, useState } from "react";
import "./App.scss";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import blue from "./img/blue.png";
import { usePresence } from "framer-motion";
import Intro from "./components/Intro";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${blue});
  background-position: center center;
  background-size: cover;
`;

const Svg = styled(motion.svg)`
  width: 100px;
  height: 100px;
`;

const SvgWrapper = styled(motion.div)``;

const pathVariants = {
  hidden: {
    fill: "rgba(255,255,255,0)",
    pathLength: 0,
  },
  visible: {
    fill: "rgba(255, 255, 255, 1)",
    pathLength: 1,
    transition: {
      default: { duration: 3 },
      fill: { duration: 1.5, delay: 2.5 },
    },
  },
  exit: {
    fill: "rgba(255,255,255,0)",
    pathLength: 0,
    transition: {
      default: { duration: 1 },
      fill: { duration: 0.5, delay: 1 },
    },
  },
};

function App() {
  const [visible, setVisible] = useState(true);
  const [visibleTwo, setVisibleTwo] = useState(false);
  const Refs = useRef<SVGPathElement>(null);

  const changeDetect = setInterval(() => {
    const value = Refs.current?.attributes[3].value;
    if (value === "rgba(255,255,255,0)") return;
    else {
      setVisible(false);
      clearInterval(changeDetect);
    }
  }, 2000);

  return (
    <Wrapper>
      <AnimatePresence onExitComplete={() => setVisibleTwo(true)}>
        {visible && (
          <SvgWrapper>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <motion.path
                ref={Refs}
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                strokeWidth={3}
                stroke="white"
                d="M320 256l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V192L64 192 64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 256 0z"
              />
            </Svg>
            <Intro dContent="M32 32C14.3 32 0 46.3 0 64V256 448c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />
            <Intro dContent="M64 32c17.7 0 32 14.3 32 32V416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32z" />
            <Intro dContent="M64 32c17.7 0 32 14.3 32 32V416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32z" />
            <Intro dContent="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z" />
          </SvgWrapper>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {visibleTwo && (
          <SvgWrapper>
            <Intro dContent="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96h96V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192V96h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160 32z" />
            <Intro
              style={{ marginLeft: "20px" }}
              dContent="M253.5 51.7C248.6 39.8 236.9 32 224 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L125.3 384H322.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM296 320H152l72-172.8L296 320z"
            />
            <Intro dContent="M0 448c0 17.7 14.3 32 32 32s32-14.3 32-32H0zM32 64L58.6 46.2c-7.8-11.7-22.4-17-35.9-12.9S0 49.9 0 64l32 0zM224 352l-26.6 17.8c5.9 8.9 15.9 14.2 26.6 14.2s20.7-5.3 26.6-14.2L224 352zM416 64h32c0-14.1-9.2-26.5-22.7-30.6s-28.1 1.1-35.9 12.9L416 64zM384 448c0 17.7 14.3 32 32 32s32-14.3 32-32H384zM64 448V64H0V448H64zM5.4 81.8l192 288 53.3-35.5-192-288L5.4 81.8zm245.3 288l192-288L389.4 46.2l-192 288 53.3 35.5zM384 64V448h64V64H384z" />
            <Intro
              style={{ marginLeft: "40px" }}
              dContent="M131.1 105.4c-20.1 8.6-30.8 21.8-33.9 39.4c-2.4 14.1-.7 23.2 2 29.4c2.8 6.3 7.9 12.4 16.7 18.6c19.2 13.4 48.3 22.1 84.9 32.5c1 .3 1.9 .6 2.9 .8c32.7 9.3 72 20.6 100.9 40.7c15.7 10.9 29.9 25.5 38.6 45.1c8.8 19.8 10.8 42 6.6 66.3c-7.3 42.5-35.3 71.7-71.8 87.3c-35.4 15.2-79.1 17.9-123.7 10.9l-.2 0 0 0c-24-3.9-62.7-17.1-87.6-25.6c-4.8-1.7-9.2-3.1-12.8-4.3c-16.8-5.6-25.8-23.7-20.3-40.5s23.7-25.8 40.5-20.3c4.9 1.6 10.2 3.4 15.9 5.4c25.4 8.6 56.4 19.2 74.4 22.1c36.8 5.7 67.5 2.5 88.5-6.5c20.1-8.6 30.8-21.8 33.9-39.4c2.4-14.1 .7-23.2-2-29.4c-2.8-6.3-7.9-12.4-16.7-18.6c-19.2-13.4-48.3-22.1-84.9-32.5c-1-.3-1.9-.6-2.9-.8c-32.7-9.3-72-20.6-100.9-40.7c-15.7-10.9-29.9-25.5-38.6-45.1c-8.8-19.8-10.8-42-6.6-66.3l31.5 5.5-31.5-5.5c7.3-42.5 35.3-71.7 71.8-87.3c35.4-15.2 79.1-17.9 123.7-10.9c13 2 52.4 9.6 66.6 13.4c17.1 4.5 27.2 22.1 22.7 39.2s-22.1 27.2-39.1 22.7c-11.2-3-48.2-10.2-60.1-12l4.9-31.5-4.9 31.5c-36.9-5.8-67.5-2.5-88.6 6.5z"
            />
            <Intro dContent="M320 256l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V192L64 192 64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 256 0z" />
            <Intro dContent="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96h96V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192V96h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160 32z" />
            <Intro dContent="M0 448c0 17.7 14.3 32 32 32s32-14.3 32-32H0zM32 64L56.6 43.5C48 33.2 33.8 29.3 21.1 33.9S0 50.5 0 64l32 0zM352 448l-24.6 20.5c8.6 10.3 22.8 14.2 35.5 9.6s21.1-16.6 21.1-30.1H352zM384 64c0-17.7-14.3-32-32-32s-32 14.3-32 32h64zM64 448V64H0V448H64zM7.4 84.5l320 384 49.2-41-320-384L7.4 84.5zM384 448V64H320V448h64z" />
          </SvgWrapper>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
