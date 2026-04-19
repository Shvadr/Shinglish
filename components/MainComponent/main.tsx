import styles from "./main.module.css"
import Image from "next/image"

export default function Main(){
    return(
        <main className={styles.main}>
            <div className={styles.images}>
                <Image 
                    src={`${process.env.basePath}/books_2.svg`}
                    alt="images"
                    width = {300}
                    height = {300}
                    className={styles.image}
                    style={{width: "30%"}}
                />
                <div>
                    <div>
                        <Image 
                        src={`${process.env.basePath}/books_1.svg`}
                        alt="images"
                        width = {300}
                        height = {300}
                        style={{width: "43%"}}
                        />
                        <Image 
                        src={`${process.env.basePath}/books_3.svg`}
                        alt="images"
                        width = {300}
                        height = {300}
                        style={{width: "43%"}}
                        />
                    </div>
                    <div>
                        <Image 
                        src={`${process.env.basePath}/books_3.svg`}
                        alt="images"
                        width = {300}
                        height = {300}
                        style={{width: "43%"}}
                        />
                        <Image 
                        src={`${process.env.basePath}/books_1.svg`}
                        alt="images"
                        width = {300}
                        height = {300}
                        style={{width: "43%"}}
                        />
                    </div>
                </div>
                <Image 
                    src={`${process.env.basePath}/books_4.svg`}
                    alt="images"
                    width = {300}
                    height = {300}
                    className={styles.image}
                    style={{width: "30%"}}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.title}>SHING&shy;LISH</div>
                <div className={styles.text}>Говорить с ошибками лучше, чем молчать правильно</div>
            </div>
            
        </main>
    )
}