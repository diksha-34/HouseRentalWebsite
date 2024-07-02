import { api } from "../../Config/ApiConfig";
import { FIND_HOUSE_BY_ID_FAILURE, FIND_HOUSE_BY_ID_REQUEST, FIND_HOUSE_BY_ID_SUCCESS, FIND_HOUSE_FAILURE, FIND_HOUSE_REQUEST, FIND_HOUSE_SUCCESS } from "./ActionType";

export const findHouseByLocationAndPrice = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_HOUSE_REQUEST });
  const { city, 
         minPrice,
         maxPrice,
         pageNumber,
         pageSize 

        } = reqData;
  try {
    const { data } = await api.get(`/search?city=${city}&minPrice=${minPrice}&maxPrice=${maxPrice}&pageNumber=${pageNumber}&pageSize=${pageSize}`); // Make sure to include price in the API call
    dispatch({ type: FIND_HOUSE_SUCCESS, payload: data });
    console.log("House data - ", data);
  } catch (error) {
    dispatch({ type: FIND_HOUSE_FAILURE, payload: error.message });
  }
};


export const findHouseById=(reqData)=>async(dispatch)=>{
    dispatch({type:FIND_HOUSE_BY_ID_REQUEST})
    const {houseId}=reqData;
    console.log(houseId)
    try {
        const {data}=await api.get(`/api/users/fetch/${houseId}`)
        dispatch({type:FIND_HOUSE_BY_ID_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:FIND_HOUSE_BY_ID_FAILURE, payload:error.message})
    }
}