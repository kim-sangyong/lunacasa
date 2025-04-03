import React from "react";
import {Helmet} from "react-helmet-async";
import BedData from "../../data/BedData";
import styles from "../../assets/styles/BedDetailPage/MemoryFoam.module.scss";
import Clean from "../../assets/images/DetailImages/MemoryFoam/Clean.png";
import BackToTop from "../../components/ScrollButton";
import TestReport from "../../assets/images/DetailImages/LatexBed/TestReport.jpg";
import Culling from "../../assets/images/DetailImages/MemoryFoam/Culling.png";
import Robust from "../../assets/images/DetailImages/MemoryFoam/Robust.png";

const MemoryFoam = () =>  {
    return(
        <>
            <Helmet>
                <title>프리미엄 메모리폼 침대 - 루나카사</title>
                <meta name="description" content="루나카사의 프리미엄 메모리폼 침대를 만나보세요."/>
                <meta name="keywords" content="루나카사 가구, 루나카사 인테리어, 루나카사 프리미엄 메모리폼 침대, 
                LUNACASA 가구, LUNACASA 인테리어, LUNACASA 프리미엄 메모리폼 침대, 유럽 가구, 이태리 가구, 편안한 가구, 합리적인 가격, 
                저렴한 가격, 유행, 앤틱한 침대, 오래쓰는 침대, 침대 추천, 가구 추천, 홈 데코, 홈 가구, 홈 인테리어, 지인 추천" />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}
                                    
                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 프리미엄 메모리폼 침대." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="프리미엄 메모리폼 침대를 만나보세요. 차별화된 침대를 만나게 됩니다."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                <meta meta property="og:url" content="https://raw.githubusercontent.com/kim-sangyong/test/main/PremiumMemoryFoamBed.png"/>

                {/* 트위터 */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LUNACASA - 프리미엄 메모리폼 침대." />
                <meta name="twitter:description" content="프리미엄 메모리폼 침대를 만나보세요. 차별화된 침대를 만나게 됩니다." />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/kim-sangyong/test/main/PremiumMemoryFoamBed.png" />
            </Helmet>

            <section aria-label="프리미엄 메모리폼 침대 구매 정보" className={styles.sectionCon}>
                <form>
                    <article className={styles.detail}>
                        <div className={styles.imageContainer}>
                            <img src={BedData[4].img} alt="프리미엄 메모리폼 침대" loading="lazy" className={styles.mainImg}/>
                        </div>

                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>{BedData[4].name}</h2>
                            <del className={styles.delSize}>{BedData[4].originalPrice.toLocaleString()} 원</del>
                                <span className={styles.spanSize}>{BedData[4].salePrice.toLocaleString()} 원</span>

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
                                싱글 (150 x 220cm)
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

        <main aria-label="프리미엄 메모리폼 침대 상세정보" className={styles.mainCon}>
            {/* 고무나무 comment 섹션 */}
            <section aria-label="제품설명" className={styles.box}>
                <p className={styles.boxSecon}>COMMENT</p>
            </section>
                <article className={styles.commentCon}>
                        <p className={styles.comment}>
                            체중을 고르게 분산하여 척추와 허리를 잘 지탱해 줍니다.<br />
                            허리 통증이 있는 사람들에게 효과적입니다.<br />
                            어깨, 팔꿈치, 갈비뼈, 엉덩이 등 균등한 압력을 느끼게 해줍니다.
                        </p>
                </article>
                
            <section className={styles.boxCon}>
                <div className={styles.mainBox}>
                    <div className={styles.cleanTitle}>
                        <span className={styles.sleep}>수면건강</span>
                            <p className={styles.sleepText}> 
                                메모리폼 침대를 사용했을때의 수면 만족도는 80% 올라갑니다.<br />
                                LUNACASA가 직접 개발한 메모리폼 침대 고객님들께 제공합니다.
                            </p>
                    </div>
                        <img src={Clean} alt="" loading="lazy" className={styles.cleanImg}/>
                            <p className={styles.sleepDetail}>
                                수면 시 불편한 원인을 파악하고 깐깐한 검사를 통해<br />
                                허리 통증률을 90% 낮춘 메모리폼 침대입니다.<br />
                                고객님들의 만족스러운 수면과 삶의 질을 올리기 위해 노력하였습니다.
                            </p>
                <div className={styles.flex}>
                    <div className={styles.secondBox}>
                        <p className={styles.flexTitle}>LUNACASA만의 공법</p>
                        <p className={styles.flexText}>
                            전통적인 메모리폼은 열 문제로 인해서 일부 사용자에게 덥다는<br /> 
                            평가를 받았으며 이는 메모리폼의 단점으로 알려져 있습니다.<br />
                            이러한 문제를 해결하기 위해 LUNACA만의 특별한<br /> 
                            공법으로 제작하여 메모리폼의 단점을 극복하였습니다.
                        </p>
                    </div>
                </div>
                    <p className={styles.cusReview}>실제 사용 후기</p>
                <div className={styles.justifyCon}>
                    <div className={styles.colCon}>
                        {/* 첫번째 박스 */}
                        <div className={styles.borderBox}>
                            <p className={styles.people}>xx준 님</p>
                            <p className={styles.peopleText}>허리가 너무 편해요!</p>
                        </div>
                        {/* 두번째 박스 */}
                        <div className={styles.borderBox}>
                            <p className={styles.people}>xx지 님</p>
                            <p className={styles.peopleText}>가격이 합리적이에요!</p>
                        </div>
                        {/* 세번째 박스 */}
                        <div className={styles.rowCon}>
                            <div className={styles.borderBoxTwo}>
                                <p className={styles.people}>xx윤 님</p>
                                <p className={styles.peopleText}>통기성이 좋아요!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            <section className={styles.threeCon}>
                <div className={styles.threeBox}>
                    <p className={styles.threeText}>LUNACASA만의 새로운 메모리폼 <br />
                        QUALITY SYSTEM <br />
                        해답을 찾다.</p>
                </div>
                    <div className={styles.rowPCon}>
                        <div className={styles.rowPBox}>
                            <div className={styles.rowP}>
                                <p className={styles.rowPTitle}>KULLING</p> <img src={Culling} alt="" loading="lazy" className={styles.rowImg}/>
                            </div>
                                <p className={styles.rowPText}>에어쿨링 시스템으로 열 발산과<br /> 통기성을 증가</p>
                        </div>
                        <div className={styles.rowPBox}>
                            <div className={styles.rowP}>
                                <p className={styles.rowPTitle}>ROBUST</p> <img src={Robust} alt="" loading="lazy" className={styles.rowImg}/>
                            </div>
                                <p className={styles.rowPText}>메모리폼의 단점인 견고함을 만들다</p>
                        </div>
                    </div>
            </section>
            
            {/* 인체 적용 시험 보고서 */}
            <section className={styles.reportSectionCon}> {/* 부모로 justify주기 위해 만듬 */}
                <div className={styles.reportCon}>
                        <div className={styles.reportBox}>
                            <img src={TestReport} alt="인체 적용 시험 보고서" className={styles.reportImg} loading="lazy"/>
                                <p className={styles.reportText}>
                                    연구진들의 까다로운<br />
                                    인체적용 시험을 통해 만든<br/>
                                    LUNACASA만의 침대입니다.
                                </p>
                        </div>
                </div>
            </section>
                {/* 위로 올라가기 버튼 컴포넌트 */}
                <BackToTop />
        </main>

        </>
    );
}

export default MemoryFoam;