import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const GetEmployees = createAction('GetEmployees');

export default createReducer(initialState, {
    [GetEmployees]: function (state) {
        return state.data
    }
})