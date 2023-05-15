import { Routes, Route } from 'react-router-dom'
import { TodoList } from './Components/TodoList/TodoList'
import { NotFound } from './Components/NotFound/NotFound'
import { DoneList } from './Components/DoneList/DoneList'

import styles from './App.module.scss'

export const App = () => {
  return (
    <div className={styles.root}>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/doneList" element={<DoneList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
