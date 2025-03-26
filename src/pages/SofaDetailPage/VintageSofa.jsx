import React from "react";
import {Helmet} from "react-helmet-async";
import SofaData from "../../data/SofaData.js";
import styles from "../../assets/styles/SofaDetailPage/VintageSofa.module.scss";
import PastelThread from "../../assets/images/SofaDetailImage/VintageSofa/PastelThread.jpg";
import Knitting from "../../assets/images/SofaDetailImage/VintageSofa/Knitting.jpg";
import PastelFabric from "../../assets/images/SofaDetailImage/VintageSofa/PastelFabric.jpg";
import Book from "../../assets/images/SofaDetailImage/VintageSofa/Book.jpg";
import BackToTop from "../../components/ScrollButton";
import TestReport from "../../assets/images/DetailImages/LatexBed/TestReport.jpg";



function VintageSofa() {
    return(
        <>
            <Helmet>
                <title>이태리 빈티지 소파 - 루나카사</title>
                <meta name="description" content="어느 인테리어에도 잘 어울리는 루나카사 이태리 빈티지 소파."/>
                <meta name="keywords" content="루나카사 가구, 루나카사 인테리어, 루나카사 이태리 빈티지 소파, 
                LUNACASA 가구, LUNACASA 인테리어, LUNACASA 이태리 빈티지 소파, LUNACASA 소파, 유럽 가구, 이태리 가구, 
                편안한 가구, 합리적인 가격, 저렴한 가격, 유행, 앤틱한 소파, 오래쓰는 소파, 소파 추천, 가구 추천, 
                홈 데코, 홈 가구, 홈 인테리어, 지인 추천" />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}
                                           
                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 이태리 빈티지 소파." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="어느 곳에도 잘 어울리는 이태리 빈티지 소파."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                <meta meta property="og:url" content="https://raw.githubusercontent.com/kim-sangyong/test/main/ItalianVintageSofa.png"/>

                {/* 트위터 */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LUNACASA - 이태리 빈티지 소파." />
                <meta name="twitter:description" content="어느 곳에도 잘 어울리는 이태리 빈티지 소파." />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/kim-sangyong/test/main/ItalianVintageSofa.png" />
            </Helmet>

            <section aria-label="이태리 빈티지 소파 구매 정보" className={styles.sectionCon}>
                <form>
                    <article className={styles.detail}>
                        <div className={styles.imageContainer}>
                            <img src={SofaData[4].img} alt="이태리 빈티지 소파" loading="lazy" className={styles.mainImg}/>
                        </div>

                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>{SofaData[4].name}</h2>
                            <del className={styles.delSize}>{SofaData[4].originalPrice.toLocaleString()} 원</del>
                                <span className={styles.spanSize}>{SofaData[4].salePrice.toLocaleString()} 원</span>

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
                                가로 2270 x 세로 650 x 높이 570mm  
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
            <main aria-label="이태리 빈티지 소파 상세정보" className={styles.mainCon}>
                {/* 패브릭 침대 comment 섹션 */}
                <section aria-label="제품설명" className={styles.box}>
                    <p className={styles.boxSecon}>COMMENT</p>
                </section>
                    <article className={styles.commentCon}>
                        <p className={styles.comment}>
                            패브릭, 극세사가 합쳐진 특별한 재질로 만들어진 소파입니다.<br />
                            고급스러움이 물씬 느껴지고 보온성이 좋은 소파입니다.<br />
                            파스텔톤의 워싱 작업을 걸쳐 만든 디자인 소파입니다.
                        </p>
                    </article>

                <section className={styles.threadCon}>
                    <p className={styles.threadText}>
                        뜨개질에서 영감을 얻은 디자인<br />
                        실로 <span className={styles.threadSpan}>가구</span>를 만들다.
                    </p>
                        <img src={PastelThread} alt="" loading="lazy" className={styles.threadImg}/>
                </section>

                <section className={styles.knittingCon}>
                    <p className={styles.knittingText}>
                        이태리 장인의 손길
                    </p>
                        <img  src={Knitting} alt="" loading="lazy" className={styles.knittingImg}/>
                            <p className={styles.knittingEx}>
                                이태리 장인의 손길이 담긴 완전한 수공업의 원단 작업입니다.<br />
                                이태리 장인의 섬세함을 느낄 수 있습니다.
                            </p>
                </section>

                <section className={styles.pastelCon}>
                    <p className={styles.pastelText}>
                        파스텔 색감의 실로 만든 견고한 원단
                    </p>
                        <img  src={PastelFabric} alt="" loading="lazy" className={styles.pastelImg}/>
                            <p className={styles.pastelEx}>
                                견고한 실로 1000번 넘게 짜서 만든 아주 견고한 원단입니다.<br />
                                여백 없이 빼곡하게 만들었으며 파스텔 색감과 거친 느낌의<br />
                                실로 빈티지한 느낌을 살린 아주 고급스러운 원단입니다.
                            </p>
                </section>

                <section className={styles.bookCon}>
                    <p className={styles.bookText}>
                        <span className={styles.bookSpan}>
                            소파</span><br />
                            책에서만 보던 이태리 장인의 소파
                    </p>
                        <img src={Book} alt="" loading="lazy" className={styles.bookImg}/>
                            <p className={styles.bookEx}>
                                <span className={styles.bookExSpan}>LUNACASA</span>가 고객님들을 위해 만들었습니다.<br />
                                고객님들의 꿈을 실현 시켜 드리겠습니다.
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
export default VintageSofa;