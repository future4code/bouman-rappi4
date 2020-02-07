import { setProfile} from '../action/profile'
import profileReducer from './profileReducer'

describe("Testando profileReducer", () => {
    test("testando o SET_PROFILE", () => {
        // preparação
        const currentState = {
            profile: [{}],
        }

        const action = setProfile('profile teste')

        //execução
        const newState = profileReducer(currentState,action)

        //verificação
        expect(newState.profile).toHaveLength(13)
        expect(newState.profile).toEqual('profile teste')
    })
})