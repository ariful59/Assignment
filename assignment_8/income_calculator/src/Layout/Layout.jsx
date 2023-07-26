import { NavLink } from "react-router-dom";

const Layout = (props) => {
    return (
        <div>
            <div className="navbar bg-base-100 text-red-900 dark:text-white">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Assignment-8</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/income'}>Income Source</NavLink></li>
                        <li><NavLink to={'/expense'}>Expense Source</NavLink></li>
                    </ul>
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default Layout;