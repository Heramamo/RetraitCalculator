import { Plan } from "@/types/retrait"
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"


interface montantRetrait
{
    montants:number
    frais:number
}

interface ListState
{
    retraits:Plan | null
    operator:string | null
    idOp: number

}

const initialState:ListState =
{
    retraits:null,
    operator:null,
    idOp: 1
}
const slice = createSlice({
    name:'list',
    initialState,
    reducers:{
        setRetraits(state, action:PayloadAction<ListState>)
        {
            state.retraits = action.payload.retraits
            state.operator = action.payload.operator,
            state.idOp = action.payload.idOp
        }
    }
})

export const {setRetraits} = slice.actions
const store =configureStore({
    reducer:slice.reducer
})
export type RootState = ReturnType<typeof store.getState>;
export default store