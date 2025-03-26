import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styles from "../assets/styles/SofaPage.module.scss";
import SofaData from "../data/SofaData";
import BackToTop from "../components/ScrollButton.jsx";

function SofaPage(){
    return(
        <>
        <Helmet>
                <title>소파 - 루나카사</title>
                 <meta name="description" content="루나카사 - LUNACASA에서 고급 소파를 만나보세요. 고급의 패브릭 소파 판매 | 
                 모던한 가구, 저럼한 가구, 인테리어 가구, 홈 인테리어 가구 "/>
                <meta name="keywords" content="루나카사 가구, 루나카사 인테리어, 루나카사 침대, 루나카사 소파, 
                북유럽 소파, 이태리 소파, 유럽 소파, 편한 소파, 디테일 소파, 소파 디자인, 앤틱한 소파, 패브릭 소파,
                천연 솜 소파, 다인용 소파, 3인용 소파, 저렴한 소파, 합리적인 소파, 쇼핑몰, 소파 쇼핑몰, 가구 쇼핑몰, 
                인테리어 소파, 홈 가구 소파, 공간 활용 소파. 루나카사 소파, 루나카사 저렴한 소파, 루나카사 합리적인 소파,
                루나카사 디자인, 루나카사 앤틱함, 루나카사 가구 쇼핑몰, 루나카사 쇼핑몰" />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}
        
                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 고급 소파." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                 <meta property="og:description" content="감각적인 고급 소파를 만나보세요. LUNACASA의 프리미엄 소파."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                <meta meta property="og:url" content="https://raw.githubusercontent.com/kim-sangyong/test/main/PremiumVintageSofa.png"/>

                {/* 트위터 */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LUNACASA - 고급 소파." />
                <meta name="twitter:description" content="감각적인 고급 소파를 만나보세요. LUNACASA의 프리미엄 소파." />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/kim-sangyong/test/main/PremiumVintageSofa.png" />
        </Helmet>
            <section className={styles.container} aria-label="소파 상품 목록">
                <article className={styles.product}>
                    <Link to="/fabric-sofa-detail-page">
                        <img src={SofaData[0].img} alt="3인 패브릭 소파" loading="lazy"/>
                    </Link>
                    <h2>{SofaData[0].name}</h2>
                        <div className={styles.priceContainer}>
                            <del className={styles.priceDel}>{SofaData[0].originalPrice.toLocaleString()} 원</del>
                                <div className={styles.sale}>
                                    <span>{SofaData[0].salePrice.toLocaleString()} 원</span>
                                    <span>  -11%</span>
                                </div>
                    </div>
                </article>
    
                <article className={styles.product}>
                    <Link to="/cow-leather-sofa-detail-page">
                        <img src={SofaData[1].img} alt="3인 소가죽 소파" loading="lazy"/>
                    </Link>
                    <h2>{SofaData[1].name}</h2>
                        <div className={styles.priceContainer}>
                            <del className={styles.priceDel}>{SofaData[1].originalPrice.toLocaleString()} 원</del>
                                <div className={styles.sale}>
                                    <span>{SofaData[1].salePrice.toLocaleString()} 원</span>
                                    <span>  -16%</span>
                                </div>
                        </div>
                </article>
                    
                <article className={styles.product}>
                    <Link to="/micro-fiber-sofa-detail-page">
                        <img src={SofaData[2].img} alt="2인 극세사 소파" loading="lazy"/>
                    </Link>
                    <h2>{SofaData[2].name}</h2>
                        <div className={styles.priceContainer}>
                            <del className={styles.priceDel}>{SofaData[2].originalPrice.toLocaleString()} 원</del>
                                <div className={styles.sale}>
                                    <span>{SofaData[2].salePrice.toLocaleString()} 원</span>
                                    <span>  -13%</span>
                                </div>
                        </div>
                </article>
    
                <article className={styles.product}>
                    <Link to="/round-sofa-detail-page">
                        <img src={SofaData[3].img} alt="다인용 라운드 소파" loading="lazy"/>
                    </Link>
                    <h2>{SofaData[3].name}</h2>
                        <div className={styles.priceContainer}>
                            <del className={styles.priceDel}>{SofaData[3].originalPrice.toLocaleString()} 원</del>
                                <div className={styles.sale}>
                                    <span>{SofaData[3].salePrice.toLocaleString()} 원</span>
                                    <span>  -14%</span>
                                </div>
                        </div>
                </article>
    
                <article className={styles.product}>
                    <Link to="/italian-vintage-sofa-detail-page">
                        <img src={SofaData[4].img} alt="이태리 빈티지 소파" loading="lazy"/>
                    </Link>
                    <h2>{SofaData[4].name}</h2>
                        <div className={styles.priceContainer}>
                            <del className={styles.priceDel}>{SofaData[4].originalPrice.toLocaleString()} 원</del>
                                <div className={styles.sale}>
                                    <span>{SofaData[4].salePrice.toLocaleString()} 원</span>
                                    <span>   - 6%</span>
                                </div>
                        </div>
                </article>
    
                <article className={styles.product}>
                    <Link to="/premium-vintage-sofa-detail-page">
                        <img src={SofaData[5].img} alt="프리미엄 빈티지 소파" loading="lazy"/>
                    </Link>
                    <h2>{SofaData[5].name}</h2>
                        <div className={styles.priceContainer}>
                            <del className={styles.priceDel}>{SofaData[5].originalPrice.toLocaleString()} 원</del>
                                <div className={styles.sale}>
                                    <span>{SofaData[5].salePrice.toLocaleString()} 원</span>
                                    <span>  -11%</span>
                                </div>
                        </div>
                </article>
                {/* 위로 올라가기 버튼 컴포넌트 */}
                <BackToTop />
            </section>
        </>
        );
    }

export default SofaPage;