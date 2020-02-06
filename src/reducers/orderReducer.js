const initialState = {
    order: [{}],
}

const orderReducer = (state = initialState, action) => {

    switch(action.type){
        case "SET_ORDER":
            const orderList = action.payload.order
            return { ...state, order: orderList}

       default:
           return state;
    }
}

export default orderReducer