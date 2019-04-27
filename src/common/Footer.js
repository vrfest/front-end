import React from 'react';
import '../constants/css/footer.css';


export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="ft-col-1">
                    <h4 className="ft-h4">Quick Links</h4>
                    <a className="ft-links" href="/homepage">Home</a>
                    <a className="ft-links" href="/">Subscribe</a>
                    <a className="ft-links" href="/dashboard">Dashboard</a>
                </div>
                <div className="ft-col-2">
                    <h4 className="ft-h4">Features</h4>
                    <a className="ft-links" href="/">Experience VR</a>
                    <a className="ft-links" href="/">Meet Artists</a>
                    <a className="ft-links" href="/">Travel Beyond</a>
                </div>
                <div className="ft-col-3">
                    <h4 className="ft-h4">Resources</h4>
                    <a className="ft-links" href="/">Sponsor</a>
                    <a className="ft-links" href="/">About</a>
                    <a className="ft-links" href="/">FAQ</a>
                </div>
                <div className="ft-col-4">
                    <h4 className="ft-h4">Search</h4>
                    <a className="ft-links" href="/">Twitter</a>
                    <a className="ft-links" href="/">Instagram</a>
                    <a className="ft-links" href="/">Facebook</a>
                </div>
            </div>
        )
    }
}