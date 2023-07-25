import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import ExpenseTransactions from './pages/expenseTransactions'
import IncomeTransactions from './pages/incomeTransactions'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/expense' element={<ExpenseTransactions/>} />
          <Route path='/income' element={<IncomeTransactions/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
