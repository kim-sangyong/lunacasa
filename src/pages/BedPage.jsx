import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "../assets/styles/BedPage.module.scss";
import BedData from "../data/BedData.js";
import BackToTop from "../components/ScrollButton.jsx";


function BedPage(){
    return(
        <>
        <Helmet>
                <title>침대</title>
                <meta name="description" content="루나카사 - LUNACASA에서 고급 침대를 만나보세요 절찬 판매중인 프리미엄 침대."/>
                <meta name="keywords" content="가구, 인테리어, 침대, 소파." />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}

                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 고급 침대." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="감각적인 고급 침대를 만나보세요. LUNACASA의 독보적인 침대."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                {/* <meta meta property="og:url" content="https://example.com"/> */}
             </Helmet>
        <section className={styles.container} aria-label="침대 상품 목록">
            <article className={styles.product}>
                <Link to="/latex-bed-detail-page">
                    <img src={BedData[0].img} alt="라텍스 침대"/>
                </Link>
                <h2 className={styles.title}>{BedData[0].name}</h2>
                    <div className={styles.priceContainer}>
                        <del className={styles.priceDel}>{BedData[0].originalPrice.toLocaleString()} 원</del>
                            <div className={styles.sale}>
                                <span>{BedData[0].salePrice.toLocaleString()} 원</span>
                                <span>  -10%</span>
                            </div>
                    </div>
            </article>
            
            <article className={styles.product}>
                <Link to="/super-single-bed-detail-page">
                    <img src={BedData[1].img} alt="슈퍼 싱글 침대"/>
                </Link>
                <h2>{BedData[1].name}</h2>
                    <div className={styles.priceContainer}>
                        <del className={styles.priceDel}>{BedData[1].originalPrice.toLocaleString()} 원</del>
                            <div className={styles.sale}>
                                <span>{BedData[1].salePrice.toLocaleString()} 원</span>
                                <span>  -11%</span>
                            </div>
                    </div>
            </article>
            
            <article className={styles.product}>
                <Link to="/low-floor-bed-detail-page">
                    <img src={BedData[2].img} alt="저상형 침대"/>
                </Link>
                <h2>{BedData[2].name}</h2>
                    <div className={styles.priceContainer}>
                        <del className={styles.priceDel}>{BedData[2].originalPrice.toLocaleString()} 원</del>
                            <div className={styles.sale}>
                                <span>{BedData[2].salePrice.toLocaleString()} 원</span>
                                <span>  -18%</span>
                             </div>
                    </div>
            </article>

            <article className={styles.product}>
                <Link to="/fabric-bed-detail-page">
                    <img src={BedData[3].img} alt="패브릭 침대"/>
                </Link>
                <h2>{BedData[3].name}</h2>
                    <div className={styles.priceContainer}>
                        <del className={styles.priceDel}>{BedData[3].originalPrice.toLocaleString()} 원</del>
                            <div className={styles.sale}>
                                <span>{BedData[3].salePrice.toLocaleString()} 원</span>
                                <span>  -11%</span>
                            </div>
                    </div>
            </article>

            <article className={styles.product}>
                <Link to="/premium-memory-foam-bed-detail-page">
                    <img src={BedData[4].img} alt="프리미엄 메모리폼 침대"/>
                </Link>
                <h2>{BedData[4].name}</h2>
                    <div className={styles.priceContainer}>
                        <del className={styles.priceDel}>{BedData[4].originalPrice.toLocaleString()} 원</del>
                            <div className={styles.sale}>
                                <span>{BedData[4].salePrice.toLocaleString()} 원</span>
                                <span>  -10%</span>
                            </div>
                    </div>
            </article>

            <article className={styles.product}>
                <Link to="/premium-latex-bed-detail-page">
                    <img src={BedData[5].img} alt="프리미엄 라텍스 침대"/>
                </Link>
                <h2>{BedData[5].name}</h2>
                    <div className={styles.priceContainer}>
                        <del className={styles.priceDel}>{BedData[5].originalPrice.toLocaleString()} 원</del>
                            <div className={styles.sale}>
                                <span>{BedData[5].salePrice.toLocaleString()} 원</span>
                                <span>  -10%</span>
                             </div>
                    </div>
            </article>
            {/* 위로 올라가기 버튼 컴포넌트 */}
            <BackToTop />
        </section>
        </>
    );
}

export default BedPage;