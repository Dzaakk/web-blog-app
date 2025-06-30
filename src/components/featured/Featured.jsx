// import React  from "react";
import Image from "next/image"
import styles from "./featured.module.css"
const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, lama dev here!</b> Discover my stories and creeative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Sit amet consectetur adipiscing elit quisque faucibus ex.
                        Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured