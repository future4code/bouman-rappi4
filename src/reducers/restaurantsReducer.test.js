import { setRestaurants, setRestaurantIdAction, setRestaurantDetailsAction } from '../action/restaurants'
import restaurantsReducer from './restaurantsReducer'

describe("Testando restaurantsReducer", () => {
    test("testando o SET_RESTAURANTS", () => {
        // preparação
        const currentState = {
            allRestaurants: [],
        }

        const action = setRestaurants('restaurants teste')

        //execução
        const newState = restaurantsReducer(currentState,action)

        //verificação
        expect(newState.allRestaurants).toHaveLength(17)
        expect(newState.allRestaurants).toEqual('restaurants teste')
    })

    test("testando o SET_RESTAURANT_ID_ACTION", () => {
        // preparação
        const currentState = {
            selectedRestaurantId: "",
        }

        const action = setRestaurantIdAction('restaurants teste')

        //execução
        const newState = restaurantsReducer(currentState,action)

        //verificação
        expect(newState.selectedRestaurantId).toHaveLength(17)
        expect(newState.selectedRestaurantId).toEqual('restaurants teste')
    })

    test("testando o SET_RESTAURANT_DETAILS", () => {
        // preparação
        const currentState = {
            selectedRestaurant: {},
        }

        const action = setRestaurantDetailsAction('restaurants teste')

        //execução
        const newState = restaurantsReducer(currentState,action)

        //verificação
        expect(newState.selectedRestaurant).toHaveLength(17)
        expect(newState.selectedRestaurant).toEqual('restaurants teste')
    })
})