import React from 'react'
import { Carousel } from 'react-bootstrap'
import Card from "./Card"
import image1 from "../Images/image1.jpg"
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";

import "./Card.css"
const Offer = () => {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={image1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={image2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
          </Carousel.Item>
            </Carousel>
            <h1 className="brand">Top Brands</h1>
            <div className="wrapper">
          <Card
            img="https://images.unsplash.com/photo-1599082642130-d7fc84cddb44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3lyaW5nZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
            title="Stomace 2.5mg Strip"
            cost="₹ 0"
          />
          <Card
            img="https://images.unsplash.com/photo-1599082642130-d7fc84cddb44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3lyaW5nZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
            title="Stomace 2.5mg Strip"
            cost="₹ 0"
          />
          <Card
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmlNHj3ooWrSqpdpEXrqPlZJGd9ZPS5erUCA&usqp=CAU"
            title="Stomace 2.5mg Strip"
            cost="₹ 0"
          />
          <Card
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSa6O8BDjixEE0fGUXpQkGTMj6S6C-Zs1QrA&usqp=CAU"
            title="Stomace 2.5mg Strip"
            cost="₹ 0"
          />
          <Card
            img="https://images.unsplash.com/photo-1599082642130-d7fc84cddb44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3lyaW5nZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
            title="Stomace 2.5mg Strip"
            cost="₹ 0"
          />
          <Card
            img="https://images.unsplash.com/photo-1599082642130-d7fc84cddb44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3lyaW5nZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
            title="Stomace 2.5mg Strip"
            cost="₹ 0"
          />
        </div>
      </div>
    );
}

export default Offer
