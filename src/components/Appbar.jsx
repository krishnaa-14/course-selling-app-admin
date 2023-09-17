import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Appbar = () => {
    return (
        <div style = {{display : "flex", justifyContent : "space-between", padding : "6px"}}>
            <div>
                <Typography variant = {"h6"} style = {{ color: "darkblue",
                fontWeight: "bold",
                fontSize: "1.5rem",
                marginBottom: "20px",}}> Coursera </Typography>
            </div>

            <div style = {{display : "flex", justifyContent : "center"}}>
                <div style = {{marginRight:"10px"}}>
                    <Link to = "/"><Button variant = "contained"> Signup </Button></Link>
                </div>
                <div>
                    <Link to = "/signin"><Button variant = "contained"> Signin </Button></Link>
                </div>
            </div>

        </div>
    )
}

export default Appbar;