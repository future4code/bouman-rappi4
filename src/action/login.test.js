import axios from 'axios'
import { login, signup, addAddress, setFullAddressAction, getFullAddress } from './login';

describe("Testing all login actions", () => {
   test("Test if login action works", async () => {
      const loginMock = [{
         login: "test@ando.com",
         password: "12345678910"
      }]

      const dispatchMock = jest.fn()
      window.alert = jest.fn()

      axios.post = jest.fn().mockReturnValue({
         status: 200,
      })

      await login(loginMock)(dispatchMock)

      expect(dispatchMock).toHaveBeenCalled()
   });

   test("Test if signup action works", async () => {
      const signupMock = {
         name: "Testandra",
         email: "test@andra.com",
         cpf: "77777777777",
         password: "12345678910",
      }

      const dispatchMock = jest.fn()
      window.alert = jest.fn()

      axios.post = jest.fn().mockReturnValue({
         status: 200,
      })

      await signup(signupMock)(dispatchMock)

      expect(dispatchMock).toHaveBeenCalled()
   });

   test("Test if addAddress action works", async () => {
      const headers = {
         auth: "token",
      }

      const addAddressMock = {
         street: "Rua testoide",
         number: "321",
         neighbourhood: "testahood",
         city: "Test City",
         state: "Testate",
         complement: "testhouse",
      }

      const dispatchMock = jest.fn()
      window.alert = jest.fn()

      axios.put = jest.fn().mockReturnValue({
         status: 200,
      })

      await addAddress(addAddressMock, headers)(dispatchMock)

      expect(dispatchMock).toHaveBeenCalled()
   });
});

const addressMock = {
   street: "R. Afonso Braz",
   number: "177",
   neighbourhood: "Vila N. Conceição",
   city: "São Paulo",
   state: "SP",
   complement: "71"
};

describe("Testing action set address actions", () => {
   test("Test setFullAddressAction action-creator works", () => {
      const expectedAction = {
         type: "SET_FULL_ADDRESS",
         payload: {
            address: addressMock,
         }
      };

      const action = setFullAddressAction(addressMock);

      expect(action).toEqual(expectedAction);
      expect(action.type).toEqual("SET_FULL_ADDRESS");
   });

   test("Test getFullAddress action works", async () => {     
      const dispatchMock = jest.fn();
      window.alert = jest.fn();

      axios.get = jest.fn(() => {
         return {
            address: addressMock,
         }
      })

      await getFullAddress()(dispatchMock)

      expect(dispatchMock).toHaveBeenCalledWith(setFullAddressAction(addressMock));
   });
});