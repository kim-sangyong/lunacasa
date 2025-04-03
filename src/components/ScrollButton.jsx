import { useEffect } from "react";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import styles from "../assets/styles/Scroll.module.scss";

// 위로가기 버튼 누르면 상단으로 이동  컴포넌트
const BackToTop = () =>  {
  const { pathname } = useLocation(); // 현재 URL 경로 가져오기

    useEffect(() => {
        window.scrollTo(0, 0); // url 변경시 즉시 상단 이동
    }, [pathname]);

    // 위로 가기 버튼 이벤트 적용함
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return(
    <div className={styles.arrowMove} onClick={backToTop}>
        <span className={styles.northArrow}><FaArrowUpLong /></span>
    </div>
    );
}
export default BackToTop;