import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allTodos: [],
  doneTodo: [],
  visibleTodos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.allTodos = [...state.allTodos, action.payload]
    },
    removeTodos: (state, action) => {
      state.allTodos = state.allTodos.filter((el) => el.id !== action.payload)
      state.doneTodo = state.allTodos.filter(
        (el) => el.id !== action.payload && el.done,
      )
      state.visibleTodos = state.allTodos.filter(
        (el) => el.id !== action.payload,
      )
    },
    toggleDoneTodos: (state, action) => {
      const idx = state.allTodos.findIndex((el) => el.id === action.payload)
      const oldItem = state.allTodos[idx]
      const newItem = {
        ...oldItem,
        done: !oldItem.done,
      }
      state.allTodos = [
        ...state.allTodos.slice(0, idx),
        newItem,
        ...state.allTodos.slice(idx + 1),
      ]
      state.doneTodo = state.allTodos.filter((el) => el.done === true)
      state.visibleTodos = state.allTodos.filter((el) => el.id === newItem)
    },
    editingTodos: (state, action) => {
      const idx = state.allTodos.findIndex((el) => el.id === action.payload.id)
      let oldItem = state.allTodos[idx]
      oldItem = { ...action.payload }
      const newArr = (arr) => {
        return [...arr.slice(0, idx), oldItem, ...arr.slice(idx + 1)]
      }
      state.allTodos = newArr(state.allTodos)
      state.doneTodo = state.doneTodo.map((el) => {
        if (el.id === oldItem.id) el = oldItem
        return el
      })
    },
    setVisibleTodos: (state, action) => {
      state.visibleTodos = action.payload
    },
  },
})

export const {
  addTodos,
  removeTodos,
  toggleDoneTodos,
  editingTodos,
  setVisibleTodos,
} = todosSlice.actions

export default todosSlice.reducer
