import Link from "next/link";
import styles from "./MenuCategories.module.css";

const MenuCategories = () => {
    return (
        <div className={styles.categoryList}>
            <Link
                href="/blog?cat=style"
                className={`${styles.categoryItem} ${styles.style}`}>
                Style
            </Link>
            <Link
                href="/blog"
                className={`${styles.categoryItem} ${styles.fashion}`}>
                Fashion
            </Link>
            <Link
                href="/blog"
                className={`${styles.categoryItem} ${styles.food}`}>
                Food
            </Link>
            <Link
                href="/blog"
                className={`${styles.categoryItem} ${styles.travel}`}>
                Travel
            </Link>
            <Link
                href="/blog"
                className={`${styles.categoryItem} ${styles.culture}`}>
                Culture
            </Link>
            <Link
                href="/blog"
                className={`${styles.categoryItem} ${styles.coding}`}>
                Coding
            </Link>
        </div>
    )
}
export default MenuCategories;