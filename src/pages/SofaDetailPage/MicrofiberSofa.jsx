import React from "react";
import {Helmet} from "react-helmet-async";
import SofaData from "../../data/SofaData.js";
import styles from "../../assets/styles/SofaDetailPage/MicrofiberSofa.module.scss";
import Microfiber from "../../assets/images/SofaDetailImage/MicrofiberSofa/Microfiber.png";
import CottonWool from "../../assets/images/SofaDetailImage/CowLeatherSofa/CottonWool.jpg";
import MicrofiberHalf from "../../assets/images/SofaDetailImage/MicrofiberSofa/MicrofiberHalf.jpg";
import Sun from "../../assets/images/SofaDetailImage/MicrofiberSofa/Sun.png";
import Wind from "../../assets/images/SofaDetailImage/MicrofiberSofa/Wind.png";
import BackToTop from "../../components/ScrollButton";
import TestReport from "../../assets/images/DetailImages/LatexBed/TestReport.jpg";

function MicrofiberSofa() {
    return(
        <>
            <Helmet>
                <title>2인 극세사 소파 - 루나카사</title>
                <meta name="description" content="루나카사의 기본적이면서 아름다운 극세사 소파."/>
                <meta name="keywords" content="루나카사 가구, 루나카사 인테리어, 루나카사 2인 극세사 소파, LUNACASA 가구, 
                LUNACASA 인테리어, LUNACASA 2인 극세사 소파, LUNACASA 소파, 유럽 가구, 이태리 가구, 편안한 가구, 합리적인 가격, 
                저렴한 가격, 유행, 앤틱한 소파, 오래쓰는 소파, 소파 추천, 가구 추천, 홈 데코, 홈 가구, 홈 인테리어, 지인 추천 " />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}
                                
                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 2인 극세사 소파." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="2인 극세사 소파를 만나보세요."/>    
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                <meta meta property="og:url" content="https://raw.githubusercontent.com/kim-sangyong/test/main/MicrofiberSofa.png"/>

                {/* 트위터 */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LUNACASA - 2인 극세사 소파." />
                <meta name="twitter:description" content="2인 극세사 소파를 만나보세요." />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/kim-sangyong/test/main/MicrofiberSofa.png" />
            </Helmet>

            <section aria-label="2인 극세사 소파 구매 정보" className={styles.sectionCon}>
                <form>
                    <article className={styles.detail}>
                        <div className={styles.imageContainer}>
                            <img src={SofaData[2].img} alt="2인 극세사 소파" loading="lazy" className={styles.mainImg}/>
                        </div>

                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>{SofaData[2].name}</h2>
                            <del className={styles.delSize}>{SofaData[2].originalPrice.toLocaleString()} 원</del>
                                <span className={styles.spanSize}>{SofaData[2].salePrice.toLocaleString()} 원</span>

                    <aside className={styles.asideMove}>
                        <h3 className={styles.secondName}>Size</h3>
                            <label htmlFor="SingleSize" className={styles.size}>
                                <input
                                    type="checkbox"
                                    id="SingleSize"
                                    name="size"
                                    value="single"
                                    required
                                    className={styles.checkBoxMove}
                                />
                                가로 2280 x 세로 780 x 높이 620mm  
                            </label>
                    </aside>
                        <button type="submit" className={styles.cartBtn}>장바구니에 추가</button>
                    </div>
                    </article>
                </form>
            </section>
            <section className={styles.list}>
                <span className={styles.information}>상세정보</span>
                <span className={styles.review}>리뷰</span>
                <span className={styles.question}>Q&A</span>
            </section>
            {/* 메인 시작 */}
            <main aria-label="2인 극세사 소파 상세정보" className={styles.mainCon}>
                {/* 패브릭 침대 comment 섹션 */}
                <section aria-label="제품설명" className={styles.box}>
                    <p className={styles.boxSecon}>COMMENT</p>
                </section>
                    <article className={styles.commentCon}>
                        <p className={styles.comment}>
                            최고의 부드러움과 푹신하고 벨벳 같은 질감으로<br />
                            피부에 고급스러운 느낌을 선사합니다.
                        </p>
                    </article>

                <section className={styles.microCon}>
                    <img src={Microfiber} alt="극세사 원단" loading="lazy" className={styles.microImg}/>
                        <p className={styles.microText}>
                            최고급 극세사 원단을 사용하고 더 멋스러운 느낌을 주기 위해<br />
                            이중 공법으로 겉에 털 원단도 사용하였습니다.
                        </p>
                </section>

                <section className={styles.imagesCon}>
                    <div className={styles.imagesRow}> 
                        <div className={styles.cottonBox}>
                            <img src={CottonWool} alt="목화 솜" loading="lazy" className={styles.cottonWoolImg}/>
                        </div>
                            <img src={MicrofiberHalf} alt="" loading="lazy" className={styles.microHalfImg}/>
                    </div>
                        <p className={styles.imagesText}>
                            천연 목화솜을 사용하여 가볍고 보온성, 통기성이 우수하며<br />
                            최상의 푹신함을 자랑합니다.
                        </p>
                </section>

                <section className={styles.lastSection}>
                    <div className={styles.lastSectionBox}>
                        <div className={styles.lastSectionRow}>
                            <img src={Sun} alt="" loading="lazy" className={styles.sun}/>
                                <p className={styles.sunText}>햇빛에 변색 없음</p>
                            <img src={Wind} alt="" loading="lazy" className={styles.wind}/>
                                <p className={styles.windText}>탁월한 보온성</p>
                        </div>
                            <div className={styles.lastSectionCol}>
                                <img src={SofaData[2].img} alt="" loading="lazy" className={styles.lastImg}/>
                                    <p className={styles.lastText}>보온성이 강한 고밀도 극세사 LUNACASA가 추천합니다.</p>
                            </div>
                    </div>
                </section>
                {/* 인체 적용 시험 보고서 */}
                <section className={styles.reportCon}>
                    <div className={styles.reportBox}>
                        <img src={TestReport} alt="인체 적용 시험 보고서" className={styles.reportImg} loading="lazy"/>
                            <p className={styles.reportText}>
                                연구진들의 까다로운<br />
                                인체적용 시험을 통해 만든<br/>
                                LUNACASA만의 침대입니다.
                            </p>
                    </div>
                </section>
                {/* 위로 올라가기 버튼 컴포넌트 */}
                <BackToTop />
            </main>
        </>
    );
}

export default MicrofiberSofa;