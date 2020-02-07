import { setOrder } from '../action/order'
import orderReducer from './orderReducer'

describe("Testando orderReducer", () => {
    test("testando o SET_ORDER", () => {
        // preparação
        const currentState = {
            order: [{}],
        }

        const action = setOrder('order teste')

        //execução
        const newState = orderReducer(currentState,action)

        //verificação
        expect(newState.order).toHaveLength(11)
        expect(newState.order).toEqual('order teste')
    })
})