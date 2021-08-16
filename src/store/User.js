export const UserModule = {
    namespaced:true,

    state: {
        user:null
    },

    //mutation are the functions that effect the STATE
    mutations: {
        SET_USER(state,user){
            state.user = user;
        }
    },

    //Actions are the function you call throughout your appliation
    actions: {
        setUser({commit},user){
            commit('SET_USER',user);
        }
    },
}
