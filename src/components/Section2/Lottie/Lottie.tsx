"use client";

import LottieReact from "lottie-react";

import BallonLottie from "../../../assets/heart-balloons.json";

export const Lottie = () => {
    return <LottieReact animationData={BallonLottie} className="h-[200px] w-[200px]" />;
};
