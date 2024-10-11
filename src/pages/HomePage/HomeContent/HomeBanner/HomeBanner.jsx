import bannerImg from '../../../../Resource Assignment 03/banner1.jpg';
import Button from '../../../../components/Button/Button';
import './homeBanner.css';

function HomeBanner() {
      return (
            <div className='HomeBanner'>
                        <img src={bannerImg} alt="" />
                        <div className='bannerAdvertise'>
                              <p>NEW INSPIRATION 2020</p>
                              <h4>20% OFF ON NEW SEASON</h4>
                              <Button title='Browsecololections' normalBtn Italic/>
                        </div>
            </div>
      )
}
export default HomeBanner;
