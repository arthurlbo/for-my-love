import Image from "next/image";

import { Lottie } from "./Lottie/Lottie";
import { Counter } from "./Counter/Counter";

import audio from "../../assets/audio.jpg";
import bonk from "../../assets/bonk.png";
import us from "../../assets/us.jpg";
import build from "../../assets/build.jpg";
import mylove from "../../assets/mylove.jpg";
import gatito from "../../assets/gatito2.jpg";

export const Section2 = () => {
    return (
        <div className="minH-[100vh] flex w-full flex-col items-center justify-center gap-8 bg-background px-5 pb-10 text-primary">
            <div className="flex flex-col items-center gap-10">
                <p className="text-2xl">Hoje faz</p>
                <Counter />
                <p className="text-2xl">Desde</p>
            </div>
            <p className="font-heading text-2xl uppercase">o audio de 7 minutos ✨</p>
            <Image src={audio} alt="audio" priority placeholder="blur" className="h-[64px] w-[319px]" />
            <Image src={bonk} alt="bonk" priority placeholder="blur" className="h-[175px] w-[256px]" />
            <p className="max-w-xs text-center text-2xl leading-tight">A partir desse momento, tudo mudou !</p>
            <Lottie />
            <Image src={us} alt="us" priority placeholder="blur" className="max-h-[329px] max-w-[300px] object-cover" />
            <div className="flex max-w-md flex-col items-start gap-5 text-base">
                <p>Eu agradeço a Deus todos os dias da minha vida por ter alguém tão especial ao meu lado.</p>
                <p>
                    Eu sinto um orgulho imenso em te conhecer da forma que eu conheço, e ser amado por você da forma que
                    você me ama.
                </p>
                <p>
                    Cada segundo que passamos juntos é como se o mundo inteiro parasse. Eu agradeço por cada momento,
                    cada risada, cada sorriso, cada mordida. Basta eu estar com você que tudo fica simplesmente
                    perfeito.
                </p>
                <p>
                    Provérbios 31: 10. Quando eu penso em te descrever, esse versículo vem a minha mente, você é a
                    benção mais valiosa que Jesus colocou em meu caminho.
                </p>
                <p>
                    Sua sabedoria me causa constrangimento, ver a forma que você lida com as situações da sua vida, ver
                    o amor que você tem por cada pequeno detalhe me deixa bobo.
                </p>
                <p>
                    Não existe palavras suficientes para descrever o amor que eu sinto por você, é algo imensurável, é
                    como se todas as coisas se alinhassem, como se tudo ficasse em perfeita harmonia.
                </p>
                <p>
                    Cada dia que passa eu me vejo mais apaixonado por você. A cada instante que eu sei do seu amor por
                    mim, eu enxergo o cuidado e o carinho de Deus pela minha vida, por ter colocado em minha confiança
                    sua mais perfeita criação VOCÊ.
                </p>
            </div>
            <Image
                src={build}
                alt="build"
                priority
                placeholder="blur"
                className="max-h-[329px] max-w-[300px] object-cover"
            />
            <div className="flex max-w-md flex-col items-start gap-5 text-base">
                <p>
                    Eu quero presenciar todos os seus sonhos se tornando realidade. Quero estar ao seu lado em cada
                    momento, seja ele bom ou ruim, seja na benção ou na provação, eu sempre estarei contigo.
                </p>
                <p>
                    Você me ajuda a ser uma pessoa melhor, eu não seria metade do homem que sou se não fosse por você.
                </p>
                <p>
                    Eu quero ser o melhor marido desse mundo, o melhor pai do mundo para nossos filhos e eu peço a Deus
                    todos os dias para que me capacite e me ajuda a ser o homem que você e nossa família merece.
                </p>
                <p>
                    Não vejo a hora de poder acordar todos os dias da minha vida ao seu lado, de construir degrau por
                    degrau do nosso futuro e viver tudo aquilo que Deus tem para nossas vidas.{" "}
                </p>
            </div>
            <Image
                src={mylove}
                alt="mylove"
                priority
                placeholder="blur"
                className="max-h-[329px] max-w-[300px] object-cover"
            />
            <div className="flex max-w-md flex-col items-start gap-5 font-sans text-base text-primary">
                <p>
                    Você é a mulher mais linda e incrível desse mundo inteiro, e eu sou o homem mais abençoado do mundo
                    por te ter ao meu lado.
                </p>
                <p>
                    É um privilégio fazer parte da sua vida, te conhecer da forma que eu conheço e ser amado por você da
                    forma que você me ama.
                </p>
            </div>
            <Image
                src={gatito}
                alt="gatito"
                priority
                placeholder="blur"
                className="max-h-[329px] max-w-[300px] object-cover"
            />
            <p className="font-heading text-3xl text-primary">Eu te amo infinitamente 🤍</p>
        </div>
    );
};
