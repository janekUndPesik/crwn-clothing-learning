import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentification from "./routes/authentification/authentification.component";
import Home from "./routes/home/home.component";
import Shop from './routes/shop/shop.component';
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<Authentification />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
