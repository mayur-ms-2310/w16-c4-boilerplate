// use axios for api call
import axios from "axios";
import { FILTER_DATA, GET_DATA_FAIL, GET_DATA_REQ, GET_DATA_SUCCESS, SORT_DATA } from "./actionTypes";


let getproductsreq = ()=>({
    type : GET_DATA_REQ
})

let getproductssuccess = (payload)=>({
    type : GET_DATA_SUCCESS,
    payload,
})

let getproductsfail = ()=>({
    type : GET_DATA_FAIL,
})


let getProductsData = ()=> async (dispatch)=> {
dispatch(getproductsreq())
try {
    let res = await axios.get(`https://movie-fake-server.herokuapp.com/products`)
    let data = await res.data
    console.log(data)
dispatch(getproductssuccess(data))
    
} catch (error) {
    dispatch(getproductsfail(error))
}

}

const sortProducts = (payload) => ({
type : payload,


});

const filterProducts = (payload) => {
return {
    type : FILTER_DATA,
    payload,
}

};




export { getProductsData, sortProducts, filterProducts };
