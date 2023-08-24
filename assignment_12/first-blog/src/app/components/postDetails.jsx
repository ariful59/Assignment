import React from 'react';

const PostDetails = ({value}) => {
    let data = value['postDetails'];
    if (data === null) return( <div className="min-h-screen bg-gradient-to-r from-cyan-100 to-blue-100 font-bold text-5xl items-center justify-center mx-auto pt-10 pb-10 flex flex-row"> <h1>Details is not found</h1></div>)
    return (
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100">
            <div className="container flex flex-col items-center justify-center mx-auto lg:px-20 px-5">
                <img src={`${data['img']}`} alt={"Image of the content"} className="lg:h-[500px] mt-5"/>
                <p className="lg:mx-48 mt-10 mb-10">{data['content']}</p>
            </div>
        </div>
    );
};

export default PostDetails;