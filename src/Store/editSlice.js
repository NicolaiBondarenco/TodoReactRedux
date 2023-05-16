import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  editedTodo: {
    name: null,
    desc: null,
    time: null,
    id: null,
    done: null,
  },
}

export const editSlice = createSlice({
  name: 'editTodos',
  initialState,
  reducers: {
    openEditBlock: (state, action) => {
      state.editedTodo = action.payload
    },
    closeEditedBlock: (state) => {
      state.editedTodo = initialState.editedTodo
    },
    changeMultiply: (state, action) => {
      const { value, name } = action.payload
      state.editedTodo = {
        ...state.editedTodo,
        [name]: value,
      }
    },
  },
})

export const {
  openEditBlock,
  closeEditedBlock,
  changeMultiply,
} = editSlice.actions

export default editSlice.reducer
