import React from "react";
import styles from "../assets/styles/SignupModal.module.scss";

function SignupModal({ closeModal }) {
    return(
        <form className={styles.signupCon} aria-label="회원가입 폼 제출">
            <button type="button" onClick={closeModal} className={styles.cancelBtn} aria-label="취소 버튼">
                    X
            </button>
            
            <fieldset className={styles.secondCon}>
                <legend className={styles.cate}>회원가입</legend>
                {/* 이름 입력 */}
                <label htmlFor="username">이름</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className={styles.labelInput}
                    required 
                />  {/* required 필수로 입력되야함을 지정 브라우저에서 자동으로 경고 띄움*/}

                {/* 이메일 입력 */}
                <label htmlFor="email">이메일</label>
                <input 
                    type="email" 
                    id="email"
                    name="email" 
                    className={styles.labelInput}
                    required 
                />

                {/* 비밀번호 입력 */}
                <label htmlFor="password">비밀번호</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    className={styles.labelInput}
                    required 
                />

                {/* 비밀번호 확인 입력 */}
                <label htmlFor="confirmPassword">비밀번호 확인</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    className={styles.labelInput}
                    required 
                />

                <button type="submit" className={styles.subBtn}>계정 만들기</button>
            </fieldset>
        </form>
    );
}

export default SignupModal;