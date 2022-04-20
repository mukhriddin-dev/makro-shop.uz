import React from 'react';

const Main = () => {
    return (
        <div className='main'>
            <div className="container">
                <div className="main-top">
                    <div className="deserts-top">
                        <div className="deserts-left border">
                            <div className="card-left border">
                                {/* <img src="../img/home-img.png" alt="" /> */}
                            </div>
                            <div className="card-right border">
                                <p className='card-title'>All deserts</p>
                                <h2 className='card-percent'>20% OFF</h2>
                                <span className='bottom-title'>Deserty</span>
                            </div>
                        </div>
                        <div className="deserts-right border"></div>
                    </div>
                    <div className="deserst-bottom"></div>
                </div>
            </div>
        </div>
    );
};

export default Main;