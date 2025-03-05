import React from 'react';
import { Link } from 'react-router-dom';
import Lunacasa from "../assets/images/Header-img/LUNACASA.png";
import HamburgerMenu from "../assets/images/Header-img/MenuHamburger.svg";
import BlackUserPlus from "../assets/images/Header-img/BlackUserPlus.svg";
import BlackLogin from "../assets/images/Header-img/BlackLogin.svg";
import BlackCart  from "../assets/images/Header-img/BlackCart.svg";
import styles from "../assets/styles/Header.module.scss";
import useHeader from "../hooks/useHeader";

//props로 useModal 로직 전달
function Header({ openModal, openLoginModal }){

    const {
        searchTerm,
        isMenuOpen,
        // isHovered,
        OnChange,
        handleSubmit,
        toggleMenu,
        handleMouseEnter,
        handleMouseLeave,
      } = useHeader();


    return(
        <header className={styles.headerMove}>
            {/* 로고 및 햄버거 메뉴 */}
            <img
                src={HamburgerMenu}
                alt="메뉴 버튼"
                role="button"
                className={styles.menu}
                onClick={toggleMenu}
                tabIndex="0"
            />

            {/* 메뉴가 열리면 보이도록 */}
            {isMenuOpen && (
                <nav aria-label="메뉴 버튼"
                    className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ""}`}
                    onMouseEnter={handleMouseEnter}  // 메뉴 영역에 마우스가 들어가면
                    onMouseLeave={handleMouseLeave}  // 메뉴 영역에서 마우스가 나가면
                >
                    <ul className={styles.navSel}>
                        <li><Link to="/bedPage">침대</Link></li>
                        <li><Link to="/sofaPage">소파</Link></li>
                    </ul>
                </nav>
            )}

            <Link to="/" className={styles.homeBtn}>
                <img src={Lunacasa} alt="홈페이지 로고 버튼" role="button" className={styles.mainLogo} />
            </Link>
        
            {/* 검색 폼 */}
            <form onSubmit={handleSubmit} className={styles.searchMove} aria-label="검색 결과 폼 제출">
                <label htmlFor="searchInput" className={styles.searchLabel}>검색</label>
                <input
                    className={styles.searchInput}
                    id="searchInput"
                    name="searchTerm"
                    type="text"
                    value={searchTerm}
                    onChange={OnChange}
                    placeholder="검색"
                />
            </form>
            

            {/* 회원가입, 로그인, 장바구니 */}
            <div className={styles.memberContainer}>
                <div className={styles.memberAll} onClick={openModal} tabIndex="0">
                    <img src={BlackUserPlus} alt="회원가입 버튼" className={styles.memberImg}/>
                    <span role="button" aria-label="회원가입 버튼" className={styles.spanText}>회원가입</span>
                </div>
                <div className={styles.loginAll} onClick={openLoginModal} tabIndex="0">
                    <img src={BlackLogin} alt="로그인 버튼" className={styles.memberImg}/>
                    <span role="button" aria-label="로그인 버튼" className={styles.spanText}>로그인</span>
                </div>
                
                    <Link to="/cartPage" className={styles.cartBtn} tabIndex="0">
                        <img src={BlackCart} alt="장바구니 버튼" className={styles.memberImg}/>
                        <span role="button" aria-label="장바구니 이동 버튼" className={styles.spanText}>장바구니</span>
                    </Link>
            </div>
        </header>
    );
}


export default Header;