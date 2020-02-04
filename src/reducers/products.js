const initialState = {
    allProducts: [],
}

const productsReducer = (state = initialState, action) =>{
    switch(action.type){
        case "SET_PRODUCTS":
            const productsList =  action.payload.allProducts
            return {...state, allProducts: productsList}

        default:
            return state;
    }
}

export default productsReducer;