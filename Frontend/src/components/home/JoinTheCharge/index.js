import styles from './joinTheCharge.module.css';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


function JoinTheCharge() {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("");
    const [success, setSuccess] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            setEmailError("Định dạng email không đúng");
            setSuccess("");
        } else {
            setSuccess("Bạn đã đăng ký nhận tin thành công");
            setEmailError("");
        }
    }
    return (
        <div className={cx("wrap")}>
            <div className={cx("container")}>
                <div className={cx("row")}>
                    <div className={cx("")}>
                        <div className={cx("form-wrapper")}>
                            <form onSubmit={handleSubmit}>
                                <p className={cx("title")}>Đăng ký nhận thông tin </p>
                                <p className={cx("desc")}>Đăng ký nhận thông tin chương trình khuyến mãi, dịch vụ VinFast.</p>
                                <div className={cx("join-the-charge")}>
                                    <div className={(cx("block-input-email"))}>
                                        <input
                                            className={cx("form-control","input-email")}
                                            type="text"
                                            value={email}
                                            placeholder="Nhập email của bạn"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <input className={cx("btn-register")} type="submit" value="ĐĂNG KÝ"></input>
                                    </div>
                                    <div>
                                        <p className={cx("succes-message")}>{success}</p>
                                        <p className={cx("error-message")}>{emailError}</p>
                                    </div>
                                    <div>
                                        <p className={cx("privacy-content")}>Bằng cách đăng ký, Quý khách xác nhận đã đọc, hiểu và đồng ý với <Link to="/">Chính sách Quyền riêng tư</Link> của VinFast.</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JoinTheCharge;