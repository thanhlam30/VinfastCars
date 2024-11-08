import styles from "./batteryContent.module.css";
import classNames from "classnames/bind";
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

function BatteryContent() {
    return (
        <div className={cx("wrap")}>
            <div className={cx("container")}>
                <div className={cx("row")}>
                    <div className={cx("col-lg-6","col-left")}>
                        <div className={cx("card","battery-card-1")}>
                            <Link to="/">
                                <div className={cx("card-content")}>
                                    <div className={cx("title")}>Pin &amp; Trạm sạc ô tô điện</div>
                                    <div className={cx("desc")}>Với phương châm luôn đặt lợi ích Khách hàng lên hàng đầu, VinFast áp dụng chính sách cho thuê pin độc đáo, ưu việt và khác biệt với tất cả các mô hình cho thuê pin từ trước tới nay trên thế giới.</div>
                                    <div className={cx("detail")}>Xem chi tiết</div>
                                </div>
                            </Link>
                        </div>
                        <div className={cx("card","battery-card-2")}>
                            <Link to="/">
                                <div className={cx("card-content")}>
                                    <div className={cx("title")}>Pin &amp; Trạm sạc xe máy điện</div>
                                    <div className={cx("desc")}>Với phương châm luôn đặt lợi ích Khách hàng lên hàng đầu, VinFast áp dụng chính sách cho thuê pin độc đáo, ưu việt và khác biệt với tất cả các mô hình cho thuê pin từ trước tới nay trên thế giới.</div>
                                    <div className={cx("detail")}>Xem chi tiết</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={cx("col-lg-6", "col-right")}>
                        <div id="battery-card-3" className={cx("card","battery-card-3")}>
                            <Link to="/">
                                <div>
                                    <div className={cx("title")}>Thiết bị sạc di động</div>
                                    <div className={cx("desc")}>VinFast cung cấp đa dạng giải pháp sạc để đáp ứng nhu cầu sử dụng của khách hàng một cách thuận tiện nhất.</div>
                                    <div className={cx("detail")}>Xem chi tiết</div>
                                    <div>
                                        <img src="https://vinfastauto.com/themes/porto/img/homepage-v2/mobile-charger.webp" alt="Thiết bị sạc di động" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BatteryContent;