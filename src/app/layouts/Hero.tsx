"use client";
import { usePathname } from 'next/navigation';
import style from "./Hero.module.css"
import Navbar from "./Navbar"

export default function Hero(){
    const pathname = usePathname();

    return (
        <>
        <Navbar />
        <div data-route={pathname} className={`cover-container ${style.hero}`}>
            <h1>hello</h1>
        </div>
        </>
    )
}