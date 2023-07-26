import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Money Manager</h1>
                        <p className="mb-5">Don't talk unless you can improve the silence.</p>
                        <button onClick={()=>navigate('/income')} className="btn btn-primary">Income Source</button>
                        <button onClick={()=>navigate('/expense')}className="ml-10 btn btn-primary">Expense Source</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;