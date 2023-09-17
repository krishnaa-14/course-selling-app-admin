import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useState } from 'react';

const Signup = () => {
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

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        fetch("http://localhost:3000/admin/signup", {
            method : 'POST', 
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                username, 
                password
            })
        })
        .then(res => {
            return res.json();
        })
        .then(data => console.log(data));
    }

    return (
        <Container maxWidth="sm">
            <Card variant="outlined" style={cardStyle}>
                <div style={innerContainerStyle}>
                    <Typography variant="h5" style={headingStyle}>
                        Welcome to Coursera! Please Sign up
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                    <br></br>
                    <Button size = {"large"} variant="contained" color="primary" fullWidth onClick={() => handleSignup()}>
                        Sign Up
                    </Button>
                </div>
            </Card>
        </Container>
    );
}

export default Signup;
