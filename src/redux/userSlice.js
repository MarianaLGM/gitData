//Define las acciones necesarias para agregar una tarea y eliminar una tarea.
// Exporta las acciones para poder utilizarlas en otros archivos.

//5 creamos el userSlice

import {createSlice} from "@reduxjs/toolkit"

//estado inicial, como hacíamos con el useState

const initialState={
    name: null,
    login: null,
    followers: null,
    public_repos: null,
    avatar_url: null,
}
export const userSlice =createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
        const {name, login, followers, public_repos, avatar_url}= action.payload;//son los datos que nos trae directamente desde la api
        state.name= name;
        state.login= login;
        state.followers= followers;
        state.public_repos=public_repos;
        state.avatar_url= avatar_url;
        },
        changeUser:(state,action)=>{
        state.login = action.payload 
        },
    },
});


export const{addUser,changeUser}=userSlice.actions
export default userSlice.reducer;


