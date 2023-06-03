const INIT_STATE={
 blogs:[]
}
export const BlogReducer=(state=INIT_STATE,action)=>{
 switch(action.type){
  case "DISPLAY":
   return{
    state,
    blogs:[state.blogs,action.payload]
   }
   default:
    return state

 }


}