import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterProducts, getProductsData } from "../Redux/actions";
import { Grid } from "./Styled";

export const CategoryCard = () => {
  let {men} = useParams()

  let fildata = useSelector((state)=>state.filterdata)
  console.log(fildata)
  let dispatch = useDispatch()

  console.log(men)

  useEffect(() => {
    // dispatch filter Products for every ID change
dispatch(filterProducts(men))
// dispatch(getProductsData())
 }, [men]);

  return (
    <Grid data-testid = "category-container">
      {/* Iterate and print product cards that are of this category */}
{fildata&&fildata.map((el)=>{
       return  <div key={el.id}>
  <h3>{el.title}</h3>
  <img src={el.image}/>
  <h3>{el.brand}</h3>
  <h3>Price : {el.price}</h3>
      </div>

      })}

    </Grid>
  );
};
