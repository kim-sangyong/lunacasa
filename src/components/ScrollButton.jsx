import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import styles from "../assets/styles/Scroll.module.scss";

// 위로가기 버튼 누르면 상단으로 이동  컴포넌트
function backToTop() {
        const position =
        document.documentElement.scrollTop || document.body.scrollTop;
    if (position) {
        window.requestAnimationFrame(() => {
        window.scrollTo(0, position - position / 10);
        backToTop();
        });
    }
    return(
    <div className={styles.arrowMove} onClick={backToTop}>
        <span className={styles.northArrow}><FaArrowUpLong /></span>
    </div>
    );
}
export default backToTop;