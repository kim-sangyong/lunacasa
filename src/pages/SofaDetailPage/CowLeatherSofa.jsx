import React from "react"
import {Helmet} from "react-helmet-async";
import SofaData from "../../data/SofaData.js";
import styles from "../../assets/styles/SofaDetailPage/CowLeatherSofa.module.scss";
import CottonWool from "../../assets/images/SofaDetailImage/CowLeatherSofa/CottonWool.jpg";
import CowLeather from "../../assets/images/SofaDetailImage/CowLeatherSofa/CowLeather.jpg";
import Half from "../../assets/images/SofaDetailImage/CowLeatherSofa/Half.jpg";
import EllipseOne from "../../assets/images/DetailImages/LowBed/EllipseOne.png";
import EllipseTwo from "../../assets/images/DetailImages/LowBed/EllipseTwo.png";
import Line from "../../assets/images/DetailImages/LowBed/Line.png";
import BackToTop from "../../components/ScrollButton";
import TestReport from "../../assets/images/DetailImages/LatexBed/TestReport.jpg";



function CowLeatherSofa(){
    return(
        <>
            <Helmet>
                <title>3인 소가죽 소파 - 루나카사</title>
                <meta name="description" content="부드러움을 추구한 루나카사 소가죽 소파입니다."/>
                <meta name="keywords" content="루나카사 가구, 루나카사 인테리어, 루나카사 3인 소가죽 소파, 
                LUNACASA 가구, LUNACASA 인테리어, LUNACASA 3인 소가죽 소파, LUNACASA 소가죽 소파, LUNACASA 소파, 
                유럽 가구, 이태리 가구, 편안한 가구, 합리적인 가격, 
                저렴한 가격, 유행, 앤틱한 소파, 오래쓰는 소파, 소파 추천, 가구 추천, 홈 데코, 홈 가구, 홈 인테리어, 지인 추천" />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}
                    
                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 3인 소가죽 소파." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="세련된 3인 소가죽 소파 지금 만나보세요."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                <meta meta property="og:url" content="https://raw.githubusercontent.com/kim-sangyong/test/main/CowhideSofa.png"/>

                {/* 트위터 */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LUNACASA - 3인 소가죽 소파." />
                <meta name="twitter:description" content="세련된 3인 소가죽 소파 지금 만나보세요." />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/kim-sangyong/test/main/CowhideSofa.png" />
            </Helmet>

            <section aria-label="3인 소가죽 소파 구매 정보" className={styles.sectionCon}>
                <form>
                    <article className={styles.detail}>
                        <div className={styles.imageContainer}>
                            <img src={SofaData[1].img} alt="3인 소가죽 소파" loading="lazy" className={styles.mainImg}/>
                        </div>

                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>{SofaData[1].name}</h2>
                            <del className={styles.delSize}>{SofaData[1].originalPrice.toLocaleString()} 원</del>
                                <span className={styles.spanSize}>{SofaData[1].salePrice.toLocaleString()} 원</span>

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
                                가로 2980 x 세로 980 x 높이 810mm  
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

            <main aria-label="3인 소가죽 소파 상세정보" className={styles.mainCon}>
                {/* 패브릭 침대 comment 섹션 */}
                <section aria-label="제품설명" className={styles.box}>
                    <p className={styles.boxSecon}>COMMENT</p>
                </section>
                    <article className={styles.commentCon}>
                        <p className={styles.comment}>
                            소가죽은 자연 친화적인 소재로 고급스러운<br />
                            이미지 제공하며 자연스러운 질감이 특징입니다.<br />
                            시간의 흐름에 따라 더욱 멋지게 주름이 잡히며<br />
                            내구성이 뛰어나 긴 수명을 자랑합니다.
                        </p>
                    </article>

                <section className={styles.cowLeatherCon}>
                    <img src={CowLeather} alt="소가죽" loading="lazy" className={styles.cowLeatherImg}/>
                        <p className={styles.cowLeatherText}>
                            천연 소가죽에 특별한 공법을 사용하여 부드럽고 유연한 질감입니다.<br />
                            빈티지한 느낌을 살려 제작하였으며 사용할수록<br />
                            주름이 잡혀 더 빈티지한 디자인이 탄생하게 됩니다.
                        </p>
                </section>

                <section className={styles.imagesCon}>
                    <div className={styles.imagesRow}> 
                        <div className={styles.cottonBox}>
                            <img src={CottonWool} alt="목화 솜" loading="lazy" className={styles.cottonWoolImg}/>
                        </div>
                            <img src={Half} alt="" loading="lazy" className={styles.halfImg}/>
                    </div>
                    <p className={styles.imagesText}>
                        천연 목화솜을 사용하여 가볍고 보온성, 통기성이<br />
                        우수하며 최상의 푹신함을 자랑합니다.
                    </p>
                </section>

                <section className={styles.cowSofaCon}>
                    <img src={SofaData[1].img} alt="3인 소가죽 소파" loading="lazy" className={styles.cowSofaImg}/>
                        <p className={styles.blurText}>소가죽 소파의 푹신함은 <span className={styles.blurSpan}>Perfect</span></p>            
                </section>

                {/* 원형, 직선 박스 */}
                <div className={styles.blurBottom}>
                    <div className={styles.diagramCon}>
                        <img src={EllipseOne} alt="" loading="lazy" className={styles.ellStyle}/>
                        <img src={Line} alt="" loading="lazy" className={styles.lineStyle}/>
                        <img src={EllipseOne} alt="" loading="lazy" className={styles.ellStyle}/>
                        <img src={Line} alt="" loading="lazy" className={styles.lineStyle}/>
                        <img src={EllipseTwo} alt="" lading="lazy" className={styles.ellStyle}/>
                    </div>
                        <div className={styles.styleText}>
                            <p>Good</p><p>So Good</p><span>Perfect</span>
                        </div>
                </div>

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

export default CowLeatherSofa;