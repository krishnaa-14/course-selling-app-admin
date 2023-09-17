import AdminCourseCard from "./AdminCourseCard"
import EditCourse from "./EditCourse";

const Course = () => {
    return (
        <div style = {{display : "flex", justifyContent : "center"}}> 
            <div style = {{marginTop: "10%", marginRight : "3%"}}>
                <AdminCourseCard
                    title="Namaste React"
                    authorName="Akshai Saini"
                    price="5000 Rs"
                    description="React Zero To Hero"
                    imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Zu5VrNVXdm8G7dXCeGSvjNx5FpR0NQJjVQ&usqp=CAU"
                />
            </div>
            <div>
                <EditCourse></EditCourse>
            </div>
        </div>
    )
}

export default Course;