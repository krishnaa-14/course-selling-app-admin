import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Signin = () => {
    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        width: "60%",
        minHeight: "50vh",
        margin: "25% auto",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
    };

    const innerContainerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        width: "100%",
    };

    const headingStyle = {
        color: "darkblue",
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginBottom: "20px",
    };

    return (
        <Container maxWidth="sm">
            <Card variant="outlined" style={cardStyle}>
                <div style={innerContainerStyle}>
                    <Typography variant="h5" style={headingStyle}>
                        Welcome Back! Sign in to checkout Courses.
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <br></br>
                    <Button variant="contained" color="primary" fullWidth>
                        Sign In
                    </Button>
                </div>
            </Card>
        </Container>
    );
}

export default Signin;
