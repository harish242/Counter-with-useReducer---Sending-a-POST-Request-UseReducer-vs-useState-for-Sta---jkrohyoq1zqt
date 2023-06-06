// import {state} from "../components/App"
const counterReducer = (state,action) =>{
if(action.type==="Increment"){
    return {count:state.count+1}
}
if(action.type==="Decrement"){
    return {count:state.count-1}
}
}

export {counterReducer}
