const initialState = {
    order: [{}],
}

const orderReducer = (state = initialState, action) => {
    console.log("testando reducer order", action.payload)

    switch(action.type){
        case "SET_ORDER":
            const orderList = action.payload.order
            return { ...state, order: orderList}

       default:
           return state;
    }
}

export default orderReducer