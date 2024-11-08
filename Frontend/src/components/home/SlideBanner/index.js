import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { arrowNext,arrowPrev } from "../../Icons/index";

import { Pagination, Autoplay } from 'swiper/modules';

import styles from './slideBanner.module.css';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SlideBanner() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className} ${cx('custom-bullet')}"></span>`;
        },
    };

    const slides = [
        {
            title: "Vinfast VF8",
            content: "Khám phá những chức năng mới của Vinfast VF8",
            image: "https://static-cms-prod.vinfastauto.com/Slider-VF8-25Aug-Desktop_3060x1406.jpg"
        },
        {
            title: "Vinfast VF8",
            content: "Khám phá những chức năng mới của Vinfast VF8",
            image: "https://static-cms-prod.vinfastauto.com/campaign-20240927.jpg"
        }
    ];

    return (
        <div className={cx("wrap")}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                pagination={pagination}
                modules={[Pagination, Autoplay, EffectFade, Navigation]}
                effect="fade"
                fadeEffect={{crossFade:true}}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className={cx("mySwiper")}
            >
                <div className={cx("swiper-button-prev")}>{arrowPrev}</div>
                <div className={cx("swiper-button-next")}>{arrowNext}</div>
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className={cx("slider-slide")}>
                        <img src={slide.image} alt={slide.content} className={cx("slider-image")} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SlideBanner;
