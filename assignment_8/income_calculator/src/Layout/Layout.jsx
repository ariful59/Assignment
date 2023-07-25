import { Link } from "react-router-dom";

const Layout = (props) => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/contact'}>Conact</Link></li>
                    </ul>
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default Layout;