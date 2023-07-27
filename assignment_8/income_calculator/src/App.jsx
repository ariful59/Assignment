import { HashRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import ExpenseTransactions from "./pages/ExpenseTransactions"
import IncomeTransactions from "./pages/IncomeTransactions"


function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/expense' element={<ExpenseTransactions/>} />
          <Route path='/income' element={<IncomeTransactions/>} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
