import React from "react";
import styles from "../assets/styles/PrevArrow.module.scss";
import { MdKeyboardArrowLeft } from "react-icons/md";


function PrevArrow(props){
    return(
        <div {...props} className={styles.preButton}>
            <button className={styles.left} aria-label="이전 슬라이드로 이동"><MdKeyboardArrowLeft /></button>
        </div>
    );
}

export default PrevArrow;