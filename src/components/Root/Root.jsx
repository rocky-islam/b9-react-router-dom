import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import App from '../../App'


const Root = () => {
    return (
        <div>
            <Header></Header>
            {/* <App></App> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;