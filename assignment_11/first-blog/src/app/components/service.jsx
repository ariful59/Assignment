import React from 'react';

const Service = () => {
    return (
        <div className={"bg-gradient-to-r from-cyan-100 to-blue-100"}>
        <div className={"mt-10 mb-10 pb-8 bg-gradient-to-r from-cyan-300 to-blue-400 border-2 lg:mx-48 mx-auto px-8 item-center justify-center"}>
            <h1 className={"pt-5 text-xl font-bold mx-auto pb-5"}>Browse help topics</h1>
            <div className="collapse collapse-arrow bg-gray-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Troubleshoot problems playing videos
                </div>
                <div className="collapse-content">
                    <p>Many factors can cause video playback issues, such as Internet or device connection.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-gray-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>If a video is freezing, buffering or you get one of these errors, you may be experiencing a video playback issue:
                        An error has occurred.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-gray-400">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>Playback error. Tap to retry.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Service;