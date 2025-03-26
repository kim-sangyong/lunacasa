import React from "react";
import {Helmet} from "react-helmet-async";
import SofaData from "../../data/SofaData.js";
import styles from "../../assets/styles/SofaDetailPage/MultiRoundSofa.module.scss";
import SofaHalf from "../../assets/images/SofaDetailImage/MultiRoundSofa/SofaHalf.jpg";
import SofaWater from "../../assets/images/SofaDetailImage/MultiRoundSofa/SofaWater.jpg";
import Fabric from "../../assets/images/SofaDetailImage/MultiRoundSofa/Fabric.jpg";
import BackToTop from "../../components/ScrollButton";
import TestReport from "../../assets/images/DetailImages/LatexBed/TestReport.jpg";

function MultiRoundSofa() {
    return(
        <>
            <Helmet>
                <title>다인용 라운드 소파 - 루나카사</title>
                <meta name="description" content="루나카사만의 패브릭 소재의 다인용 라운드 소파입니다."/>
                <meta name="keywords" content="루나카사 가구, 루나카사 인테리어, 루나카사 다인용 라운드 소파, 
                LUNACASA 가구, LUNACASA 인테리어, LUNACASA 다인용 라운드 소파, LUNACASA 소파, 유럽 가구, 이태리 가구, 
                편안한 가구, 합리적인 가격, 저렴한 가격, 유행, 앤틱한 소파, 오래쓰는 소파, 소파 추천, 가구 추천, 
                홈 데코, 홈 가구, 홈 인테리어, 지인 추천" />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}
                    
                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 다인용 라운드 소파." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="넓은 다인용 라운드 소파 추천합니다."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                <meta meta property="og:url" content="https://raw.githubusercontent.com/kim-sangyong/test/main/RoundSofaRow.png"/>

                {/* 트위터 */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LUNACASA - 다인용 라운드 소파." />
                <meta name="twitter:description" content="넓은 다인용 라운드 소파 추천합니다." />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/kim-sangyong/test/main/RoundSofaRow.png" />
            </Helmet>

            <section aria-label="다인용 라운드 소파 구매 정보" className={styles.sectionCon}>
                <form>
                    <article className={styles.detail}>
                        <div className={styles.imageContainer}>
                            <img src={SofaData[3].img} alt="다인용 라운드 소파" loading="lazy" className={styles.mainImg}/>
                        </div>

                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>{SofaData[3].name}</h2>
                            <del className={styles.delSize}>{SofaData[3].originalPrice.toLocaleString()} 원</del>
                                <span className={styles.spanSize}>{SofaData[3].salePrice.toLocaleString()} 원</span>

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
                                가로 2570 x 세로 680 x 높이 590mm  
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

            <main aria-label="다인용 라운드 소파 상세정보" className={styles.mainCon}>
                {/* 패브릭 침대 comment 섹션 */}
                <section aria-label="제품설명" className={styles.box}>
                    <p className={styles.boxSecon}>COMMENT</p>
                </section>
                    <article className={styles.commentCon}>
                        <p className={styles.comment}>
                            패브릭, 극세사가 합쳐진 특별한 재질로 만들어진 소파입니다.<br />
                            고급스러움이 물씬 느껴지고 보온성이 좋은 소파입니다.<br />
                            물이 스며들지 않고 흐르는 놀라운 경험을 할 수 있는 젖지 않는 소파입니다.
                        </p>
                    </article>

                <section className={styles.sofaHalfCon}>
                    <img src={SofaHalf} alt="" loading="lazy" className={styles.sofaHalfImg}/>
                        <div className={styles.textCon}>
                            <span className={styles.sofaHalfSpan}>
                                패브릭과 극세사가 합쳐진 기능성 재질
                            </span>
                            <p className={styles.sofaHalfText}>
                                섬유 안정성 평가 합격 피부에 안심
                            </p>
                        </div>
                </section>

                <section className={styles.lifeCon}>
                    <p className={styles.lifeText}>
                        <span className={styles.lifeSpan}>
                        라이프 스타일에</span><br />
                        가구 배치를 해보세요
                    </p>
                        <img src={SofaData[3].img} alt="" loading="lazy" className={styles.lifeImg}/>
                            <p className={styles.lifeEx}>
                                가구에 맞춰 디자인하는 것이 아닌<br />
                                라이프 스타일에 맞게 배치를 하면<br />
                                또 다른 느낌을 가져옵니다.
                            </p>
                </section>

                <section className={styles.sofaWaterCon}>
                    <p className={styles.sofaWaterText}>
                        <span className={styles.sofaWaterSpan}>
                            방수효과</span><br />
                            삶의 질을 높입니다
                    </p>
                        <img src={SofaWater} alt="" loading="lazy" className={styles.sofaWaterImg}/>
                            <p className={styles.sofaWaterEx}>
                                패브릭과 극세사가 혼합된 재질로 물이 스며들지 않고<br />
                                형태를 그대로 유하며 휴지로 닦아주기만 하면 됩니다.
                            </p>
                </section>

                <section className={styles.fabricCon}>
                    <p className={styles.fabricText}>
                        패브릭 극세사의 혼합 원단
                    </p>
                        <img  src={Fabric} alt="" loading="lazy" className={styles.fabricImg}/>
                            <p className={styles.fabricEx}>
                                방수 기능은 물론 보온성까지 완벽한 혼합 원단<br />
                                마찰에 강하고 보풀이 거의 없어 오랫동안 사용 가능합니다.
                            </p>
                </section>

                <section className={styles.lastSectionCon}>
                    <p className={styles.lastSectionText}>
                        혁신적인 원단의 소파
                    </p>
                        <img src={SofaData[3].img} alt="" loading="lazy" className={styles.lastSectionImg}/>
                            <p className={styles.lastSectionEx}>
                                하루 종일 뒹굴고 싶은 포근함을<br />
                            <span className={styles.lastSectionSpan}>LUNACASA</span>가 선물합니다.
                            </p>
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

export default MultiRoundSofa;