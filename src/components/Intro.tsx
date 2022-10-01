import styled from "styled-components";
import { motion } from "framer-motion";

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
interface Iintro {
  dContent: string;
  [key: string]: any;
}

const Intro = ({ dContent, ...rest }: Iintro) => {
  const Svg = styled(motion.svg)`
    width: 40px;
    height: 40px;
  `;

  return (
    <>
      <Svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          strokeWidth={3}
          stroke="white"
          d={dContent}
        />
      </Svg>
    </>
  );
};

export default Intro;
