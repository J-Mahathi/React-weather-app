import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InformationBox.css";

export default function InformationBox({ info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/2158813060/photo/a-scenic-view-of-a-lush-green-forest-under-a-blue-sky-with-scattered-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=7ZujS8H5pzDPgg09Oqv3J8eZBpQL6cqHB-WI9Dxdh3M=";

    // conditions - >15 degrees
  const HOT_URL =
    "https://images.unsplash.com/photo-1610557013547-dc7a52d44709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwdGVtcGVyYXR1cmV8ZW58MHx8MHx8fDA%3D";

     // conditions - <15 degrees
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHRlbXBlcmF0dXJlfGVufDB8fDB8fHww";

     // conditions - >80
  const RAIN_URL =
    "https://images.unsplash.com/photo-1456400761117-a768c370cd6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW4lMjB0ZW1wZXJhdHVyZXxlbnwwfHwwfHx8MA%3D%3D";


  return (
    <div className="InformationBox">
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}  {
                info.humidity > 80? <ThunderstormIcon/> : info.temp > 15 ? <LocalFireDepartmentIcon/> : <AcUnitIcon/>
              }
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temperature = {info.tempMin}</p>
              <p>Max Temperature = {info.tempMax}</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like = {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
