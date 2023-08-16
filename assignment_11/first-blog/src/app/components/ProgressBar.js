'use client'
import { PagesProgressBar } from 'next-nprogress-bar';

const ProgressBar = () => {
    console.log('progress bar initialized');
    return (
        <div>
            <PagesProgressBar
                height="10px"
                color="#fffd00"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </div>
    );
};

export default ProgressBar;