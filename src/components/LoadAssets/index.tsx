// React & Lottie
import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/loading-assets.json";

export const LoadAssets = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e1e1e6",
      }}
    >
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};
