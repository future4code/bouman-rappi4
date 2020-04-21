const initialState = {
    profile: [{}],
}

 const profileReducer = (state = initialState, action) => {
     switch(action.type){
         case "SET_PROFILE":
             const profileList = action.payload.profile
             return { ...state, profile: profileList}

        default:
            return state;
     }
 }

 export default profileReducer

