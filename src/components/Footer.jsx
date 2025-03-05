import React from "react";
import Kakao from "../assets/images/Footer-img/KakaoTalk_logo.svg";
import Instagram from "../assets/images/Footer-img/Instagram.svg";
import Gmail from "../assets/images/Footer-img/Gmail.svg";
import styles from "../assets/styles/Footer.module.scss";

function Footer() {
    return(
        <footer>
            <div className={styles.information}>
                <p className={styles.first}>
                    LUNACASA 개인 프로젝트
                </p>
                <p className={styles.academy}>
                    KG아이티뱅크수료
                </p>
                <p className={styles.infoText}>
                    디자인: <span className={styles.infoSpan}>김상용</span>
                    퍼블리싱: <span className={styles.infoSpan}>김상용</span>
                    지역: <span className={styles.infoSpan}>남양주시</span>
                    <span className={styles.emailWrap}>
                        이메일: <span className={styles.infoSpan}>sdragon0416@gmail.com</span>
                        {/* 390px일때 개행하기위해 부모 span 추가 */}
                    </span>
                </p>

            </div>
            <div className={styles.logo}>
                <img src={Kakao} alt="KakaoLogo"/>
                <img src={Instagram} alt="InstagramLogo"/>
                <img src={Gmail} alt="GmailLogo"/>
            </div>
            <div className={styles.warning}>
                <p>※ 개인 프로젝트 목적의 사이트이므로 실제 사용이 불가합니다.</p>
                <p className={styles.two}>© 2025 LUNACASA. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;