import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import CategoryPage from './pages/CategoryPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ReviewPage from './pages/ReviewPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path=":category" element={<CategoryPage />} />
        <Route path=":category/:slug" element={<ReviewPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
