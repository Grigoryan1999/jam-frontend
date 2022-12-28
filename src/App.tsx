import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AboutPage } from "./pages/about/AboutPage";
import { LandingPage } from "./pages/landing/LandingPage";
import { MapPage } from "./pages/map/MapPage";
import { OrderPage } from "./pages/order/OrderPage";
import { authSelector } from "./redux/selectors";
import GlobalStyles, { CenterWrapper, PageContainer } from "./global";
import { CLOSE_DELAY } from "./assets/consts";
import { AuthorizationPage } from "./pages/authorization/AuthorizationPage";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { UserPage } from "./pages/userPage/UserPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { signIn } from "./redux/actions/actionCreators";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);

  useEffect(() => {
    dispatch(signIn());
  }, [dispatch]);

  return (
    <div className="App">
      <ToastContainer autoClose={CLOSE_DELAY} />
      <Header />
      <CenterWrapper>
        <PageContainer>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/about" element={<AboutPage />} />
            {auth.login ? (
              <>
                <Route path="/my" element={<UserPage />} />
              </>
            ) : (
              <>
                <Route path="/authorization" element={<AuthorizationPage />} />
              </>
            )}
            <Route path="*" element={<Navigate to="/my" />} />
          </Routes>
        </PageContainer>
      </CenterWrapper>
      <Footer />
      <GlobalStyles />
    </div>
  );
}

export default App;
