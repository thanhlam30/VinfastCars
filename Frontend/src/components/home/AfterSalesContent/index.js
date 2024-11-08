import styles from './afterSalesContent.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AfterSalesContent() {
    return (
        <div className={(cx("wrap"))}>
            <div className={(cx("container"))}>
                <div className={("row")}>
                    <div className={cx("col-lg-6")}>
                        <div>
                            <div className={cx("card", "after-sale-card-1")}>
                                <Link to="/">
                                    <div className={cx("card-content")}>
                                        <div className={cx("title")}>Showroom &amp; Trạm sạc </div>
                                        <div className={cx("detail")}>Xem chi tiết</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx("col-lg-6")}>
                        <div>
                            <div className={cx("card", "after-sale-card-2")}>
                                <Link to="/">
                                    <div className={cx("card-content")}>
                                        <div className={cx("title")}>Cộng động Vinfast Toàn cầu</div>
                                        <div className={cx("detail")}>Xem chi tiết</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AfterSalesContent;