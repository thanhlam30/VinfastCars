import styles from './serviceContent.module.css';
import classNames  from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ServiceContent(){
    return(
        <div className={cx("wrap")}>
            <div className={cx("container")}>
                <div className={cx("row")}>
                    <div className={cx("col-lg-4","offset-lg-1")}>
                        <div className={cx("card","service-card")}>
                            <div className={cx("title")}>Bảo hành & Dịch vụ</div>
                            <div className={cx("desc")}>VinFast đã đầu tư nghiêm túc và bài bản để phát triển hệ thống Showroom, Nhà phân phối và xưởng dịch vụ rộng khắp, đáp ứng tối đa nhu cầu của Khách hàng.</div>
                            <div className={cx("detail")}>
                                <Link to='/' className={cx("schedule-btn")}><span>Đặt lịch bảo dưỡng</span></Link>
                                <Link to='/' className={cx("privacy-btn")}><span>Chính sách</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceContent;