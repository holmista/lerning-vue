import axios from "axios"

export default {
    async signup(context, payload) {
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNFstQYV6udij6Kam0gEoHNCZMl3jeyn4', {
            email: payload.email,
            password: payload.password,
            returnSecureToken:true
        })
        if(response.status!==200) {
            const error = new Error(response.message || 'Failed to authenticate')
            throw error
        }
        const {idToken, localId, expiresIn} = response.data
        context.commit('setUser', {userId: localId, token: idToken, tokenExpiration: expiresIn})
    },
    async login(context, payload) {
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNFstQYV6udij6Kam0gEoHNCZMl3jeyn4', {
            email: payload.email,
            password: payload.password,
            returnSecureToken:true
        })
        if(response.status!==200) {
            const error = new Error(response.message || 'Failed to authenticate')
            throw error
        }
        const {idToken, localId, expiresIn} = response.data
        context.commit('setUser', {userId: localId, token: idToken, tokenExpiration: expiresIn})
    }

}