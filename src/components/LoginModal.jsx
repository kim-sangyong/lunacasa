import React from "react";
import styles from "../assets/styles/LoginModal.module.scss";

function LoginModal({ closeLoginModal }) {
    return(
        <form className={styles.logCon} aria-label="로그인 폼 제출">
            <button type="button" onClick={closeLoginModal} className={styles.cancelBtn} aria-label="취소 버튼">
                    X
            </button>

            <fieldset className={styles.fieldCon}>
                <legend className={styles.cate}>로그인</legend>

                {/* 이메일 입력 */}
                <label htmlFor="email" className={styles.inputLabel}>이메일</label>
                <input 
                    className={styles.email}
                    type="text" 
                    name="email" 
                    id="email" 
                    required 
                />

                {/* 비밀번호 입력 */}
                <label htmlFor="password" className={styles.inputLabel}>비밀번호</label>
                <input 
                    className={styles.pass}
                    type="password"
                    name="password"
                    id="password"
                    required
                />
                <span className={styles.passFind} aria-label="비밀번호 찾기 버튼">비밀번호를 잊으셨습니까?</span>

                {/* 로그인 유지 체크박스 */}
                <label htmlFor="checkbox" className={styles.logMove}>
                <input 
                    className={styles.checkBox}
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                />
                이메일 저장
                </label>
                {/* 로그인 버튼 */}
                <button type="submit" className={styles.logBtn}>로그인</button>

            </fieldset>
        </form>
    );
}

export default LoginModal;