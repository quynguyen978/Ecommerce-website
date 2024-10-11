import HomeBanner from './HomeBanner/HomeBanner';
import HomeBrowseCategories from './HomeBrowseCategories/HomeBrowseCategories';
import HomeTopTrending from './HomeTopTrending/HomeTopTrending';
import HomeShipping from './HomeShipping/HomeShipping';
import './HomeContent.css';
import HomeSubcribe from './HomeFormSubcribe/HomeSubcribe';

function HomeContent() {
      return <div className='HomeContentContainer'>
                  <HomeBanner/>
                  <HomeBrowseCategories/>
                  <HomeTopTrending/>
                  <HomeShipping/>
                  <HomeSubcribe/>
            </div>
}
export default HomeContent;