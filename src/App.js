import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './pages/Hero';
import CitiesPage from "./pages/CitiesPage"
import NewCity from "./pages/NewCity"
import EditCity from './pages/EditCity';
import NotFound from './pages/NotFound';
import City from './pages/City';
import WebsiteLayout from './layouts/WebsiteLayout';
import MyTineraries from './pages/MyTineraries';

function App() {
  return (
    <BrowserRouter>
    <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/cities' element={<CitiesPage />} />
          <Route path='/new-city' element={<NewCity />} />
          <Route path='/edit-city' element={<EditCity />} />
          <Route path='/edit-city/:id' element={<EditCity />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/city/:id' element={<City />} />
          <Route path='/mytineraries' element={<MyTineraries />} />
        </Routes>
    </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
