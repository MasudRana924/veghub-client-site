import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/shared/Header/Header';
import Home from './components/home/Home';
import Alls from './components/home/menu/all/Alls';
import Meets from './components/home/menu/meet/Meets';
import Footer from './components/shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import Foods from './components/home/menu/dryFoods/Foods';
import Fishes from './components/home/menu/fish/Fishes';
import Fruits from './components/home/menu/fruits/Fruits';
import SignUp from './components/home/SignUp/SignUp';
import LognIn from './components/home/LogIn/LognIn';
import Cart from './components/home/cart/Cart';
import CheckOut from './components/home/checkout/CheckOut';
import Dashboard from './components/dashboard/Dashboard';
import MyOrders from './components/dashboard/MyOrders/MyOrders';
import MakeAdmin from './components/dashboard/makeadmin/MakeAdmin';
import AddProducts from './components/dashboard/addproducts/AddProducts';
import ManageProducts from './components/dashboard/manageproducts/ManageProducts';
import PrivateRoute from './privateroute/PrivateRoute';
import AdminRoute from './privateroute/AdminRoute';
import DashboaredHome from './components/dashboard/dashboardhome/DashboaredHome';
import ManageOrders from './components/dashboard/manageorders/ManageOrders';
import Reviews from './components/home/reviews/Reviews';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<Alls />}></Route>
              <Route path="vegetable" element={<Alls />}></Route>
              <Route path="meet" element={<Meets />}></Route>
              <Route path="food" element={<Foods />}></Route>
              <Route path="fish" element={<Fishes />}></Route>
              <Route path="fruits" element={<Fruits />}></Route>
            </Route>
            <Route path="/home" element={<Home />} >
              <Route path="" element={<Alls />}></Route>
              <Route path="vegetable" element={<Alls />}></Route>
              <Route path="meet" element={<Meets />}></Route>
              <Route path="food" element={<Foods />}></Route>
              <Route path="fish" element={<Fishes />}></Route>
              <Route path="fruits" element={<Fruits />}></Route>
            </Route>


            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<LognIn />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<PrivateRoute>
              <CheckOut />
            </PrivateRoute>}>
            </Route>

            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route exact path="/dashboard" element={<DashboaredHome>
              </DashboaredHome>}>
              </Route>

              <Route path="myorders" element={<MyOrders />}></Route>
              <Route path="review" element={<Reviews />}></Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/addproduct`} element={<AdminRoute>
                <AddProducts></AddProducts>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/manageproduct`} element={<AdminRoute>
               <ManageProducts></ManageProducts>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/manageorders`} element={<AdminRoute>
              <ManageOrders></ManageOrders>
              </AdminRoute>}>
              </Route>
              
             

            </Route>




          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
