import React from "react";
import {Helmet} from "react-helmet-async";
import SofaData from "../../data/SofaData.js";
import styles from "../../assets/styles/SofaDetailPage/PremiumSofa.module.scss";
import Premium from "../../assets/images/SofaDetailImage/PremiumSofa/Premium.jpg";
import VintageLeather from "../../assets/images/SofaDetailImage/PremiumSofa/VintageLeather.png";
import Arrow from "../../assets/images/SofaDetailImage/PremiumSofa/Arrow.png";
import BackToTop from "../../components/ScrollButton";
import TestReport from "../../assets/images/DetailImages/LatexBed/TestReport.jpg";

function PremiumSofa() {
    return(
        <>
            <Helmet>
                <title>프리미엄 빈티지 소파 - 루나카사</title>
                <meta name="description" content="루나카사의 고급스러운 프리미엄 빈티지 소파."/>
                <meta name="keywords" content="루나카사 가구, 루나카사 인테리어, 루나카사 프리미엄 빈티지 소파, LUNACASA 가구, 
                LUNACASA 인테리어, LUNACASA 프리미엄 빈티지 소파, LUNACASA 소파, 유럽 가구, 이태리 가구, 편안한 가구, 합리적인 가격, 
                저렴한 가격, 유행, 앤틱한 소파, 오래쓰는 소파, 소파 추천, 가구 추천, 홈 데코, 홈 가구, 홈 인테리어, 지인 추천" />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}
                                
                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 프리미엄 빈티지 소파." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="LUNACASA가 준비한 프리미엄 빈티지 소파."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                <meta meta property="og:url" content="https://raw.githubusercontent.com/kim-sangyong/test/main/PremiumVintageSofa.png"/>

                {/* 트위터 */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LUNACASA - 프리미엄 빈티지 소파." />
                <meta name="twitter:description" content="LUNACASA가 준비한 프리미엄 빈티지 소파." />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/kim-sangyong/test/main/PremiumVintageSofa.png" />
            </Helmet>

            <section aria-label="프리미엄 빈티지 소파 구매 정보" className={styles.sectionCon}>
                <form>
                    <article className={styles.detail}>
                        <div className={styles.imageContainer}>
                            <img src={SofaData[5].img} alt="프리미엄 빈티지 소파" loading="lazy" className={styles.mainImg}/>
                        </div>

                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>{SofaData[5].name}</h2>
                            <del className={styles.delSize}>{SofaData[5].originalPrice.toLocaleString()} 원</del>
                                <span className={styles.spanSize}>{SofaData[5].salePrice.toLocaleString()} 원</span>

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
                                가로 2870 x 세로 1050 x 높이 870mm  
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
            <main aria-label="프리미엄 빈티지 소파 상세정보" className={styles.mainCon}>
                {/* 패브릭 침대 comment 섹션 */}
                <section aria-label="제품설명" className={styles.box}>
                    <p className={styles.boxSecon}>COMMENT</p>
                </section>
                    <article className={styles.commentCon}>
                        <p className={styles.comment}>
                            천연 소가죽으로 만든 Preminum 소파입니다.<br />
                            천연가죽 특유의 고급스러움에 워싱을 더하여 우아함까지 담겨있습니다.<br />
                            LUNACASA의 노력이 담겨있는 가장 자부심 있는 소파입니다.
                        </p>
                    </article>
                
                <section className={styles.premiumCon}>
                    <div className={styles.premiumTextCon}>
                        <p className={styles.premiumNoto}>The Premium</p>
                        <p className={styles.premiumText}>우아함의 끝</p>
                    </div>
                        <img src={Premium} alt="" loading="lazy" className={styles.premiumImg}/>
                </section>

                <section className={styles.leatherCon}>
                        <div className={styles.newBox}>
                            <p className={styles.newText}>새롭게 선보이는 고품질 천연 소가죽</p>
                        </div>
                        <p className={styles.leatherTitle}>이태리의 역사가 담긴 가죽</p>
                            <img src={VintageLeather} alt="" loading="lazy" className={styles.leatherImg}/>
                        <p className={styles.leatherText}>
                            13세기부터 가죽 공예를 시작해온 가죽의 도시 피렌체<br />
                            오랜 역사를 지니고 있는 기술력으로 만든 최고급 가죽<br />
                            우수한 품질을 자랑합니다. <span className={styles.leatherSpan}>LUNACSA</span>는 피렌체와 함께<br />
                            오늘날 역사를 함께 만들고 있습니다. 
                        </p>
                </section>

                <section className={styles.arrowCon}>
                    <div className={styles.textCon}>
                        <p className={styles.text}>
                            <span className={styles.textSpan}>LUNACASA의 STEP</span><br />
                            직접 선별하여 품질유지<br />
                            생산 시스템 구축<br />
                            합리적인 가격
                        </p>
                            <img src={Arrow} alt="" loading="lazy" className={styles.arrowImg}/>
                    </div>
                    <div className={styles.rowBox}>
                        {/* 첫번째 박스 */}
                        <div className={styles.arrowBox}>
                            <p className={styles.arrowBoxText}>
                                이태리 국적의 직원이<br />
                                직접 선별
                            </p>
                        </div>
                        {/* 두번째 박스 */}
                        <div className={styles.arrowBox}>
                            <p className={styles.arrowBoxText}>
                                전담 가죽 팀의<br />
                                가공 공정
                            </p>
                        </div>
                        {/* 세번째 박스 */}
                        <div className={styles.arrowBox}>
                            <p className={styles.arrowBoxText}>
                                원자재 수송<br />
                                자체 물류 시스템
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.lastSection}>
                    <div className={styles.lastCol}>
                        <p className={styles.lastTitle}>감각적인 모던 디자인 감성을 더하다</p>
                            <img src={SofaData[5].img} alt="" loading="lazy" className={styles.lastImg}/>
                    </div>
                        <div className={styles.lastTextCon}>
                            <p className={styles.lastTextCus}>
                                군더더기 없는 심플한 디자인에 더해진 세련된 감성
                            </p>
                            <p className={styles.lastText}>
                                일체형으로 시각적으로 더 모던하게 보일 수 있도록 구조를 설계했습니다.<br />
                                <span className={styles.lastSpan}>“깔끔하게 정돈된 듯한 느낌”</span> 을 담고자 소파의 선을 살려 간결하게<br />
                                정리하는데 심혈을 기울여 만들었습니다.
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

export default PremiumSofa;