import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SeasonMenu from './Pages_Customer/SeasonMenu';
import Menu from './Pages_Customer/Menu';
import Drink from './Pages_Customer/Drinks';
import Order from './Pages_Customer/Order';
import End from './Pages_Customer/End';
import SeasonMenu from './Pages_Customer/SeasonMenu';
import Menu from './Pages_Customer/Menu';
import Drink from './Pages_Customer/Drinks';
import Order from './Pages_Customer/Order';
import End from './Pages_Customer/End';
import Layout from './Main/Layout';
import MenuList from './Components/MenuList';
// import MenuAdd from './Components/MenuAdd';

import Login from './Pages_Login/Login';
import Map from './Components/Map';
import Translate from './Components/Translate';

import Accounts from './Pages_Staff/Accounts';
import Inventory from './Pages_Staff/Inventory';
import ManagerMenu from './Pages_Staff/ManagerMenu';
import SalesHistory from './Pages_Staff/SalesHistory';
import Staff from './Pages_Staff/Staff';
import ManagerNavBar from './Pages_Staff/ManagerNavBar';

import Register from './Pages_Register/Register';



export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MenuList />} />
                    {/* <Route path="SeasonMenu" element={<SeasonMenu />} />
                    <Route index element={<Menu />} />
                    <Route path="SeasonMenu" element={<SeasonMenu />} />
                    <Route path="Menu" element={<Menu />} />
                    <Route path="Drink" element={<Drink />} />
                    <Route path="Order" element={<Order />} />

                    <Route path="End" element={<End />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="Register" element={<Register />} />
                    {/*<Route path="Accounts" element={<Accounts />} />
                    <Route path="Inventory" element={<Inventory />} />
                    <Route path="Manager_Menu" element={<ManagerMenu />} />

                    <Route path="SalesHistory" element={<SalesHistory />} />
                    <Route path="Staff" element={<Staff />} />
                    <Route path="Staff" element={<Staff />} />
                    <Route path="Map" element={<Map />} />
                    <Route path="ManagerNavBar" element={<ManagerNavBar/>} />

                    <Route path="Translate" element={<Translate/>} />

                    <Route path="Sales_history" element={<SalesHistory />} />
                    <Route path="Staff" element={<Staff />} />  */}

                    <Route path="ManagerMenu" element={<ManagerMenu />} />
                    <Route path="SalesHistory" element={<SalesHistory />} />
                    <Route path="Staff" element={<Staff />} />
                    <Route path="Accounts" element={<Accounts />} />
                    <Route path="OpenOrders" element={<OpenOrders />} />
                    <Route path="Map" element={<Map />} />
                    <Route path="ManagerNavBar" element={<ManagerNavBar/>} />
                    <Route path="Drink/Order" element={<Order />} />
                    <Route path="ShowMap" element={<ShowMap />} />
                </Route>
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);