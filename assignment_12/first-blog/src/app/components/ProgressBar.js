'use client'
import { PagesProgressBar } from 'next-nprogress-bar';

const ProgressBar = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-100 to-blue-100">
            <div className="min-h-screen items-center justify-center mx-auto flex flex-row">
                <progress className="progress w-56"></progress>
            </div>
        </div>
    );
};

export default ProgressBar;