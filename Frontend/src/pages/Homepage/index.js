import AfterSalesContent from '../../components/home/AfterSalesContent';
import BatteryContent from '../../components/home/BatteryContent';
import FutureGreenContent from '../../components/home/FutureGreenContent';
import JoinTheCharge from '../../components/home/JoinTheCharge';
import ServiceContent from '../../components/home/ServiceContent';
import SlideBanner from '../../components/home/SlideBanner';
import SlideIntroduceProduct from '../../components/home/SlideIntroduceProduct';
import styles from './home.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home(){
    return (
        <div className={cx("wrap")}>
            <SlideBanner/>
            <SlideIntroduceProduct/>
            <BatteryContent/>
            <ServiceContent/>
            <FutureGreenContent/>
            <AfterSalesContent/>
            <JoinTheCharge/>
        </div>
    )
}
export default Home;