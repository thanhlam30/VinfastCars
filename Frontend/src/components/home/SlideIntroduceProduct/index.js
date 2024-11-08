import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import '../../Icons/index';


import styles from './slideIntroduceProduct.module.css';
import classNames from "classnames/bind";
import { VF3Icon, VF8Icon, arrowNext, arrowPrev } from "../../Icons/index";

const cx = classNames.bind(styles);

function SlideIntroduceProduct() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const productIcons = [VF3Icon, VF8Icon];
    const slides = [
        {
            title: "VF3",
            icon: VF3Icon,
            type: "B-SUV",
            sitNumber: "5 chỗ",
            max: "480 km (NEDC)",
            price: "675.000.000 VNĐ",
            image: "https://vinfastauto.com/themes/porto/img/homepage-v2/car/vf-e34.webp"
        },
        {
            title: "VF3",
            icon: VF8Icon,
            type: "B-SUV",
            sitNumber: "5 chỗ",
            max: "550 km (NEDC)",
            price: "700.000.000 VNĐ",
            image: "https://vinfastauto.com/themes/porto/img/homepage-v2/car/vf-6.webp"
        }
    ];
    return (
        <div className={cx("wrap")}>
            <div className={cx("icons-container")}>
                {productIcons.map((IconComponent, index) => (
                    <div key={index} style={{ margin: '0 10px', textAlign: 'center' }}>
                        <IconComponent fillColor={currentSlide === index ? "#1464F4" : "#3C3C3C"} />
                        {currentSlide === index && <hr className={cx("line-icon")} />}
                    </div>
                ))}
            </div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                modules={[EffectFade, Navigation]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}

            >
                <div className={cx("swiper-button-prev")}>{arrowPrev}</div>
                <div className={cx("swiper-button-next")}>{arrowNext}</div>
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img className={cx("product-image")} src={slide.image} alt={slide.title} />
                        <hr />
                        <div className={cx("content-container")}>
                            <div>
                                <p>Dòng xe</p>
                                <p>{slide.type}</p>
                            </div>
                            <div>
                                <p>Số chỗ ngồi</p>
                                <p>{slide.sitNumber}</p>
                            </div>
                            <div>
                                <p>Quãng đường lên tới</p>
                                <p>{slide.max}</p>
                            </div>
                            <div>
                                <p>Giá từ</p>
                                <p>{slide.price}</p>
                            </div>
                        </div>
                        <div className={cx("detail")}>
                            <Link to='/' className={cx("deposit-btn")}><span>Đặt cọc</span></Link>
                            <Link to='/' className={cx("desc-btn")}><span>Xem chi tiết</span></Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SlideIntroduceProduct;
