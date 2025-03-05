import React from "react";
import { Helmet } from "react-helmet-async";
import BedData from "../../data/BedData";
import styles from "../../assets/styles/BedDetailPage/LowBed.module.scss";
import Spring from "../../assets/images/DetailImages/SuperSingleBed/Spring.jpg";
import Drawer from "../../assets/images/DetailImages/LowBed/Drawer.png";
import LowOne from "../../assets/images/DetailImages/LowBed/LowOne.jpg";
import BlurBed from "../../assets/images/DetailImages/LowBed/BlurBed.jpg";
import EllipseOne from "../../assets/images/DetailImages/LowBed/EllipseOne.png";
import EllipseTwo from "../../assets/images/DetailImages/LowBed/EllipseTwo.png";
import Line from "../../assets/images/DetailImages/LowBed/Line.png";
import TestReport from "../../assets/images/DetailImages/LatexBed/TestReport.jpg";
import BackToTop from "../../components/ScrollButton";

function LowBed() {
    return(
        <>
        <Helmet>
            <title>저상형 침대</title>
                <meta name="description" content="자취인들의 편한 저상형 침대를 만나보세요."/>
                <meta name="keywords" content="가구, 인테리어, 저상형 침대." />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}
                        
                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 저상형 침대." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="저상형 침대를 만나보세요. 차별화된 침대를 만나게 됩니다."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                {/* <meta meta property="og:url" content="https://example.com"/> */}
        </Helmet>

        <section aria-label="저상형 침대 구매 정보" className={styles.sectionCon}>
                <form>
                    <article className={styles.detail}>
                        <div className={styles.imageContainer}>
                            <img src={BedData[2].img} alt="저상형 침대" loading="lazy" className={styles.mainImg}/>
                        </div>

                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>{BedData[2].name}</h2>
                            <del className={styles.delSize}>{BedData[2].originalPrice.toLocaleString()} 원</del>
                                <span className={styles.spanSize}>{BedData[2].salePrice.toLocaleString()} 원</span>

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

            <main aria-label="저상형 침대 상세정보" className={styles.mainCon}>
                {/* 고무나무 comment 섹션 */}
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
                    <p className={styles.springText}>
                        특별한 열처리를 거쳐 LUNACASA만의 공법으로 만든 고탄성 스프링입니다.
                    </p>

                <section className={styles.drawerCon}>
                    <div className={styles.drawerBox}>
                        <img src={Drawer} alt="" className={styles.drawerImg} loading="lazy"/>
                            <div className={styles.drawerCol}>
                                <p className={styles.drawerOne}>
                                    자취생들을 위한 서랍이 있는 빌트인 형식<br />
                                    <span className={styles.drawerSpan}>저상형 침대</span>입니다.
                                </p>
                                <p className={styles.drawerTwo}>
                                    디자인과 편리함 모두 잡은 <span className={styles.drawerBold}>LUNACASA</span>만의<br />
                                    합리적인 가격의 <span className={styles.drawerSpan}>저상형 침대</span> 추천합니다.
                                </p>
                            </div>
                    </div>
                </section>

                <section className={styles.lowOneCon}>
                    <img src={LowOne} alt="" loading="lazy" className={styles.lowOneImg}/>
                        <div className={styles.lowOneText}>
                            <p className={styles.lowOneEx}>
                            어느 인테리어에도 잘 어울리는<br />
                            저상형 침대입니다.
                            </p>
                        </div>
                </section>

                <section className={styles.blurCon}>
                    <img src={BlurBed} alt="" loading="lazy" className={styles.blurImg}/>
                        <p className={styles.blurText}>저상형 침대의 푹신함은 <span className={styles.blurSpan}>Perfect</span></p> 
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

export default LowBed;