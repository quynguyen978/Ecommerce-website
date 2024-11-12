import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DetailPageImg from "./DetailPageImg/DetailPageImg";
import DetailPageItemInfor from './DetailPageItemInfor/DetailPageItemInfor';
import { fetchProducts } from "../../Utilities/fetchProduct";
import DetailPageDescrip from "./DetailPageDescrip/DetailPageDescrip";
import DetailRelateProducts from "./DetailRelateProducts/DetailRelateProducts";
import './DetailPage.css';

function DetailPage() {
      // the id is the product's name
      const { id } = useParams();
      const dispatch = useDispatch();
      const {products} = useSelector((state) => state.fetchdata);
      const [selectedItem, setSelectedItem] = useState(null);
      const [relatedProducts, setRelatedProduct] = useState(null);
      // console.log('idddd', products[0]._id.$oid);
      // fetdata
      useEffect(() => {
            dispatch(fetchProducts());
      }, [dispatch])

      // wait untill finish fetdata
      useEffect(() => {
            if(products.length > 0) {
                  const foundItem = products.find((product) => product.name === id);
                  const foundListItems = products.filter((product) => product.category === foundItem.category);
                  const itemIndex = foundListItems.findIndex((item) => item === foundItem);
                  const newListRelate = foundListItems.splice(itemIndex, 1);
                  setRelatedProduct(newListRelate);
                  setRelatedProduct(foundListItems);
                  setSelectedItem(foundItem);
            }
            
      }, [products, id]);

  if (!products.length) {
        // Optionally render a loading state
        return <h5 className="fw-bold ms-5">Loading...</h5>;
    }

    if (!selectedItem) {
        // Handle case when product is not found
        return <p>Product not found.</p>;
    }

  return (
      <div className="DetailPageContainer">
            <div className="detailPage_grid">
                  <DetailPageImg selectProduct = {selectedItem}/>
                  <DetailPageItemInfor selectProduct = {selectedItem}/>
            </div>
            <DetailPageDescrip selectProduct= {selectedItem}/>
            <DetailRelateProducts relateList = {relatedProducts}/>
      </div>
    );
}

export default DetailPage;
