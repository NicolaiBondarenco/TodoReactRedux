import { configureStore } from '@reduxjs/toolkit'
import todos from './todoSlice'
import editTodos from './editSlice'

export const store = configureStore({
  reducer: {
    todos,
    editTodos,
  },
})
