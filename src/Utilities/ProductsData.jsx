import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./fetchProduct";

export default function ProductsData() {
      const dispatch = useDispatch();
      const { products, loading, error } = useSelector((state) => state.fetchdata);
      // call api to get product
      useEffect(() => {
            dispatch(fetchProducts());
      }, [dispatch])
      return {products, loading, error};
}