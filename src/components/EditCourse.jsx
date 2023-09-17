import { Button, Card, TextField, Typography } from "@mui/material"
import { useState } from "react";

const EditCourse = () => {

    const [title, setTitle] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [price, setPrice] = useState("");

    return (
        <div style = {{display : "flex", justifyContent : "center", flexDirection : "column"}}>

            <div style = {{display : "flex", justifyContent : "center", padding : "30px"}}>
                <Typography variant="h6"> Edit Course </Typography>
            </div>
            <div style = {{display : "flex", justifyContent : "center"}}>
                <Card style = {{display : "flex", justifyContent : "center", flexDirection : "column", width : "750px", padding : "15px"}}>
                    <TextField id="standard-basic" label="Course Title" variant="outlined" onChange={(e) => setTitle(e.target.value)}/>
                    <br></br>
                    <TextField id="standard-basic" label="Author Name" variant="outlined" onChange = {(e) => setAuthorName(e.target.value)}/>
                    <br></br>
                    <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue=""
                    onChange = {(e) => setDescription(e.target.value)}
                    />
                    <br></br>
                    <TextField id="standard-basic" label="Image URL" variant="outlined" onChange={(e) => setImageURL(e.target.value)}/>
                    <br></br>
                    <TextField id="standard-basic" label="Price" variant="outlined" onChange={(e) => setPrice(e.target.value)}/>
                    <br></br>
                    <div style = {{display : "flex", justifyContent : "center"}}>
                        <Button variant="contained" color="primary" fullWidth style={{backgroundColor: 'green', color: 'white'}}> Edit </Button>
                        <Button variant="contained" color="primary" fullWidth style={{backgroundColor: 'red', color: 'white', marginLeft: '5px'}}> Delete </Button>
                    
                    </div>

                </Card>
            </div>
        </div>

    )
}

export default EditCourse;