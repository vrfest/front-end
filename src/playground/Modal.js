import React from 'react';

import { Button, Typography, Grid, Paper, TextField, Modal 
} 
from '@material-ui/core';

export default class ModalTest extends React.Component{
    state = {
        open: false,
      };
    
    handleOpen = () => {
    this.setState({ open: true });
    };

    handleClose = () => {
    this.setState({ open: false });
    };

    
    handleSubmit = () => {
        this.setState({ open: false });
    };

    render(){
        return(
            <div>
            <Button onClick={this.handleOpen}>Open Modal</Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                >
                <Paper className="contact-form-confirm">
                    <Grid alignItems="center" justify="space-evenly" container direction='column' style={{marginTop: 50}}>
                    
                    <Button variant="contained" onClick={this.handleSubmit} style={{marginTop: 30}}>
                        Buy Now
                    </Button>
                    </Grid>
                </Paper>
            </Modal>
            </div>
        )
    }
}