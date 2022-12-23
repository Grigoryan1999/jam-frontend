import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { AboutPage } from './pages/about/AboutPage';
import { LandingPage } from './pages/landing/LandingPage';
import { MapPage } from './pages/map/MapPage';
import { OrderPage } from './pages/order/OrderPage';
import { NotFountPage } from './pages/pageNotFound/PageNotFound';

import GlobalStyles, { CenterWrapper, PageContainer } from './global'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCategories } from './redux/actions/actionCreators';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllCategories());
}, [dispatch]);

  return (
    <div className="App">
      <Header />
      <CenterWrapper>
        <PageContainer>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFountPage />} />
        </Routes>
        </PageContainer>
      </CenterWrapper>
      <Footer />
      <GlobalStyles />
    </div>
  );
}

export default App;
