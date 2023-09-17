import { Card, Typography } from "@mui/material";

const AdminCourseCard = (props) => {
    return (
        <Card style={{ 
            width: "350px", 
            padding: "15px", 
            margin: "25px", 
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            transition: "transform 0.3s",
            "&:hover": {
                transform: "scale(1.05)"
            }
        }}>
            <img 
                src={props.imageURL} 
                alt={props.title} 
                style={{
                    width: "100%", 
                    height: "55%", 
                    borderRadius: "8px",
                }}
            />
            <Typography variant="h6" style={{marginTop: "10px", fontWeight: 600, color: "#333"}}>{props.title}</Typography>
            <Typography variant="subtitle1" color="textSecondary" style={{fontWeight: 400, color: "#555"}}>{props.authorName}</Typography>
            <Typography variant="body1" style={{marginTop: "10px", color: "#777"}}>{props.description}</Typography>
            <Typography variant="h5" style={{marginTop: "10px", fontWeight: 600, color: "#222"}}>{props.price}</Typography>
        </Card>
    )
}

export default AdminCourseCard;
