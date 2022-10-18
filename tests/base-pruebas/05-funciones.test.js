import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas es 05-funciones', () => { 

    test('getUser debe retornar un objeto', () => { 

       const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
        }
        
        const user = getUser();

        expect(testUser).toEqual(user);


     })

     test('getUsuarioActivo debe retornar un objeto', () => { 

        const name2 = "Nahuel";
        // const testUser2 = {
        //     uid: 'ABC567',
        //     username: name2
        // };

        const user = getUsuarioActivo(name2);

        expect(user).toEqual(
            {
                uid: 'ABC567',
                username: name2
            }
        )

      })

 })