// import React  from "react";
import MenuCategories from "../menuCategories/MenuCategories";
import Menuposts from "../menuPosts/MenuPosts";
import styles from "./menu.module.css";
const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"what's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <Menuposts withImage={false} />
            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories />
            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <Menuposts withImage={true} />
        </div>
    );
};

export default Menu;