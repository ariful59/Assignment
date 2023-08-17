'use client'
import { PagesProgressBar } from 'next-nprogress-bar';

const ProgressBar = () => {
    return (
        <div>
            <PagesProgressBar
                height="10px"
                color="#fffd00"
                options={{ showSpinner: true }}
                shallowRouting
            />
        </div>
    );
};

export default ProgressBar;