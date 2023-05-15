import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  editedTodo: {
    title: null,
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
      state.editedTodo = {
        title: null,
        desc: null,
        time: null,
        id: null,
        done: null,
      }
    },
    changeName: (state, action) => {
      state.editedTodo.title = action.payload
    },
    changeDesc: (state, action) => {
      state.editedTodo.desc = action.payload
    },
    changeTime: (state, action) => {
      state.editedTodo.time = action.payload
    },
  },
})

export const {
  openEditBlock,
  closeEditedBlock,
  changeName,
  changeDesc,
  changeTime,
} = editSlice.actions

export default editSlice.reducer
