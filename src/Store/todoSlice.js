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
      state.allTodos.push(action.payload)
    },
    removeTodos: (state, action) => {
      const idToRemove = action.payload
      state.allTodos = state.allTodos.filter((el) => el.id !== idToRemove)
      state.doneTodo = state.doneTodo.filter((el) => el.id !== idToRemove)
      state.visibleTodos = state.visibleTodos.filter(
        (el) => el.id !== idToRemove,
      )
    },
    toggleDoneTodos: (state, action) => {
      const idToToggle = action.payload
      const todo = state.allTodos.find((el) => el.id === idToToggle)
      if (todo) {
        todo.done = !todo.done
        state.doneTodo = state.allTodos.filter((el) => el.done)
        state.visibleTodos = state.allTodos.map((el) => el)
      }
    },
    editingTodos: (state, action) => {
      const updatedTodo = action.payload
      const idx = state.allTodos.findIndex((el) => el.id === updatedTodo.id)
      if (idx !== -1) {
        state.allTodos[idx] = updatedTodo
        state.doneTodo = state.allTodos.filter((el) => el.done)
      }
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
