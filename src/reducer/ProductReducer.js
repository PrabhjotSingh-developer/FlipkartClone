import React from 'react'
import { act } from 'react-dom/test-utils';

const ProductReducer = (state,action) => {
  switch(action.type)
  {
     case "SET_LOADING":
                 return{... state,isLoading:true};
     case "SET_API_DATA":
                const featureData = action.payload.filter((item)=>
                {
                  return  item.featured===true
               })         
               return {... state,isLoading:false,products:action.payload, featureProducts:featureData
            }
     case "SET_API_DATA1":
               const featureData1 = action.payload.filter((item)=>{
                  return (item.category === "men's clothing" || item.category === "women's clothing" ) 
               })
               console.log(featureData1)
               return {...state,isLoading:false,products1:action.payload,featureProducts1:featureData1}
  
     case "API_ERROR":
               return {... state,isLoading:false,isError:true}
             
     default:
         return state;
        
  }
  return state;

}

export default ProductReducer
