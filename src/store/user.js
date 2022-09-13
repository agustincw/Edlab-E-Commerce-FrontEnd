import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER")
export const setLogout= createAction("SET_LOGOUT")
const userReducer = createReducer( localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
, {
    [setUser]:(state,action) => action.payload,
    [setLogout]:(state,action) => {return {}}
})

export default userReducer
