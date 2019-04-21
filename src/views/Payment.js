import React from 'react';
import '../constants/payment.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {Link} from 'react-router-dom';

export default class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header />
                <div className="payment">
                    <div className="payment-container">
                        <h2 className="payment-h2">Cart</h2>

                        {/* Card */}
                        <div className="payment-card">
                            <img className="payment-card-img" src="https://i.imgur.com/Yq9kJpX.png" alt=""/>

                            <div className="payment-card-text">
                                <h3 className="payment-h3">Sickick</h3>
                                <h4 className="payment-h4">Nov. 19, 2019</h4>
                                <p className="payment-p">Sickick (born 1988-10-25) is a Canadian EDM artist, producer and vocalist who mixes R&B vocals with dark tones. He worked behind the scenes as a producer and writer for several mainstream artists. He uploads remixes of top artists' songs to his YouTube channel. His remix of iLoveMakonnen @Tuesday ft. Drake accumulated more than 1.25 million views in just seven months.</p>
                            </div>
                        </div>

                        <div className="payment-cost">
                            <p>20$ &nbsp; or &nbsp; 100VRT</p>
                        </div>

                        <div className="payment-space">
                            <div className="payment-left">
                                {/* TODO: Fix the form (the submit button is outside the form tag) */}
                                <form className="payment-form">
                                    <input className="payment-input" type="text" placeholder="Full Name" />
                                    <input className="payment-input" type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
                                    <div className="payment-row">
                                        <input className="payment-input" type="text" placeholder="MM/YY" />
                                        <input className="payment-input" type="text" placeholder="CVC" />
                                    </div>
                                </form>
                                <button className="payment-btn">Buy with Credit Card</button>
                            </div>
                            <div className="payment-right">
                                <div className="payment-balance">
                                    <p>Balance</p>
                                    <p><b>300 VRT</b></p>
                                </div>
                                <Link to='/homepage'><button className="payment-btn">Buy with VRT</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
