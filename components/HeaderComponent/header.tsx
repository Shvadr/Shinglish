import Image from "next/image"
import styles from "./header.module.css"

export default function Header(){
    return(
        <header className={styles.header}>
            <a href="/">
                <Image
                    src={`${process.env.basePath}/vercel.svg`}
                    alt="Logo"
                    width={20}
                    height={20}
                />
            </a>
            <div className={styles.links}>
                <a href="/blog">
                    БЛОГ
                </a>
                <a href="/dictionary">
                    СЛОВАРЬ
                </a>
                <a href="/practice">
                    ПРАКТИКА
                </a>
            </div>
            
        </header>
    )
}