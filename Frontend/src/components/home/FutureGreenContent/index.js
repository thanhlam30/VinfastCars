import styles from "./futureGreenContent.module.css";
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);


function FutureGreenContent() {
    return (
        <div className={cx("wrap")}>
            <div className={cx("container")}>
                <div className={cx("row")}>
                    <div className={cx("col-lg-4 offset-lg-7")}>
                        <div className={cx("future-green-content")}>
                            <div className={cx("card","future-green-content-card")}>
                                <div className={cx("title")}>Phủ xanh tương lai</div>
                                <div className={cx("desc")}>Dự án Phủ xanh Tương lai là minh chứng cho cam kết mạnh mẽ của VinFast hướng tới cuộc cách mạng di chuyển điện hóa và một tương lai xanh trên toàn cầu. Một trong những mục tiêu của dự án là hiện thực hóa ‘món quà’ từ những khách hàng tiên phong dành cho môi trường, cùng chung tay kiến tạo một tương lai phát triển bền vững cho tất cả.</div>
                                <div className={cx("detail")}>
                                    <Link to="\" className={cx("desc-btn")}><span>Xem chi tiết</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FutureGreenContent;