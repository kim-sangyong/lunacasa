import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FirstMainBanner from "../assets/images/MainPage/Banner-1.jpg";
import SecondBanner from "../assets/images/MainPage/Banner-2.webp";
import ThirdBanner from "../assets/images/MainPage/Banner-3.jpg";
import ChairOne from "../assets/images/MainPage/ChairOne.jpg";
import ChairTwo from "../assets/images/MainPage/ChairTwo.jpg";
import ChairThree from "../assets/images/MainPage/ChairThree.jpg";
import ChairFour from "../assets/images/MainPage/ChairFour.jpg";
import ChairFive from "../assets/images/MainPage/ChairFive.jpg";
import ChairSix from "../assets/images/MainPage/ChairSix.jpg";
import MainBed from "../assets/images/MainPage/MainBed.jpg";
import MainSofa from "../assets/images/MainPage/MainSofa.jpg";
import ItemOne from "../assets/images/MainPage/ItemOne.jpg";
import ItemTwo from "../assets/images/MainPage/ItemTwo.jpg";
import ItemThree from "../assets/images/MainPage/ItemThree.jpg";
import ItemFour from "../assets/images/MainPage/ItemFour.jpg";
import ItemFive from "../assets/images/MainPage/ItemFive.jpg";
import ItemSix from "../assets/images/MainPage/ItemSix.jpg";
import ItemSeven from "../assets/images/MainPage/ItemSeven.jpg";
import ItemEight from "../assets/images/MainPage/ItemEight.jpg";
import styles from "../assets/styles/MainPage.module.scss";
import NextArrow from "../components/NextArrow.jsx";
import PrevArrow from "../components/PrevArrow.jsx";


function MainPage(){

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        autoplay: true, // 슬라이드를 자동으로 넘길지 여부
        autoplaySpeed: 3500, // 자동으로 넘길 시 시간 간격
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
    return(
        <>
            <Helmet>
                <title>루나카사 - LUNACASA</title>
                <meta name="description" content="루나카사 | LUNACASA에서 감각적인 고급 가구를 만나보세요. 품격 있는 인테리어를 위한 최고의 선택 | 
                모던한 가구, 저럼한 가구, 인테리어 가구, 홈 인테리어 가구, 홈데코 가구, 루나카사 가구, 가구 사이트, 가구 쇼핑몰, 가구, 
                가구 추천, 좋은 가구, 합리적인 가구"/>
                <meta name="keywords" content="루나카사 가구, 루나카사 인테리어, 루나카사 침대, 루나카사 소파.
                루나카사 홈인테리어, 루나카사 업소용 가구, 루나카사 책상 의자, 루나카사 빈티지 가구, 루나카사 앤틱 가구,
                저렴한 가구, 모던 가구, 북유럽 가구, 이태리 가구, 의자, 암체어, 원목의자, 야외용 가구, 사무용 의자,
                이쁜가구, 예쁜가구, 인테리어, 인테리어 디자인, 북유럽 인테리어, 이태리 인테리어, 유명 인테리어, 공간, 공간활용,
                LUNACASA가구, LUNACASA 인테리어, LUNACASA 디자인 의자, LUNACASA 디자인 소파, LUNACASA 디자인 침대, 
                LUNACASA, 디자인 홈 가구, LUNACASA 디자인 공간 가구, LUNACASA 빈티지 가구" />
                {/* <meta http-equiv="Copyright" content="LUNACASA" /> 푸터에 추가함 */}
                <meta name="robots" content="index, follow" /> {/* 아직 검색결과 표시X 페이지 링크 따라가기 X 플젝 다 끝나고 변경 */}

                {/* 소셜 미디어(SNS) Open Graph (OG) 메타 태그 */}
                {/* 스마트폰으로 가구 쇼핑몰을 공유할때 웹사이트라는걸 알려줌 */}
                <meta property="og:type" content="website" />
                {/* 소셜 미디어에서 공유될 때 표시되는 제목입니다. */}
                <meta property="og:title" content="LUNACASA - 고급 가구." />
                {/* 소셜 미디어에서 공유될 때 표시되는 설명입니다. */}
                <meta property="og:description" content="루나카사의 감각적인 고급 가구를 만나보세요. 품격 있는 인테리어를 위한 최고의 선택."/>
                {/* 소셜 미디어에서 공유될 때 표시되는 이미지입니다 */}
                {/* <meta meta property="og:image" content="https://example.com/image.jpg"/> */}
                {/* 공유할 URL을 설정합니다. */}
                <meta meta property="og:url" content="https://raw.githubusercontent.com/kim-sangyong/test/main/Banner-1.png"/>

                {/* 트위터 */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LUNACASA - 고급 가구." />
                <meta name="twitter:description" content="루나카사의 감각적인 고급 가구를 만나보세요. 품격 있는 인테리어를 위한 최고의 선택." />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/kim-sangyong/test/main/Banner-1.png" />
            
            </Helmet>
        <main className={styles.container}>
            {/* 슬라이더 */}
            <Slider {...settings} className={styles.slider}>
                
                <div className={styles.sectionOne}>
                    <img className={styles.backgroundImg} src={FirstMainBanner} alt="메인 배너1"/>
                        <div className={styles.textMove}>
                            <h2 className={styles.oneTitle}>LUNACASA 베스트 셀러</h2>
                            <h3 className={styles.oneText}>가구 출시</h3>
                        </div>
                </div>

                <div className={styles.sectionTwo}>    
                    <img className={styles.backgroundImgTwo} src={SecondBanner} alt="메인 배너2"/>
                        <div className={styles.textMoveTwo}>
                            <h2 className={styles.oneTitleTwo}>스타일이 스타일을 만나다</h2>
                            <h3 className={styles.oneTextTwo}>4/25<br/>독보적인 스타일의 의자 출시</h3>
                        </div>
                </div>

                <div className={styles.sectionThree}>
                    <img className={styles.backgroundImgThree} src={ThirdBanner} alt="메인 배너3"/>
                        <div className={styles.textMoveThree}>
                            <h2 className={styles.oneTextThree}><span className={styles.oneTitleThree}>LUNACASA</span><br /> 전 품목<br/>10 ~ 20%<br/>SALE</h2>
                        </div>
                </div>
            </Slider>

            <section className={styles.asideCon}>
                    <div className={styles.aside}>
                        <h2 className={styles.asideTitle}>곧 출시 될 의자</h2>
                        <span className={styles.asideSpan}># 편안함</span>
                        <span className={styles.asideSpan}># 유니크</span>
                        <span className={styles.asideSpan}># 디자인</span>
                </div>
                <div className={styles.chairList}>
                    <figure className={styles.chairItem}>
                        <img src={ChairOne} alt="유니크 블랙 의자" className={styles.chairImg} loading="lazy"/>
                    <figcaption className={styles.chairName}>유니크 블랙 의자</figcaption>
                    </figure>
                    <figure className={styles.chairItem}>
                        <img src={ChairTwo} alt="클래식 의자" className={styles.chairImg} loading="lazy"/>
                    <figcaption className={styles.chairName}>클래식 의자</figcaption>
                    </figure>
                    <figure className={styles.chairItem}>
                        <img src={ChairThree} alt="라텍스 의자" className={styles.chairImg} loading="lazy"/>
                    <figcaption className={styles.chairName}>라텍스 의자</figcaption>
                    </figure>
                    <figure className={styles.chairItem}>
                        <img src={ChairFour} alt="멜란지 화이트 의자" className={styles.chairImg} loading="lazy"/>
                    <figcaption className={styles.chairName}>멜란지 화이트 의자</figcaption>
                    </figure>
                    <figure className={styles.chairItem}>
                        <img src={ChairFive} alt="자작나무 의자" className={styles.chairImg} loading="lazy"/>
                    <figcaption className={styles.chairName}>자작나무 의자</figcaption>
                    </figure>
                    <figure className={styles.chairItem}>
                        <img src={ChairSix} alt="패브릭 의자" className={styles.chairImg} loading="lazy"/>
                    <figcaption className={styles.chairName}>패브릭 의자</figcaption>
                    </figure>
                </div>
            </section>

            <article className={styles.cateCon}>
                <h2 className={styles.cateTitle}>CATEGORY</h2>
                    <ul className={styles.listCon}>
                        <li className={styles.listCol}>
                        <Link to="/" className={styles.linkCol} aria-label="의자 카테고리가 추가 예정"> 
                            <img src={ChairSix} alt="의자 카테고리로 이동 버튼" className={styles.listImg} loading="lazy"/>
                            <span className={styles.cateName}>의자</span>
                            <span className={styles.hoverText}>Coming Soon</span>
                        </Link>
                        </li>
                        <li className={styles.listCol}>
                            <Link to="/bed" className={styles.linkCol} aria-label="침대 카테고리로 이동"> 
                                <img src={MainBed} alt="침대 카테고리로 이동 버튼" className={styles.listImg} loading="lazy"/>
                                <span className={styles.cateName}>침대</span>
                            </Link>
                        </li>
                        <li className={styles.listCol}>
                            <Link to="/sofa" className={styles.linkCol} aria-label="소파 카테고리로 이동">
                                <img src={MainSofa} alt="소파 카테고리로 이동 버튼" className={styles.listImg} loading="lazy"/>
                                <span className={styles.cateName}>소파</span>
                            </Link>
                        </li>
                    </ul>
            </article>
            
            <article className={styles.newItemCon} aria-label="출시 예정 가구">
                <h2 className={styles.newItemTitle}>Coming Soon Items</h2>
                    <ul className={styles.newItemList}>
                        <li className={styles.newItem}>
                            <img src={ItemOne} alt="출시 예정 침대" className={styles.itemImg} loading="lazy"/>
                        </li>

                        <li className={styles.newItem}>
                            <img src={ItemTwo} alt="출시 예정 침대" className={styles.itemImg} loading="lazy"/>
                        </li>

                        <li className={styles.newItem}>
                            <img src={ItemThree} alt="출시 예정 침대" className={styles.itemImg} loading="lazy"/>
                        </li>

                        <li className={styles.newItem}>
                            <img src={ItemFour} alt="출시 예정 침대" className={styles.itemImg} loading="lazy"/>
                        </li>

                        <li className={styles.newItem}>
                            <img src={ItemFive} alt="출시 예정 소파" className={styles.itemImg} loading="lazy"/>
                        </li>

                        <li className={styles.newItem}>
                            <img src={ItemSix} alt="출시 예정 소파" className={styles.itemImg} loading="lazy"/>
                        </li>

                        <li className={styles.newItem}>
                            <img src={ItemSeven} alt="출시 예정 소파" className={styles.itemImg} loading="lazy"/>
                        </li>

                        <li className={styles.newItem}>
                            <img src={ItemEight} alt="출시 예정 소파" className={styles.itemImg} loading="lazy"/>
                        </li>
                    </ul>
            </article>
        </main>
        </>
    );
}

export default MainPage;