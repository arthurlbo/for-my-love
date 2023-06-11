import "./globals.css";
import { Concert_One as Concert, Poppins } from "next/font/google";

const concert = Concert({ subsets: ["latin"], weight: "400", variable: "--font-concert" });
const poppins = Poppins({ subsets: ["latin"], weight: "400", variable: "--font-poppins" });

export const metadata = {
    title: "arthurlbo | Next TypeScript Template",
    description: "A simple Next template using Next, Typescript, Tailwind, Cypress and other tools!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${concert.variable} ${poppins.variable}`}>{children}</body>
        </html>
    );
}
