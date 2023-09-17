import { Button, Card, TextField, Typography } from "@mui/material"
import { useState } from "react";

const AddCourse = () => {

    const [title, setTitle] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [price, setPrice] = useState("");

    const addCourseButtonClick = () => {
        fetch("http://localhost:3000/admin/courses", {
            method : "POST", 
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "title" : title,
                "authorName" : authorName,
                "description" : description,
                "price" : price,
                "imageLink" : imageURL, 
                "published" : "true" 
            })
        })
        .then(res => {
            console.log(res);
            return res.json()
        })
        .then(courseData => console.log(courseData))
    }

    return (
        <div style = {{display : "flex", justifyContent : "center", flexDirection : "column"}}>

            <div style = {{display : "flex", justifyContent : "center", padding : "30px"}}>
                <Typography variant="h6"> Add Course to your DashBoard </Typography>
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
                    <Button variant="contained" color="primary" fullWidth onClick = {() => addCourseButtonClick()}> Add Course </Button>
                </Card>
            </div>
        </div>

    )
}

export default AddCourse;