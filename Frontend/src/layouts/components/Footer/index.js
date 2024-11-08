import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import classNames from 'classnames/bind';
import React, { useState, useRef, useEffect } from 'react';

const cx = classNames.bind(styles);

function Footer() {
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const subMenuRef = useRef(null);
    const toggleSubmenu = (menu, event) => {
        event.stopPropagation();
        setActiveSubMenu((prevMenu) => (prevMenu === menu ? null : menu));
    }
    const handleClickOutside = (event) => {
        if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
            setActiveSubMenu(null);
        }
    }
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <footer className={cx("wrap")}>
            <div className={cx("container-fluid")}>
                <div className={cx("row")}>
                    <div className={cx("col-lg-6")}>
                        <div className={cx("logo")}>
                            <img alt="Công ty TNHH Kinh doanh Thương mại và Dịch vụ VinFast" src="https://vinfastauto.com/themes/porto/img/homepage-v2/logo-footer-v2.svg" />
                            <div className={cx("info")}>
                                <p>Công ty TNHH Kinh doanh Thương mại và Dịch vụ VinFast</p>
                                <div>
                                    <b>MST/MSDN:</b> 0108926276 do Sở KHĐT TP Hà Nội cấp lần đầu ngày 01/10/2019 và các lần thay đổi tiếp theo.
                                </div>
                                <div>
                                    <b>Địa chỉ trụ sở chính:</b> Số 7, đường Bằng Lăng 1, Khu đô thị Vinhomes Riverside, Phường Việt Hưng, Quận Long Biên, Thành phố Hà Nội, Việt Nam
                                </div>
                            </div>
                        </div>
                        <div className={cx("ecosystem")}>
                            <p className={cx("menu-title")}> Hệ sinh thái</p>
                            <ul className={cx("menu")}>
                                <li className={cx("menu-item")}>
                                    <Link to="https://vinhomes.vn/vi" rel="nofollow">Vinhomes</Link>
                                </li>
                                <li className={cx("menu-item")}>
                                    <Link to="https://vinmec.com/vi/" rel="nofollow">Vinmec</Link>
                                </li>
                                <li className={cx("menu-item")}>
                                    <Link to="https://vinpearl.com/" rel="nofollow">Vinpearl</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx("col-lg-3")}>
                        <div className={cx("menu-footer")}>
                            <Link to="/">VỀ VINFAST</Link>
                            <Link to="/">VỀ VINGROUP</Link>
                            <div className={cx("news")}>
                                <Link to="/">TIN TỨC</Link>
                                <div className={cx("chervon-down")} onClick={(event) => toggleSubmenu("news", event)}></div>
                            </div>
                            <div ref={subMenuRef} className={cx("submenu-news", { "d-block": activeSubMenu === "news", "d-none": activeSubMenu !== "news" })}>
                                <ul>
                                    <li><Link to="/">Công ty</Link></li>
                                    <li><Link to="/">Cộng đồng</Link></li>
                                </ul>
                            </div>
                            <Link to="/">ƯU ĐÃI</Link>
                            <Link to="/">SHOWROOM & ĐẠI LÝ</Link>
                            <div className={cx("privacy")}>
                                <Link to="/">ĐIỀU KHOẢN CHÍNH SÁCH </Link>
                                <div className={cx("chervon-down")} onClick={(event) => toggleSubmenu("privacy", event)}></div>
                            </div>
                            <div ref={subMenuRef} className={cx("submenu-privacy", { "d-block": activeSubMenu === "privacy", "d-none": activeSubMenu !== "privacy" })}>
                                <ul>
                                    <li>
                                        <Link to="/">Chính sách quyền riêng tư</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Chính sách vận chuyển</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Chính sách đổi trả</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Miễn trừ trách nhiệm</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Điều khoản ký kết thỏa thuận đặt cọc mua Ô tô VinFast</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Hợp đồng và chính sách</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx("col-lg-3")}>
                        <div className={cx("customer-care")}>
                            <div className={cx("hotline-email")}>
                                <div className={cx("title")}>HOTLINE</div>
                                <div className={cx("hotline")}>
                                    <Link to="tel:1900232389">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.51667 8.99167C6.71667 11.35 8.65 13.2833 11.0083 14.4833L12.8417 12.65C13.075 12.4167 13.4 12.35 13.6917 12.4417C14.625 12.75 15.625 12.9167 16.6667 12.9167C16.8877 12.9167 17.0996 13.0045 17.2559 13.1607C17.4122 13.317 17.5 13.529 17.5 13.75V16.6667C17.5 16.8877 17.4122 17.0996 17.2559 17.2559C17.0996 17.4122 16.8877 17.5 16.6667 17.5C12.9094 17.5 9.30609 16.0074 6.64932 13.3507C3.99256 10.6939 2.5 7.09057 2.5 3.33333C2.5 3.11232 2.5878 2.90036 2.74408 2.74408C2.90036 2.5878 3.11232 2.5 3.33333 2.5H6.25C6.47101 2.5 6.68298 2.5878 6.83926 2.74408C6.99554 2.90036 7.08333 3.11232 7.08333 3.33333C7.08333 4.375 7.25 5.375 7.55833 6.30833C7.65 6.6 7.58333 6.925 7.35 7.15833L5.51667 8.99167Z" fill="#8A8A8A"></path>
                                        </svg>
                                        <span>1900 23 23 89</span>
                                    </Link>
                                </div>
                                <div className={cx("email")}>
                                    <Link to="mailto:support.vn@vinfastauto.com">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.668 6.66683L10.0013 10.8335L3.33464 6.66683V5.00016L10.0013 9.16683L16.668 5.00016V6.66683ZM16.668 3.3335H3.33464C2.40964 3.3335 1.66797 4.07516 1.66797 5.00016V15.0002C1.66797 15.4422 1.84356 15.8661 2.15612 16.1787C2.46868 16.4912 2.89261 16.6668 3.33464 16.6668H16.668C17.11 16.6668 17.5339 16.4912 17.8465 16.1787C18.159 15.8661 18.3346 15.4422 18.3346 15.0002V5.00016C18.3346 4.55814 18.159 4.13421 17.8465 3.82165C17.5339 3.50909 17.11 3.3335 16.668 3.3335Z" fill="#8A8A8A"></path>
                                        </svg>
                                        <span>support.vn@vinfastauto.com</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx("connect-to-vinfast")}>
                                <div>Kết nối với VinFast</div>
                                <div className={cx("social")}>
                                    <a className={cx("social-item")} href="https://www.facebook.com/VinFastAuto.Official" target="_blank" title="Facebook" rel="noopener noreferrer nofollow">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0013 1.7002C5.41797 1.7002 1.66797 5.44186 1.66797 10.0502C1.66797 14.2169 4.71797 17.6752 8.7013 18.3002V12.4669H6.58464V10.0502H8.7013V8.20853C8.7013 6.11686 9.94297 4.96686 11.8513 4.96686C12.7596 4.96686 13.7096 5.1252 13.7096 5.1252V7.18353H12.6596C11.6263 7.18353 11.3013 7.8252 11.3013 8.48353V10.0502H13.618L13.243 12.4669H11.3013V18.3002C13.265 17.9901 15.0531 16.9881 16.3429 15.4752C17.6327 13.9624 18.3391 12.0382 18.3346 10.0502C18.3346 5.44186 14.5846 1.7002 10.0013 1.7002V1.7002Z" fill="#8A8A8A"></path>
                                        </svg>
                                    </a>
                                    <a className={cx("social-item")} href="https://www.youtube.com/channel/UCA5OijDHvvWJ3vy5iVdWcAQ" target="_blank" title="Youtube" rel="noopener noreferrer nofollow">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.33464 12.4998L12.6596 9.99984L8.33464 7.49984V12.4998ZM17.968 5.97484C18.0763 6.3665 18.1513 6.8915 18.2013 7.55817C18.2596 8.22484 18.2846 8.79984 18.2846 9.29984L18.3346 9.99984C18.3346 11.8248 18.2013 13.1665 17.968 14.0248C17.7596 14.7748 17.2763 15.2582 16.5263 15.4665C16.1346 15.5748 15.418 15.6498 14.318 15.6998C13.2346 15.7582 12.243 15.7832 11.3263 15.7832L10.0013 15.8332C6.50964 15.8332 4.33464 15.6998 3.4763 15.4665C2.7263 15.2582 2.24297 14.7748 2.03464 14.0248C1.9263 13.6332 1.8513 13.1082 1.8013 12.4415C1.74297 11.7748 1.71797 11.1998 1.71797 10.6998L1.66797 9.99984C1.66797 8.17484 1.8013 6.83317 2.03464 5.97484C2.24297 5.22484 2.7263 4.7415 3.4763 4.53317C3.86797 4.42484 4.58464 4.34984 5.68464 4.29984C6.76797 4.2415 7.75964 4.2165 8.6763 4.2165L10.0013 4.1665C13.493 4.1665 15.668 4.29984 16.5263 4.53317C17.2763 4.7415 17.7596 5.22484 17.968 5.97484V5.97484Z" fill="#8A8A8A"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </footer >
    )
}
export default Footer;