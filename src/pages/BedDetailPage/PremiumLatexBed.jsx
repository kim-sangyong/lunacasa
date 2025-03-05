import React from "react";
import {Helmet} from "react-helmet-async";
import BedData from "../../data/BedData.js";
import styles from "../../assets/styles/BedDetailPage/PremiumLatexBed.module.scss";
import LubberTree from "../../assets/images/DetailImages/LatexBed/LubberTree.jpg";
import Girl from "../../assets/images/DetailImages/LatexBed/Girl.jpg";
import RubberTreeTwo from "../../assets/images/DetailImages/PremiumLatexBed/RubberTreeTwo.jpg";
import BirchTree from "../../assets/images/DetailImages/PremiumLatexBed/BirchTree.jpg";
import Hammer from "../../assets/images/DetailImages/PremiumLatexBed/Hammer.png";
import Shaking from "../../assets/images/DetailImages/PremiumLatexBed/Shaking.jpg";
import TestReport from "../../assets/images/DetailImages/LatexBed/TestReport.jpg";
import BackToTop from "../../components/ScrollButton.jsx";

function PremiumLatexBed() {
    return(
        <>
            <Helmet>
                <title>프리미엄 라텍스 침대</title>
                <meta name="description" content="LUNACASA에서 직접 만든 프리미엄 라텍스 침대."/>
                <meta name="keywords" content="가구, 인테리어, 프리미엄 라텍스 침대." />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}
        
                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 프리미엄 라텍스 침대." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="프리미엄 라텍스 침대를 만나보세요. LUNACASA의 독보적인 프리미엄 라텍스 침대."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                {/* <meta meta property="og:url" content="https://example.com"/> */}
            </Helmet>

            <section aria-label="프리미엄 라텍스 침대 구매 정보" className={styles.sectionCon}>
                <form>
                    <article className={styles.detail}>
                        <div className={styles.imageContainer}>
                            <img src={BedData[5].img} alt="프리미엄 라텍스 침대" loading="lazy" className={styles.mainImg}/>
                        </div>

                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>{BedData[5].name}</h2>
                         <del className={styles.delSize}>{BedData[5].originalPrice.toLocaleString()} 원</del>
                            <span className={styles.spanSize}>{BedData[5].salePrice.toLocaleString()} 원</span>

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

        <main aria-label="프리미엄 라텍스 침대 상세정보" className={styles.mainCon}>
            {/* 고무나무 comment 섹션 */}
            <section aria-label="제품설명" className={styles.box}>
                <p className={styles.boxSecon}>COMMENT</p>
            </section>
                <article className={styles.commentCon}>
                    <p className={styles.comment}>
                        화학적으로 합성하여 만들지 않은 고무나무에서 추출한 천연 라텍스입니다.<br />
                        또한 자작나무와 고무나무를 특별한 공법으로 합쳐서 만든 특별한 침대입니다.
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

            <section className={styles.rowImgCon}>
                <div className={styles.colFig}>
                    <img src={RubberTreeTwo} alt="고무나무" loading="lazy" className={styles.rubber}/>
                    <p>고무나무</p>
                </div>
                    <div className={styles.colFig}>
                        <img src={BirchTree} alt="자작나무" loading="lazy" className={styles.birch}/>
                        <p>자작나무</p>
                    </div>
            </section>

            <section className={styles.hammerCon}>
                <img src={Hammer} alt="" loading="lazy" className={styles.hammerImg}/>
                    <p className={styles.hammerTitle}>LUNACASA만의 특별한 공법으로 만든 침대</p>
                        <p className={styles.hammerText}>
                            10년 이상 된 고무나무와 자작나무를 직접 선별하고<br />
                            합쳐서 가공하여 만든 원목으로<br />
                            흔들거림과 내구성을 둘 다 잡았습니다.
                        </p>
            </section>

            <section className={styles.shakingCon}>
                <img src={Shaking} alt="" loading="lazy" className={styles.shakingImg}/>
                    <p className={styles.shakingTitle}>흔들림 없는<br /> 프리미엄 라텍스 침대</p>
                    <p className={styles.shakingText}>
                        1. 자작나무 고무나무의 합성 공법으로 우수한 내구성<br />
                        2. 속이 꽉 찬 원목을 사용하여 변형이 없음<br />
                        3. 흔들림 없는 침대 개발
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

export default PremiumLatexBed;
