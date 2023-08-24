
import React from 'react';

const CartView = ({value}) => {
    return (
        <div>
            <div className="card max-w-sm mx-4 mt-4 mb-4 bg-base-100 shadow-xl">
                <figure><img src={value['img']} alt="Image not found" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {value['title']}
                        <div className="badge badge-secondary">{value['id']% 2 === 0 ? 'NEW' : ""}</div>
                    </h2>
                    <p>{value['short']}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Technology</div>
                        <div className="badge badge-outline">Science</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartView;