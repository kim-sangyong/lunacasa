import React from "react";
import { Helmet } from "react-helmet-async";
import BedData from "../../data/BedData.js";
import styles from "../../assets/styles/BedDetailPage/LatexBed.module.scss";
import LubberTree from "../../assets/images/DetailImages/LatexBed/LubberTree.jpg";
import Girl from "../../assets/images/DetailImages/LatexBed/Girl.jpg";
import GirlTwo from "../../assets/images/DetailImages/LatexBed/GirlTwo.jpg";
import LatexBed from "../../assets/images/DetailImages/LatexBed/LatexBed.jpg";
import TestReport from "../../assets/images/DetailImages/LatexBed/TestReport.jpg";
import BackToTop from "../../components/ScrollButton.jsx";

function LatexBedDetail(){
    return(
        <>
            <Helmet>
                <title>라텍스 침대 - 루나카사</title>
                <meta name="description" content="루나카사에서 직접 만든 라텍스 메트리스 침대."/>
                <meta name="keywords" content="루나카사 가구, 루나카사 인테리어, 루나카사 라텍스 침대, 루나카사 합리적인 침대, 
                LUNACASA 가구, LUNACASA 인테리어, LUNACASA 라텍스 침대, 유럽 가구, 이태리 가구, 편안한 가구, 합리적인 가격, 
                저렴한 가격, 유행, 앤틱한 침대, 오래쓰는 침대, 침대 추천, 가구 추천, 홈 데코, 홈 가구, 홈 인테리어, 지인 추천" />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}
        
                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 라텍스 침대." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="고급 라텍스 침대를 만나보세요. LUNACASA의 독보적인 라텍스 침대."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                <meta meta property="og:url" content="https://kim-sangyong.github.io/lunacasa/latex-bed-detail-page"/>
            </Helmet>

            <section aria-label="라텍스 침대 구매 정보" className={styles.sectionCon}>
                <form>  
                    <article className={styles.detail}>
                        <div className={styles.imageContainer}>
                            <img src={BedData[0].img} alt="라텍스 침대" loading="lazy" className={styles.mainImg}/>
                        </div>
                        
                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>{BedData[0].name}</h2>
                            <del className={styles.delSize}>{BedData[0].originalPrice.toLocaleString()} 원</del>
                                <span className={styles.spanSize}>{BedData[0].salePrice.toLocaleString()} 원</span>

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

        <main aria-label="라텍스 침대 상세정보" className={styles.mainCon}>
            {/* 고무나무 comment 섹션 */}
            <section aria-label="제품설명" className={styles.box}>
                <p className={styles.boxSecon}>COMMENT</p>
            </section>
            <article className={styles.commentCon}>
                <p className={styles.comment}>
                    화학적으로 합성하여 만들지 않은 고무나무에서 추출한<br />
                    천연 라텍스입니다.
                </p>
            </article>

            {/* 고무나무 추출 과정 섹션 */}
            <section className={styles.lubberCon}>
                <img src={LubberTree} alt="고무나무" className={styles.lubberImg} loading="lazy"/>
            </section>
                <p className={styles.lubberText}>천연고무를 추출하는 과정입니다.</p>

            {/* 라텍스 고집 이유 섹션 */}
            <section className={styles.latexPre}>
                <h2 className={styles.latexF}>왜 라텍스를 고집하나요?</h2>
                    <p className={styles.textOne}>천연고무나무 원유에서 추출한 천연 소재로 만들 탄성력이 매우 뛰어납니다.</p>
                    <p className={styles.textTwo}>소재의 밀도가 몸무게를 분산시켜 몸을 잘 받쳐주는게 특징입니다.</p>
                    <p className={styles.textThree}>잠자리가 예민하시다면 라텍스 침대 추천합니다.</p>
                <img src={Girl} alt="" className={styles.girl} loading="lazy"/>
                    <p className={styles.textFour}>옆으로 누워서 자도 몸무게를 분산시켜 주기 때문에 다음날이 편합니다.</p>
            </section>

            {/* 고객 사용후기 섹션 */}
            <section className={styles.customerCon}>
                <h2 className={styles.customer}>고객님들의 실제 사용 후기</h2>

                {/* boxCon을 감싸는 새로운 div 추가 */}
                <div className={styles.boxWrap}>
                    {/* 첫 번째 박스 */}
                    <div className={styles.boxCon}>
                        <div className={styles.topBox}>
                            <p>xx현 님</p>
                        </div>
                            <div className={styles.bottomBox}>
                                <p>라텍스 침대 너무 좋아요<br />
                                다음날이 상쾌합니다!</p>
                            </div>
                    </div>

                    {/* 두 번째 박스 */}
                    <div className={styles.boxCon}>
                        <div className={styles.topBox}>
                            <p>xx민 님</p>
                        </div>
                            <div className={styles.bottomBox}>
                                <p>잠자리가 예민한데 편하게 잘 잤습니다!</p>
                            </div>
                    </div>

                    {/* 세번째 박스 */}
                    <div className={styles.boxCon}>
                        <div className={styles.topBox}>
                            <p>xx지 님</p>
                        </div>
                            <div className={styles.bottomBox}>
                                <p>지인에게도 추천할게요!<br />
                                    너무 좋아요!
                                </p>
                            </div>
                    </div>
                </div>
            </section>

            <section className={styles.imageBox}>
                <div>
                    <img src={GirlTwo} alt="" className={styles.girlTwo} loading="lazy"/>
                </div>
                {/* 첫번째 박스 */}
                <div className={styles.colCon}>
                <div className={styles.boxColumn}>
                    <div className={styles.top}>
                        <p>예민한 잠자리엔 라텍스 침대</p>
                    </div>
                        <div className={styles.bottom}>
                            <p className={styles.bottomText}>몸무게를 분산시켜 예민한 잠자리에 편한<br /> 느낌을 가져다줍니다.</p>
                        </div>
                </div>
                {/* 두번째 박스 */}
                <div className={styles.boxColumnTwo}>
                    <div className={styles.topTwo}>
                        <p>왜 그럴까?</p>
                    </div>
                        <div className={styles.bottomTwo}>
                            <p className={styles.bottomText}>천연 소재로 만들어 탄성력이 매우 뛰어나 몸을<br /> 잘 받쳐주기 때문입니다.</p>
                        </div>
                </div>
                </div>
            </section>

            <section className={styles.endSection}>
                <h2 className={styles.hTwo}>잠자리가 예민한 분들을 위한</h2>
                <img src={LatexBed} alt="" className={styles.latexImg} loading="lazy"/>
            </section>

            {/* 인체적용시험 보고서 */}
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

export default LatexBedDetail;