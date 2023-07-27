import React, { createContext, useContext, useEffect, useReducer } from 'react'
import axios from 'axios';
import reducer from '../reducer/ProductReducer'
const AppContext = createContext();
// async function 

// useEffect call krno upperlo function 

//Reducer bnana alag file ma bnano

const API = "https://api.pujakaitem.com/api/products";
const API1 = "https://fakestoreapi.com/products"
const initialState = {
     isLoading:false,
     isError:false,
     products:[],
     featureProducts:[],
     products1:[],
     featureProducts1:[]
}
const AppProvider = ({children}) => {
     const [state,dispatch] = useReducer(reducer,initialState);
     const getProducts= async(url) =>
     {
          dispatch({type:"SET_LOADING"});
          try{
              const res = await axios.get(url);
              const products = res.data; 
              dispatch({type:"SET_API_DATA",payload:products});
          }
          catch(error)
          {
             dispatch({type:"API_ERROR"})
          }
     }
     const getProduct1 = async(url) => {
          dispatch({type:"SET_LOADING"});
          try{
              const res = await axios.get(url);
              const products = res.data; 
              dispatch({type:"SET_API_DATA1",payload:products});
          }
          catch(error)
          {
             dispatch({type:"API_ERROR"})
          }
     }
    useEffect(()=>{
         getProducts(API);   
         getProduct1(API1);
    },[])
    return  <AppContext.Provider value={{... state}}>{children}</AppContext.Provider>
  
}
//Custom hook
const useProductContext = () =>{
    return useContext(AppContext) ;
}
export {AppProvider,AppContext,useProductContext}