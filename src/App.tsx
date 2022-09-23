import React, { useState } from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import blue from "./img/blue.png";
import { usePresence } from "framer-motion";
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
  const [isPresent, safeToRemove] = usePresence();
  const [visible, setVisible] = useState(true);
  return (
    <Wrapper>
      <AnimatePresence>
        {visible && (
          <SvgWrapper onClick={() => setVisible((prev) => !prev)}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                strokeWidth={3}
                stroke="white"
                d="M320 256l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V192L64 192 64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 256 0z"
              />
            </Svg>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                strokeWidth={3}
                stroke="white"
                d="M32 32C14.3 32 0 46.3 0 64V256 448c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"
              />
            </Svg>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                strokeWidth={3}
                stroke="white"
                d="M64 32c17.7 0 32 14.3 32 32V416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32z"
              />
            </Svg>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                strokeWidth={3}
                stroke="white"
                d="M64 32c17.7 0 32 14.3 32 32V416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32z"
              />
            </Svg>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                strokeWidth={3}
                stroke="white"
                d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z"
              />
            </Svg>
          </SvgWrapper>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
