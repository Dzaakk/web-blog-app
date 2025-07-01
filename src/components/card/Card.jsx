import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>01.07.2025 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                </Link>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi?...
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    );
};

export default Card