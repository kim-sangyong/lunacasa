import React from "react";
import { Helmet } from "react-helmet-async";
import SofaData from "../../data/SofaData.js";
import styles from "../../assets/styles/SofaDetailPage/FabricSofa.module.scss";
import WaterDrop from "../../assets/images/SofaDetailImage/FabricSofa/WaterDrop.jpg";
import Drop from "../../assets/images/SofaDetailImage/FabricSofa/Drop.jpg"
import BackToTop from "../../components/ScrollButton";
import TestReport from "../../assets/images/DetailImages/LatexBed/TestReport.jpg";


const FabricSofa = () => {
    return(
        <>
            <Helmet>
                <title>3인 패브릭 소파 - 루나카사</title>
                <meta name="description" content="루나카사에서 직접 만든 3인 패브릭 소파."/>
                <meta name="keywords" content="루나카사 가구, 루나카사 인테리어, 루나카사 3인 패브릭 소파, LUNACASA 가구, 
                LUNACASA 인테리어, LUNACASA 3인 패브릭 소파, LUNACASA 소파, 유럽 가구, 이태리 가구, 편안한 가구, 합리적인 가격, 
                저렴한 가격, 유행, 앤틱한 소파, 오래쓰는 소파, 소파 추천, 가구 추천, 홈 데코, 홈 가구, 홈 인테리어, 지인 추천" />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}
                    
                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 3인 패브릭 소파." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="좋은 3인 패브릭 소파를 만나보세요. LUNACASA의 야심찬 소파입니다."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                <meta meta property="og:url" content="https://raw.githubusercontent.com/kim-sangyong/test/main/FabricSofa.png"/>

                {/* 트위터 */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LUNACASA - 3인 패브릭 소파." />
                <meta name="twitter:description" content="좋은 3인 패브릭 소파를 만나보세요. LUNACASA의 야심찬 소파입니다." />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/kim-sangyong/test/main/FabricSofa.png" />
            </Helmet>
            
            <section aria-label="3인 패브릭 소파 구매 정보" className={styles.sectionCon}>
                <form>
                    <article className={styles.detail}>
                        <div className={styles.imageContainer}>
                            <img src={SofaData[0].img} alt="3인 패브릭 소파" loading="lazy" className={styles.mainImg}/>
                        </div>

                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>{SofaData[0].name}</h2>
                            <del className={styles.delSize}>{SofaData[0].originalPrice.toLocaleString()} 원</del>
                                <span className={styles.spanSize}>{SofaData[0].salePrice.toLocaleString()} 원</span>

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
                                가로 3280 x 세로 1010 x 높이 990mm  
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

            <main aria-label="3인 패브릭 소파 상세정보" className={styles.mainCon}>
                {/* 패브릭 침대 comment 섹션 */}
                <section aria-label="제품설명" className={styles.box}>
                    <p className={styles.boxSecon}>COMMENT</p>
                </section>
                    <article className={styles.commentCon}>
                        <p className={styles.comment}>
                            패브릭 소재는 부드러운 촉감을 가지고 있어 편안한 수면 환경을 제공합니다.<br />
                            먼지나 오염에 강하기 때문에 수요가 점점 높아지고 있는 침대입니다.
                        </p>
                    </article>
            
                    <section className={styles.waterDropCon}>
                        <img src={WaterDrop} alt="패브릭 섬유" className={styles.waterDropImg} loading="lazy"/>
                    </section>
                        <p className={styles.waterDropText}>
                            발수 기능성 패브릭을 사용하여 물을 쏟아 흘려 버리는 뛰어난<br />
                            발수 기능을 가져 액체 오염이 발생할 경우 쉽게 스며들지 않아<br />
                            일반 패브릭 보다 관리하기 좋습니다.
                        </p>
            
                    <section className={styles.secondCon}>
                        <div className={styles.secondTop}>
                            <p className={styles.secondText}>
                                얼룩 걱정 없는 기능성 원단으로 일상 속에서 편리한<br /> 
                                방수 효과와 엄청난 내구성을 자랑합니다.
                            </p>
                        </div>
            
                        <div className={styles.blurCon}>
                            <img src={WaterDrop} alt="" loading="lazy" className={styles.secondImg}/>
                        </div>
                            <div className={styles.secondRow}>
                                <div className={styles.boxOne}>
                                    <p> MOISTURE<br />REPELLENT</p>
                                    <p>방수</p>
                                </div>
                                    <div className={styles.boxTwo}>
                                        <p>HEAVY DUTY</p>
                                        <p>내구성</p>
                                    </div>
                            </div>
                    </section>
            
                <section className={styles.threeCon}>
                    <div className={styles.dropCon}>
                        <p>얼룩 제거는<br />
                            <span>빠른 시간 내 즉시 처리해 주세요!</span>
                        </p>
                            <img src={Drop} alt="" loading="lazy" className={styles.dropImg}/>
                    </div>
                        <div className={styles.stainCon}>
                            <div className={styles.dropBox}>
                                <div className={styles.circle}>
                                    <p>STEP 1</p>
                                </div>
                                    <p className={styles.stainText}>
                                        마른 천으로 오염 범위를<br />
                                        부드럽게 닦아주세요.
                                    </p>
                            </div>
                            <div className={styles.dropBox}>
                                <div className={styles.circle}>
                                    <p>STEP 2</p>
                                </div>  
                                    <p className={styles.stainText}>
                                        물이 묻은 천으로<br /> 
                                        닦아주세요.
                                    </p>
                            </div>
                            <div className={styles.dropBox}>
                                <div className={styles.circle}>
                                    <p>STEP 3</p>
                                </div>
                                    <p className={styles.stainText}>햇볕에 잘 말려주세요.</p>
                            </div>
                    </div>
                </section>

                <section className={styles.lastSection}>
                    <img src={SofaData[0].img} alt="" loading="lazy" className={styles.lastImg}/>
                        <div className={styles.lastBox}>
                            <p className={styles.lastTitle}>
                                LUNACASA만의 최고급 패브릭 소파<br />
                                <span>KEY POINT</span>
                            </p>
                            <p className={styles.lastText}>
                                생활방수<br />
                                견고한 내구성<br />
                                신상 원단
                            </p>
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

export default FabricSofa;