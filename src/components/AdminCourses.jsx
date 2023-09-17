import { Typography } from "@mui/material";
import AdminCourseCard from "./AdminCourseCard";
import { useState, useEffect } from "react";

const AdminCourses = () => {
    
    const [courses, setCourses] = useState([
        {
            "title" : "React JS COURSE",
            "authorName" : "Akshai Saini",
            "description" : "Complete Node course",
            "price" : "7000 rs",
            "imageLink" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Zu5VrNVXdm8G7dXCeGSvjNx5FpR0NQJjVQ&usqp=CAU",
            "published" : "true" 
        },
    ]);

    useEffect(() => {
        fetch("http://localhost:3000/admin/courses", {
            method : "GET", 
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCourses(data);
        });
    }, [])

    return (
        <div>
            <div style={{backgroundColor: "#f0f0f0"}}>
                <div style={{maxWidth: "1200px", margin: "0 auto", padding: "20px"}}>
                    <Typography variant="h5">Courses</Typography>
                </div>
            </div>

            <div style={{maxWidth: "1500px", margin: "0 auto", padding: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {courses.map((course, index) => (
                    <AdminCourseCard
                        key={index}
                        title={course.title}
                        authorName={course.authorName}
                        price={course.price}
                        description={course.description}
                        imageURL={course.imageLink}
                    />
                ))}
            </div>
        </div>
    )
}

export default AdminCourses;
