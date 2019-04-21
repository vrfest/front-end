import React from 'react';
import '../constants/landing.css';
import { FirebaseDatabaseMutation, FirebaseDatabaseNode } from '@react-firebase/database';
import image from '../constants/images/vrlogo.png';
import { config }  from "../constants/config";

// let firebase = require('firebase');
// let firebaseApp = firebase.initializeApp(config);

const path = "user_emails";
// const UCRef = firebaseApp.database().ref(path)

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
        }
        // this.test();
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
    
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                ++count;
        }
    
        return count;
    }

    render() {
        return (
            <div className="landing">
                <div className="landing-container">
                    <img className="form-logo" src={image} alt="Logo" />
                    <h1 className="landing-h1">VRFEST</h1>
                    <FirebaseDatabaseNode path={path}>
                    {d => {
                        return d.isLoading === true ? (
                            "Loading"
                        ) : (
                            <h1 className="landing-h3">Users: {this.countProperties(d.value)}</h1>
                        );
                    }}
                    </FirebaseDatabaseNode>
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
                    <h2 className="landing-h2">VR festivals and concerts with your favorite artists</h2>
                    <h2 className="landing-h2">Sign up to the waitlist for $10 off your first ticket</h2>
                </div>
            </div>
        )
    }
}
