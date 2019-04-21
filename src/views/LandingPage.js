import React from 'react';
import '../constants/landing.css';
import { FirebaseDatabaseMutation, FirebaseDatabaseNode } from '@react-firebase/database';
import image from '../constants/images/logo.png';
import { config } from "../constants/config";
import Clock from "./Clock";

// let firebase = require('firebase');
// let firebaseApp = firebase.initializeApp(config);

const path = "user_emails";
// const UCRef = firebaseApp.database().ref(path)

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            count: 3600,
            running: false,
        }
        // this.test();
        this.handleStart()
    }

    // componentDidMount(){

    // }

    // test = () =>{
    //     UCRef.on('value', snapshot => {
    //         let items = snapshot.val();
    //         console.log(items);
    //         let newState = [];
    //         for (let item in items) {
    //             newState.push({
    //                 id: item,
    //                 email: items[item].email,
    //             });
    //         }
    //         this.setState({
    //             users: newState
    //         });
    //         // console.log(this.state.users);
    //     });
    // }

    handleChange = (event) => {
        this.setState({ email: event.target.value });
    }

    countProperties = (obj) => {
        var count = 0;

        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                ++count;
        }

        return count;
    }

    handleStart() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState(
                { count: newCount >= 0 ? newCount : 0 }
            );
        }, 1000);
    }

    render() {
        return (
            <div className="landing">
                <div className="landing-container">
                    <img className="form-logo" src={image} alt="Logo" />
                    <h2 className="landing-h2">Sign up now to get $10 off your first VR concert ticket.</h2>
                    <Clock time={this.state.count} />
                    <form className="landing-form">
                        <input className="landing-input" onChange={this.handleChange} type="text" placeholder="e.g first.last@gmail.com" />
                        <FirebaseDatabaseMutation type="push" path={path}>
                            {({ runMutation }) => {
                                return (
                                    <div>
                                        <button className="landing-button"
                                            data-testid="test-push"
                                            onClick={async () => {
                                                const { key } = await runMutation({ email: this.state.email });
                                            }}
                                        >
                                            Sign up
                                    </button>
                                    </div>
                                );
                            }}
                        </FirebaseDatabaseMutation>
                    </form>
                    <FirebaseDatabaseNode path={path}>
                        {d => {
                            return d.isLoading === true ? (
                                "Loading"
                            ) : (
                                    <h2 className="landing-h2"><span className="counter">{this.countProperties(d.value)}</span> people have saved $10 by signing up. <span className="join-now">Join them now!</span></h2>
                                );
                        }}
                    </FirebaseDatabaseNode>
                </div>
            </div>
        )
    }
}
