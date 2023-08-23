'use client'
import { PagesProgressBar } from 'next-nprogress-bar';

const ProgressBar = () => {
    return (
        <div>
            <PagesProgressBar
                height="10px"
                color="#FF0000"
                options={{ showSpinner: true }}
                shallowRouting
            />
        </div>
    );
};

export default ProgressBar;