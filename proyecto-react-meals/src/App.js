import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./pages/checkout";
import Meal from "./pages/meal";
import Menu from "./pages/menu";
import NotFound from "./pages/not-found";
import StateContext from "./contexts/state";
import reducer from "./reducers/reducer";
import initialState from "./reducers/initialState";
import { useReducer } from "react";
import Navbar from "./ui/navbar";
import CartModal from "./components/cart-modal";

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <CartModal />
        <Routes>
					<Route path="/menu" element={<Menu />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/meal/:id" element={<Meal />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
      </BrowserRouter>
    </StateContext.Provider>
    
  );
}

export default App;
