import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, sortProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Select } from "./Styled";
import { Grid } from "./Styled";

export const Products = () => {
let data = useSelector((state)=>state.data)
let loading = useSelector((state)=>state.isLoading)
 let error  = useSelector((state)=>state.isError)
console.log(data)
let dispatch = useDispatch()

  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
dispatch(getProductsData())
  }, [dispatch]);

  const handleSort = (e) => {
    // dispatch sort products on change
    console.log(e.target.value)
    dispatch(sortProducts(e.target.value))
    
  };
  return  loading?(<h1>....loading</h1>): error? (<h1>error</h1>):(
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option onChange={handleSort}>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
      {data.map((item)=>{
      return <ProductCard item = {item}/>

      })}
    
      </Grid>
    </>
  );
};
