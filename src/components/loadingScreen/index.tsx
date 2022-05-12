// React & Lottie
import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/loading.json";

import { motion } from "framer-motion";

export const LoadingScreen = () => {
  const [isFinish, setIsFinish] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <motion.div
      style={{
        backgroundColor: "#1c1d21",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "200px",
        position: "absolute",
        width: "100%",
        zIndex: 99,
        display: isFinish ? "flex" : "none",
      }}
      animate={{ y: "-100vh", opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
      onAnimationComplete={() => setIsFinish(false)}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </motion.div>
  );
};
