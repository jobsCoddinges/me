import { useRef, useState } from "react";
import "./App.scss";
import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import blue from "./img/blue.png";
import Intro from "./components/Intro";
import green from "./img/green2.png";
import me from "./img/me.png";
import ReactAudioPlayer from "react-audio-player";
import missing from "./img/sen.png";
import TypeIt from "typeit-react";
import { useEffect } from "react";
import pin from "./img/pin2.png";
import times from "./img/times.png";
import name from "./img/name.png";
const calm = require("./static/calm2.mp3");

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

const TopBackGround = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  opacity: 0.7;
  background-position: center center;
  background-image: url(${green});
`;

const Svg = styled(motion.svg)`
  width: 100px;
  height: 100px;
`;
const SvgWrapper = styled(motion.div)``;
const RealWrapper = styled(motion.div)`
  max-width: 414px;
  margin: 0 auto;
  background-color: white;
  height: 500vh;
  margin-top: 10px;
  border-radius: 30px;
  overflow: hidden;
`;
const ItsMe = styled(motion.div)`
  position: relative;
`;
const MyFace = styled(motion.div)`
  background-image: url(${me});
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: -90%;
  left: 37%;
  box-shadow: 1px 1px 5px black;
`;
const MyIcons = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
`;
const InstagramIcon = styled(motion.svg)`
  width: 30px;
  height: 30px;
  fill: #db8896;
`;
const GithubIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: #4b4be0be;
  margin-left: 20px;
  margin-top: 10px;
`;
const MyIconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Dancing Script", cursive;
  font-size: 15px;
  font-weight: 600;
`;
const MyIconDescription = styled(motion.span)``;

const Title = styled(motion.h2)`
  font-family: "Dancing Script", cursive;
  margin-top: 30px;
  font-weight: bold;
  font-size: 28px;
  display: flex;
  justify-content: center;
`;
const MyDescription = styled(motion.p)`
  font-family: "Reem Kufi Fun", sans-serif;
  line-height: 20px;
  padding: 10px 15px;
  margin-top: 20px;
`;

const JapaneseAnimationWrapper = styled(motion.div)`
  padding: 15px;
`;
const MyBestAnimation = styled(motion.div)`
  overflow: hidden;

  height: 500px;
  margin-bottom: 10px;
`;
const AnimationImg = styled(motion.div)`
  background-image: url(${missing});
  width: 100%;
  height: 200px;
  background-position: center center;
  background-size: cover;
  border-radius: 20px;
`;

const MyFavortieAnimationText = styled(motion.p)`
  font-family: "Dancing Script", cursive;
  font-size: 33px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;
const AudioPlayBtn = styled(motion.button)`
  margin-left: 30px;
  margin-top: 30px;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
const AnimationTitle = styled(motion.h2)`
  color: white;
  padding: 20px;
  font-family: "Dancing Script", cursive;
  font-size: 30px;
  display: flex;
  justify-content: center;
`;
const AnimationDescription = styled(motion.p)`
  color: white;
  font-family: "Reem Kufi Fun", sans-serif;
  font-size: 13px;
  line-height: 30px;
`;

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
  const [visibleThree, setVisibleThree] = useState(false);
  const [sentype, setSentype] = useState(false);
  const Refs = useRef<SVGPathElement>(null);
  const Ref2 = useRef<SVGPathElement>(null);
  const audio = document.querySelector("audio");
  const { scrollY } = useViewportScroll();
  const senScale = useTransform(scrollY, [10, 460], [0, 1]);
  const timeScale = useTransform(scrollY, [500, 1100], [0, 1]);
  const nameScale = useTransform(scrollY, [1444, 1800], [0, 1]);
  const colors = useTransform(
    scrollY,
    [500, 600],
    ["rgba(0,0,0,1)", "rgba(255,255,255,1)"]
  );
  const backgroundColor = useTransform(
    scrollY,
    [500, 600],
    ["rgba(0,0,0,0)", "rgb(0, 0, 0, 0.85)"]
  );
  useEffect(
    () => scrollY.onChange(() => console.log(scrollY.get())),
    [scrollY]
  );

  const changeDetect = setInterval(() => {
    const value = Refs.current?.attributes[3].value;
    if (value === "rgba(255,255,255,0)") return;
    else {
      setVisible(false);
      clearInterval(changeDetect);
    }
  }, 2000);
  const changeDetectTwo = setInterval(() => {
    const value = Ref2.current?.attributes[3].value;
    if (value === "rgba(255,255,255,0)") return;
    else {
      setVisibleTwo(false);
      clearInterval(changeDetectTwo);
    }
  }, 2000);

  return (
    <main>
      {!visibleThree && (
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
          <AnimatePresence
            onExitComplete={() => {
              setVisibleThree(true);
            }}
          >
            {visibleTwo && (
              <SvgWrapper>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <motion.path
                    ref={Ref2}
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    strokeWidth={3}
                    stroke="white"
                    d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96h96V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192V96h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160 32z"
                  />
                </Svg>
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
      )}
      <AnimatePresence>
        {visibleThree && (
          <>
            <RealWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ backgroundColor: backgroundColor }}
            >
              <TopBackGround>
                <AudioPlayBtn
                  onClick={() => {
                    audio?.play();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke="white"
                      strokeWidth="1px"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </AudioPlayBtn>
                <AudioPlayBtn
                  onClick={() => {
                    audio?.pause();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                    />
                  </svg>
                </AudioPlayBtn>
                <ReactAudioPlayer src={calm} autoPlay={true} />
              </TopBackGround>
              <ItsMe>
                <MyFace></MyFace>
                <MyIcons>
                  <a href={"https://www.instagram.com/shin.0307/"}>
                    <MyIconWrapper>
                      <InstagramIcon
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <motion.path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </InstagramIcon>
                      <MyIconDescription>Instagram</MyIconDescription>
                    </MyIconWrapper>
                  </a>
                  <a href="https://m.blog.naver.com/tlsrbcjf7579">
                    <MyIconWrapper>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        width="50px"
                        height="50px"
                        style={{ marginRight: "-10px" }}
                      >
                        <circle cx="77" cy="13" r="1" fill="#f1bc19" />
                        <circle cx="50" cy="50" r="37" fill="#e4e4f9" />
                        <circle cx="83" cy="15" r="4" fill="#f1bc19" />
                        <circle cx="87" cy="24" r="2" fill="#8889b9" />
                        <circle cx="81" cy="76" r="2" fill="#fbcd59" />
                        <circle cx="15" cy="63" r="4" fill="#fbcd59" />
                        <circle cx="25" cy="87" r="2" fill="#8889b9" />
                        <circle cx="18.5" cy="51.5" r="2.5" fill="#fff" />
                        <circle cx="79.5" cy="33.5" r="1.5" fill="#fff" />
                        <path
                          fill="#add4a1"
                          d="M35,72.3c-4,0-7.3-3.3-7.3-7.3V35c0-4,3.3-7.3,7.3-7.3h30c4,0,7.3,3.3,7.3,7.3v30 c0,4-3.3,7.3-7.3,7.3H35z"
                        />
                        <path
                          fill="#472b29"
                          d="M65,28.4c3.6,0,6.6,3,6.6,6.6v30c0,3.6-3,6.6-6.6,6.6H35c-3.6,0-6.6-3-6.6-6.6V35 c0-3.6,3-6.6,6.6-6.6H65 M65,27H35c-4.4,0-8,3.6-8,8v30c0,4.4,3.6,8,8,8h30c4.4,0,8-3.6,8-8V35C73,30.6,69.4,27,65,27L65,27z"
                        />
                        <path
                          fill="#fff"
                          d="M68.812,48.213v1.8v14.3c0,2.5-2,4.5-4.5,4.5h-28c-2.5,0-4.5-2-4.5-4.5v-28c0-2.5,2-4.5,4.5-4.5 h25.4h2.6c2.5,0,4.5,2,4.5,4.5v3.4v2v1v1.1v2.9V48.213"
                        />
                        <path
                          fill="#472b29"
                          d="M68.5,47.4c-0.3,0-0.5-0.2-0.5-0.5V43c0-0.3,0.2-0.5,0.5-0.5S69,42.7,69,43v3.9 C69,47.2,68.8,47.4,68.5,47.4z M68.5,40.5c-0.3,0-0.5-0.2-0.5-0.5v-2c0-0.3,0.2-0.5,0.5-0.5S69,37.7,69,38v2 C69,40.3,68.8,40.5,68.5,40.5z"
                        />
                        <path
                          fill="#472b29"
                          d="M64,69H36c-2.8,0-5-2.2-5-5V36c0-2.8,2.2-5,5-5h25.4c0.3,0,0.5,0.2,0.5,0.5S61.7,32,61.4,32H36 c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V49.6c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V64C69,66.8,66.8,69,64,69z"
                        />
                        <path
                          fill="#add4a1"
                          d="M59,39H41c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h6.143l1.989,3.481 c0.384,0.672,1.353,0.672,1.736,0L52.857,59H59c2.761,0,5-2.239,5-5V44C64,41.239,61.761,39,59,39z"
                        />
                        <path
                          fill="#472b29"
                          d="M59,40c2.206,0,4,1.794,4,4v10c0,2.206-1.794,4-4,4h-6.143c-0.359,0-0.69,0.192-0.868,0.504 L50,61.984l-1.989-3.481C47.833,58.192,47.502,58,47.143,58H41c-2.206,0-4-1.794-4-4V44c0-2.206,1.794-4,4-4H59 M59,39H41 c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h6.143l1.989,3.481c0.192,0.336,0.53,0.504,0.868,0.504s0.676-0.168,0.868-0.504 L52.857,59H59c2.761,0,5-2.239,5-5V44C64,41.239,61.761,39,59,39L59,39z"
                        />
                        <g>
                          <path
                            fill="#fff"
                            d="M51.188,51.951c-1.385,0-2.513-1.211-2.513-2.7s1.127-2.7,2.513-2.7s2.513,1.211,2.513,2.7 S52.573,51.951,51.188,51.951z M51.188,47.951c-0.613,0-1.112,0.583-1.112,1.3s0.499,1.3,1.112,1.3s1.112-0.583,1.112-1.3 S51.801,47.951,51.188,47.951z"
                          />
                          <path
                            fill="#472b29"
                            d="M51.188,52.201c-1.523,0-2.763-1.323-2.763-2.95s1.239-2.95,2.763-2.95s2.763,1.323,2.763,2.95 S52.711,52.201,51.188,52.201z M51.188,46.8c-1.248,0-2.263,1.099-2.263,2.45s1.015,2.45,2.263,2.45s2.263-1.099,2.263-2.45 S52.435,46.8,51.188,46.8z M51.188,50.8c-0.751,0-1.362-0.695-1.362-1.55s0.611-1.55,1.362-1.55s1.362,0.695,1.362,1.55 S51.938,50.8,51.188,50.8z M51.188,48.201c-0.476,0-0.862,0.471-0.862,1.05s0.387,1.05,0.862,1.05s0.862-0.471,0.862-1.05 S51.663,48.201,51.188,48.201z"
                          />
                        </g>
                        <g>
                          <path
                            fill="#fff"
                            d="M42.938,46.675c-0.434,0-0.836,0.135-1.188,0.355V45.25h-1.5v6.5h1.5v-0.279 c0.351,0.219,0.753,0.355,1.188,0.355c1.316,0,2.388-1.155,2.388-2.575S44.254,46.675,42.938,46.675z M42.938,50.425 c-0.544,0-0.987-0.527-0.987-1.175s0.443-1.175,0.987-1.175s0.987,0.527,0.987,1.175S43.482,50.425,42.938,50.425z"
                          />
                          <path
                            fill="#472b29"
                            d="M42.938,52.076c-0.332,0-0.656-0.069-0.968-0.206C41.927,51.948,41.845,52,41.75,52h-1.5 C40.112,52,40,51.889,40,51.75v-6.5c0-0.138,0.112-0.25,0.25-0.25h1.5c0.138,0,0.25,0.112,0.25,0.25v1.367 c0.302-0.128,0.616-0.192,0.938-0.192c1.455,0,2.638,1.268,2.638,2.825S44.392,52.076,42.938,52.076z M41.75,51.221 c0.046,0,0.092,0.013,0.133,0.038c0.336,0.21,0.691,0.317,1.055,0.317c1.179,0,2.138-1.043,2.138-2.325s-0.959-2.325-2.138-2.325 c-0.365,0-0.719,0.106-1.055,0.316c-0.077,0.048-0.175,0.05-0.254,0.007c-0.08-0.044-0.129-0.128-0.129-0.219V45.5h-1v6l1-0.03 c0-0.091,0.049-0.175,0.129-0.219C41.667,51.231,41.708,51.221,41.75,51.221z M42.938,50.675c-0.682,0-1.237-0.639-1.237-1.425 s0.555-1.425,1.237-1.425s1.237,0.639,1.237,1.425S43.62,50.675,42.938,50.675z M42.938,48.326c-0.407,0-0.737,0.415-0.737,0.925 s0.331,0.925,0.737,0.925s0.737-0.415,0.737-0.925S43.344,48.326,42.938,48.326z"
                          />
                        </g>
                        <g>
                          <path
                            fill="#fff"
                            d="M45.875,45.25H45.76h-0.385v1.5h0.5c0.375,0,0.375,0.625,0.375,0.625v1.01v3.365h1.5v-4.375 C47.75,45.25,46.625,45.25,45.875,45.25z"
                          />
                          <path
                            fill="#472b29"
                            d="M47.75,52h-1.5C46.112,52,46,51.889,46,51.75v-4.375C45.999,47.228,45.945,47,45.875,47h-0.5 c-0.138,0-0.25-0.112-0.25-0.25v-1.5c0-0.138,0.112-0.25,0.25-0.25h0.5C46.618,45,48,45,48,47.375v4.375 C48,51.889,47.888,52,47.75,52z M46.5,51.5h1v-4.125c0-1.875-0.863-1.875-1.625-1.875h-0.25v1h0.25 c0.432,0,0.625,0.44,0.625,0.875V51.5z"
                          />
                        </g>
                        <g>
                          <path
                            fill="#fff"
                            d="M58.25,46.75v0.353c-0.377-0.269-0.828-0.428-1.313-0.428c-1.316,0-2.388,1.155-2.388,2.575 s1.071,2.575,2.388,2.575c0.485,0,0.935-0.159,1.313-0.428v0.353c0,0.5-0.25,0.75-0.625,0.75h-0.087H57.25v1.25h0.375 c2.125,0,2.125-1.375,2.125-2v-5H58.25z M56.938,50.425c-0.544,0-0.987-0.527-0.987-1.175s0.443-1.175,0.987-1.175 s0.987,0.527,0.987,1.175S57.482,50.425,56.938,50.425z"
                          />
                          <path
                            fill="#472b29"
                            d="M57.625,54H57.25C57.112,54,57,53.888,57,53.75V52.5c0-0.138,0.112-0.25,0.25-0.25h0.375 c0.087,0,0.342,0,0.372-0.415c-0.333,0.158-0.693,0.24-1.06,0.24c-1.455,0-2.638-1.268-2.638-2.825s1.183-2.825,2.638-2.825 c0.373,0,0.738,0.084,1.075,0.247c0.033-0.1,0.127-0.172,0.238-0.172h1.5c0.138,0,0.25,0.112,0.25,0.25v5 C60,52.366,60,54,57.625,54z M57.5,53.5h0.125c1.875,0,1.875-1.095,1.875-1.75V47h-1v0.103c0,0.094-0.052,0.179-0.136,0.222 c-0.083,0.042-0.184,0.035-0.259-0.019c-0.35-0.25-0.753-0.381-1.167-0.381c-1.179,0-2.138,1.043-2.138,2.325 s0.959,2.325,2.138,2.325c0.414,0,0.817-0.132,1.167-0.382c0.075-0.055,0.176-0.062,0.259-0.019 c0.083,0.043,0.136,0.128,0.136,0.222v0.353c0,0.737-0.452,1-0.875,1H57.5V53.5z M56.938,50.675c-0.682,0-1.237-0.639-1.237-1.425 s0.555-1.425,1.237-1.425s1.237,0.639,1.237,1.425S57.62,50.675,56.938,50.675z M56.938,48.326c-0.407,0-0.737,0.415-0.737,0.925 s0.331,0.925,0.737,0.925s0.737-0.415,0.737-0.925S57.344,48.326,56.938,48.326z"
                          />
                        </g>
                      </svg>
                      <MyIconDescription>NaverBlog</MyIconDescription>
                    </MyIconWrapper>
                  </a>
                </MyIcons>
              </ItsMe>
              <Title>😊Shin</Title>
              <MyDescription>
                hello. My name is Shin. I love Japanese animation and I love
                coding. If you have any questions about me, please visit my blog
                or github site. There is nothing to see right now, but please
                look forward to one year from now! Below is my github address.
              </MyDescription>
              <a href="https://github.com/jobsCoddinges">
                <MyIconWrapper
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <GithubIcon
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </GithubIcon>
                  <span style={{ marginTop: "5px", fontSize: "20px" }}>
                    https://github.com/jobsCoddinges
                  </span>
                </MyIconWrapper>
              </a>
              <MyFavortieAnimationText style={{ color: colors }}>
                My Favorite Animation
              </MyFavortieAnimationText>
              <JapaneseAnimationWrapper>
                <AnimatePresence>
                  <MyBestAnimation
                    key={1}
                    style={{ scale: senScale, opacity: senScale }}
                  >
                    <AnimationImg></AnimationImg>
                    <AnimationTitle>센과 치히로의 행방불명</AnimationTitle>
                    <AnimationDescription>
                      어떻게 보면 제가 애니메이션을 좋아하게 만든 만화일 수도
                      있습니다. 저는 항상 비현실적인 것들을 꿈꿔 오면서 자기전에
                      그 꿈들을 상상하곤 합니다. 그런데 센과 치히로의 행방불명은
                      저에게는 큰 충격이였고 이때의 지브리 음악들은 저의 가슴을
                      항상 뛰게 만들어 줍니다.
                    </AnimationDescription>
                  </MyBestAnimation>
                  <MyBestAnimation
                    key={2}
                    style={{
                      scale: timeScale,
                      opacity: timeScale,
                      marginBottom: "200px",
                    }}
                  >
                    <AnimationImg
                      style={{ backgroundImage: `url(${times})` }}
                    ></AnimationImg>

                    <AnimationTitle>시간을 달리는 소녀</AnimationTitle>
                    <AnimationDescription>
                      강가에서 주인공 둘이 마지막으로 대화를 나누는 장면이 정말
                      명장면입니다. 애니메이션을 별로 좋아하지 않는 분들도
                      아시지 않을까 하는 애니메이션입니다. 마지막에 명대사를
                      듣고 가슴이 뛰었던 기억이 납니다.{" "}
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "30px",
                          fontSize: "30px",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        "미래에서 기다릴게."{" "}
                      </p>{" "}
                      제 자신에게 정말 오그라듭니다.
                    </AnimationDescription>
                  </MyBestAnimation>
                  <MyBestAnimation
                    key={3}
                    style={{
                      scale: nameScale,
                      opacity: nameScale,
                      height: "530px",
                    }}
                  >
                    <AnimationImg
                      style={{
                        backgroundImage: `url(${name})`,
                        height: "300px",
                      }}
                    ></AnimationImg>

                    <AnimationTitle>너의 이름은</AnimationTitle>
                    <AnimationDescription>
                      영화관에서 보았던 기억이 납니다. 여자친구도 같이 정말
                      재밌게 봤으면서 본인은 애니에 빠지지 않았습니다. 저는 애니
                      덕후가 되어버렸고 너의 이름을 보고 나서 친구들에게 매일
                      키미노 나마에와를 외쳐먼서 다니게 되었습니다. 저의
                      덕후력을 강하게 만들어준 영화입니다. 미즈하테마의 ost는
                      지금도 듣고있습니다!
                    </AnimationDescription>
                  </MyBestAnimation>
                </AnimatePresence>
              </JapaneseAnimationWrapper>
            </RealWrapper>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
