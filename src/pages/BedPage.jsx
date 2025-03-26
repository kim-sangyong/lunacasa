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
                <title>침대 - 루나카사</title>
                <meta name="description" content="루나카사 - LUNACASA에서 고급 침대를 만나보세요 절찬 판매중인 프리미엄 침대 | 
                 모던한 가구, 저럼한 가구, 인테리어 가구, 홈 인테리어 가구"/>
                <meta name="keywords" content="루나카사 가구, 루나카사 인테리어, 루나카사 침대, 루나카사 침대 인테리어,
                침대 추천, 인테리어, 앤틱한 침대, 편한 침대, 저렴한 침대, 모던 가구, 저렴한 가구, 
                넓은 침대, 1인용 침대, 편한 침대, 푹신한 침대, 라텍스 침대, 패브릭 침대, 디자인 침대, 
                외국 느낌 침대, 북유럽 침대, 이태리 침대, 북유럽 디자인, 이태리 디자인, 외국 느낌 디자인, 가구 쇼핑몰, 
                성인용 침대, 고등학생용 침대, 어린이용 침대, 루나카사 침대, 루나카사 저렴한 침대, 루나카사 합리적인 침대,
                루나카사 디자인, 루나카사 앤틱함, 루나카사 가구 쇼핑몰, 루나카사 쇼핑몰" />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}

                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 고급 침대." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="감각적인 고급 침대를 만나보세요. 루나카사-LUNACASA의 독보적인 침대."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                <meta meta property="og:image" content="https://raw.githubusercontent.com/kim-sangyong/test/main/PremiumMemoryFoamBed.png"/>
                {/* 공유할 URL을 설정합니다. */}
                <meta meta property="og:url" content="https://kim-sangyong.github.io/lunacasa/bed"/>

                {/* 트위터 */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LUNACASA - 고급 침대." />
                <meta name="twitter:description" content="감각적인 고급 침대를 만나보세요. 루나카사-LUNACASA의 독보적인 침대." />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/kim-sangyong/test/main/PremiumMemoryFoamBed.png" />
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