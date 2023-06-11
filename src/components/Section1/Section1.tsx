import Image from "next/image";

import gatito from "../../assets/gatito.jpg";

export const Section1 = () => {
    return (
        <div className="flex h-[100vh] w-full flex-col items-center justify-center gap-20 bg-background">
            <h1 className="font-heading text-3xl text-primary">Olá amor da minha vida</h1>
            <Image src={gatito} alt="gatito" priority placeholder="blur" className="h-[256px] w-[256px]" />
            <p className="max-w-xs text-center font-sans text-xl text-primary">
                Tem algumas coisas que eu preciso te dizer nesse dia tão especial.
            </p>
        </div>
    );
};
