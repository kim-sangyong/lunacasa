import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "../assets/styles/CartPage.module.scss";
import Cartpage from "../assets/images/Header-img/CartPage.svg";
import BackToTop from "../components/ScrollButton.jsx";

function CartPage(){
    return(
        <>
        <Helmet>
            <title>장바구니 | LUNACASA</title>
            <meta name="description" content="루나카사 - LUNACASA 장바구니에서 선택한 상품을 확인하고 간편하게 결제하세요."/>
                <meta name="keywords" content="장바구니, LUNACASA, 쇼핑, 구매, 가구, 인테리어, 침대, 소파." />
                {/* <meta http-equiv="Copyright" content="LUNACASA" />  푸터에 추가함*/} 
                <meta name="robots" content="index, follow" /> {/* 장바구니는 개인화된 페이지 이므로 노인덱스, 노팔로우로 설정*/}
        
                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 장바구니." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                 <meta property="og:description" content="선택한 제품들을 확인하고 간편하게 결제하세요."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                {/* <meta meta property="og:url" content="https://example.com"/> */}
        </Helmet>
            <section className={styles.cartCon} aria-label="장바구니">
                <h1 className={styles.cartTitle}>장바구니</h1>
                    <img src={Cartpage} alt= "" className={styles.cartSvg}/>
                        <p className={styles.cartText}>고객님의 장바구니가 비어있습니다.</p>
                {/* 위로 올라가기 버튼 컴포넌트 */}
                <BackToTop />
            </section>
        </>
        
    );
}

export default CartPage;