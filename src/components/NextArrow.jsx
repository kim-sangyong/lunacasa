import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "../assets/styles/NextArrow.module.scss";

const NextArrow = (props) =>{
    return(
        <div {...props} className={styles.nextButton}>
            <button className={styles.right} aria-label="다음 슬라이드로 이동"><MdKeyboardArrowRight /></button>
        </div>
    );
}

export default NextArrow