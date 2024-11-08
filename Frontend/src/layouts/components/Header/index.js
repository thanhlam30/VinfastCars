import React, { useState, useRef, useEffect } from "react"
import styles from "./header.module.css"
import className from 'classnames/bind'
import { Link } from 'react-router-dom';


const cx = className.bind(styles);

function Header() {
    const [isSideMenuVisible, setSideMenuVisible] = useState(false);
    const sideMenuRef = useRef(null);
    const sideMenuTriggerRef = useRef(null);
    const toggleSideMenu = (event) => {
        event.stopPropagation();
        setSideMenuVisible(true);
    };
    const toggleCloseSideMenu = () => {
        setSideMenuVisible(false);
    }
    const handleClickOutside = (event) => {
        if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
            setSideMenuVisible(false);
        }
    }
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className={cx("wrap")}>
            <div className={cx("header-container")}>
                <div className={cx("logo-vinfast")}>
                    <Link to="/"><img alt="VinFast - Thương hiệu xe điện đầu tiên Việt Nam" src="https://vinfastauto.com/themes/porto/img/new-home-page/VinFast-logo.svg" /></Link>
                </div>
                <div>
                    <div className={cx("header-menu")}>
                        <ul>
                            <li>Giới thiệu</li>
                            <li>Ô tô</li>
                            <li>Dịch vụ hậu mãi</li>
                            <li>Pin và trạm sạc</li>
                            <li>Lưu trữ năng lượng</li>
                        </ul>
                    </div>
                </div>
                <div className={cx("right-container")}>
                    <Link to="/" className={cx("account")}>Tài Khoản</Link>
                    <button className={cx("btn-register")}>ĐĂNG KÝ LÁI THỬ</button>
                    <div onClick={toggleSideMenu} ref={sideMenuTriggerRef} className={cx("side-menu-trigger")}>
                        <div className={cx("right-menu-icon")}></div>
                        <div className={cx("right-menu-icon")}></div>
                        <div className={cx("right-menu-icon")}></div>
                    </div>
                    {isSideMenuVisible && (
                        <div ref={sideMenuRef} className={cx("header-sidemenu")}>
                            <div className={cx("btn-close-sidemenu-container")}>
                                <button onClick={toggleCloseSideMenu} className={cx("btn-close-sidemenu")}><svg fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5.5L5 19.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"></path>
                                    <path d="M5 5.5L19 19.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"></path>
                                </svg></button>
                            </div>
                            <div className={cx("main-menu")}>
                                <ul>
                                    <li>Giới thiệu</li>
                                    <li>Ô tô</li>
                                    <li>Dịch vụ hậu mãi</li>
                                    <li>Pin và trạm sạc</li>
                                    <li>Lưu trữ năng lượng</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Tiện ích</h4>
                                <ul>
                                    <li>So sánh xe</li>
                                    <li>Dự toán chi phí lăn</li>
                                    <li>Dự toán vay trả góp</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Mua sắm</h4>
                                <ul>
                                    <li>VF Drgn eBike</li>
                                    <li>Phụ kiện xe</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Tin tức</h4>
                                <ul>
                                    <li>Công ty</li>
                                    <li>Cộng đồng</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Hỗ trợ</h4>
                                <ul>
                                    <li>Tìm Showroom & Trạm sạc</li>
                                    <li>Dự toán chi phí lăn</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Thảo luận </h4>
                                <ul>
                                    <li>Cộng đồng Vinfast Toàn cầu</li>
                                </ul>
                            </div>
                            <div>
                                <li>Lựa chọn quốc gia</li>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Header;