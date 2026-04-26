import Image from "next/image"
import Link from 'next/link';
import styles from "./header.module.css"

export default function Header(){
    return(
        <header className={styles.header}>
            <Link href="/">
                <Image
                    src={`${process.env.basePath}/vercel.svg`}
                    alt="Logo"
                    width={20}
                    height={20}
                />
            </Link>
            <div className={styles.links}>
                <Link href="/blog">
                    БЛОГ
                </Link>
                <Link href="/dictionary/phrasal-verbs">
                    СЛОВАРЬ
                </Link>
            </div>
            
        </header>
    )
}