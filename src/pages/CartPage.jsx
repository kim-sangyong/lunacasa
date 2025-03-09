import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "../assets/styles/CartPage.module.scss";
import Cartpage from "../assets/images/Header-img/CartPage.svg";
import BackToTop from "../components/ScrollButton.jsx";

function CartPage(){
    return(
        <>
        <Helmet>
            <title>장바구니 - 루나카사</title>
            <meta name="description" content="루나카사 | LUNACASA 장바구니에서 선택한 상품을 확인하고 간편하게 결제하세요."/>
                <meta name="keywords" content="루나카사 장바구니, LUNACASA, 루나카사 쇼핑, 구매, 루나카사 가구, 루나카사 인테리어, 
                루나카사 침대, 루나카사 소파, 가구 사이트, 가구 쇼핑몰, 쇼핑몰, 앤틱한 가구, 디자인 가구, 저렴한 가구, 이태리 가구, 유럽 가구, 의자, 침대, 소파, 
                북유럽 스타일, 이태리 스타일, 앤틱한 스타일, 고급 스타일, 홈 가구, 3인용 가구, 다인용 가구, 카페 가구,
                톤 가구, 업소용 가구, 매장 가구, 사무용 가구, 컨셉 가구, 예쁜 의자, 예쁜 침대, 예쁜 소파, 편한 의자, 편한 침대, 편한 소파,
                편한 가구, 공간미 가구, 생활 가구, 홈 데코, 홈 인테리어, 아파트 가구, 주택 가구, 전원 주택 가구, 원룸 가구, 의자 추천,
                침대 추천, 소파 추천, 가구 추천, 좋은 가구, 오래쓰는 가구" />
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
                <meta meta property="og:url" content="https://kim-sangyong.github.io/lunacasa/cartPage"/>
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