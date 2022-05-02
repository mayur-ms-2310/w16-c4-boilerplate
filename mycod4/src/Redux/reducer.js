import { FILTER_DATA, GET_DATA_FAIL, GET_DATA_REQ, GET_DATA_SUCCESS, SORT_ASC, SORT_DATA, SORT_DESC } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  
switch(type){
  case GET_DATA_REQ :{
    return {
    ...state,
  isLoading: true,
  isError: false,
  }
}

case GET_DATA_SUCCESS :{
  return {
    ...state ,
    data : payload,
    isLoading : false,
    isError : false
  }
}
case GET_DATA_FAIL : {
  return {
    ...state,
  isLoading : false,
  isError: true,
  }
}
case FILTER_DATA : {
  console.log(payload)
  return {
    ...state,
    filterdata : state.data.filter((el)=>{
      return el.category == payload
    })
  }
}

case "asc" : {
  return {
...state,
data : [...state.data].sort((a,b)=>{
  return a.price - b.price
})
  }
}
case "desc": {
  return {
...state,
data : [...state.data].sort((a,b)=>{
  return b.price - a.price
})
  }
}

default : {
  return state
}
}




};
export { reducer };
