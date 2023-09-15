import { FAIL, SUCCESS } from "../constants/hotelConstants";


export const homeReducer =(state={hotel:[]},action)=>{

    console.log(action.type);

    switch(action.type){
        case SUCCESS:
            return{
                hotel:action.payload
            }
            case FAIL:
                return{
                    hotel:action.payload
                }
                default:return state

    }
}