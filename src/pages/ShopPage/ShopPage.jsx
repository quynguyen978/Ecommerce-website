import ShopHeader from "./ShopHeader/ShopHeader";
import ShopCategories from './ShopCategories/ShopCategories';
import ShopListItem from "./ShopListItem/ShopListItem";
import './ShopPage.css';
function ShopPage() {
      return (
            <div>
                  <ShopHeader title='SHOP'/>
                  <div className="Cate_List_conainer">
                        <ShopCategories/>
                        <ShopListItem/>
                  </div>
            </div>
      )
}
export default ShopPage;