"use client";
import { useState } from "react";

export const Counter = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const updateDate = () => {
        const initialDate = new Date("2022-12-06T00:00:00");

        const actualDate = new Date();

        const difference = actualDate.getTime() - initialDate.getTime();

        const elapsedSeconds = Math.floor(difference / 1000);
        const elapsedMinutes = Math.floor(elapsedSeconds / 60);
        const elapsedHours = Math.floor(elapsedMinutes / 60);
        const elapsedDays = Math.floor(elapsedHours / 24);

        const seconds = elapsedSeconds % 60;
        const minutes = elapsedMinutes % 60;
        const hours = elapsedHours % 24;

        setDays(elapsedDays);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    };

    setInterval(updateDate, 1000);

    return (
        <div data-testid="counter" className="flex flex-col items-center text-center font-heading text-2xl">
            <p>{`${days} dias, ${hours} horas, `}</p>
            <p>{`${minutes} minutos e ${seconds} segundos`}</p>
        </div>
    );
};
