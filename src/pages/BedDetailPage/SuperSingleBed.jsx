import React from "react";
import { Helmet } from "react-helmet-async";
import BedData from "../../data/BedData.js";
import styles from "../../assets/styles/BedDetailPage/SuperSingleBed.module.scss";
import Spring from "../../assets/images/DetailImages/SuperSingleBed/Spring.jpg";
import High from "../../assets/images/DetailImages/SuperSingleBed/High.png";
import TestReport from "../../assets/images/DetailImages/LatexBed/TestReport.jpg";
import BackToTop from "../../components/ScrollButton.jsx";

function SuperSingleBed() {
    return(
        <>
         <Helmet>
            <title>슈퍼 싱글 침대 - 루나카사</title>
                <meta name="description" content="루나카사에서 직접 만든 슈퍼 싱글 침대 지금 만나보세요."/>
                <meta name="keywords" content="루나카사 가구, 루나카사 인테리어, 루나카사 슈퍼 싱글 침대, 
                LUNACASA 가구, LUNACASA 인테리어, LUNACASA 슈퍼 싱글 침대, 유럽 가구, 이태리 가구, 편안한 가구, 합리적인 가격, 
                저렴한 가격, 유행, 앤틱한 침대, 오래쓰는 침대, 침대 추천, 가구 추천, 홈 데코, 홈 가구, 홈 인테리어, 지인 추천" />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}
                
                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 슈퍼 싱글 침대." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="슈퍼 싱글 침대를 만나보세요. 획기적인 가격으로 제공합니다."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                <meta meta property="og:url" content="https://kim-sangyong.github.io/lunacasa/super-single-bed-detail-page"/>
            </Helmet>

            <section aria-label="슈퍼 싱글 침대 구매 정보" className={styles.sectionCon}>
                <form>
                    <article className={styles.detail}>
                        <div className={styles.imageContainer}>
                            <img src={BedData[1].img} alt="슈퍼 싱글 침대" loading="lazy" className={styles.mainImg}/>
                        </div>

                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>{BedData[1].name}</h2>
                            <del className={styles.delSize}>{BedData[1].originalPrice.toLocaleString()} 원</del>
                                <span className={styles.spanSize}>{BedData[1].salePrice.toLocaleString()} 원</span>

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

            <main aria-label="슈퍼 싱글 침대 상세정보" className={styles.mainCon}>
                {/* 스프링 침대 comment 섹션 */}
                <section aria-label="제품설명" className={styles.box}>
                    <p className={styles.boxSecon}>COMMENT</p>
                </section>
                    <article className={styles.commentCon}>
                        <p className={styles.comment}>
                            탄력과 쿠션감이 뛰어나고 소음이 없는 내구성이 강한<br />
                            스프링 매트리스 침대입니다.
                        </p>
                    </article>

                 {/* 스프링 설명 */}
                <section className={styles.springCon}>
                    <img src={Spring} alt="고탄성 스프링" className={styles.springImg} loading="lazy"/>
                </section>
                    <p className={styles.springText}>특별한 열처리를 거쳐 LUNACASA만의 공법으로 만든 고탄성 스프링입니다.</p>
                
               {/* 고탄성 설명 */}
               <section className={styles.highCon}>
                    <img src={High} alt="" className={styles.highImg} loading="lazy"/>
                </section>
                    <p className={styles.highText}>
                        내구성이 강하고 고탄성이므로 다른 스프링 침대에 비해 수명이 길고<br />
                        침대에서 뛰어도 무리가 없는 스프링입니다.
                    </p>

                <section className={styles.singleBedCon}>
                    <div className={styles.singleBedBox}>
                        <p className={styles.singleText}>슈퍼 싱글 침대<br />
                            <span className={styles.singleSpan}>소음 없는 편안함을 느껴보세요.</span>
                        </p>
                        <img src={BedData[1].img} alt="슈퍼 싱글 침대" loading="lazy" className={styles.singleBed}/>
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

export default SuperSingleBed;