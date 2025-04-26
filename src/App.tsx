import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import FoodListPage from './pages/FoodListPage';
import FoodDetailPage from './pages/FoodDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/foods" element={<FoodListPage />}></Route>
        <Route path="/foods/:id" element={<FoodDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
