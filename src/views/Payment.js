import React from 'react';
import '../constants/payment.css';
import Header from '../common/Header';
import Footer from '../common/Footer';

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

                </div>
                <Footer />
            </div>
        )
    }
}
