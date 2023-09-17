import { Button, Typography } from "@mui/material";


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
                    <Button variant = "contained"> Signup </Button>
                </div>
                <div>
                    <Button variant = "contained"> Signin </Button>
                </div>
            </div>

        </div>
    )
}

export default Appbar;