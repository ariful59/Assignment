
import React from 'react';

const CarView = ({value}) => {
    return (
        <div>
            <div className={"flex flex-row mx-w-sm justify-center item-center bg-white pt-10 pb-10"}>
                <div className="card w-96 items-center bg-primary text-primary-content">
                    <div className="card-body">
                        <h1>Post Number :{value['id']}</h1>
                        <h2 className="card-title">{value['title']}!</h2>
                        <p>{value['content']}</p>
                        <p>Date: {value['date']}</p>
                        <div className="card-actions justify-center pt-4">
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarView;