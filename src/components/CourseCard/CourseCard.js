import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import './CourseCard.css'

const CourseCard = ({ course }) => {
    const { name, picture, details } = course;
    return (

        <CardGroup className='m-3 w-25 '>
            <Card className=' col-md-3'>
                <Card.Img className='card-img  p-2' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details.slice(0, 60)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/courses/${course.id}`} className='more-btn'>Get Premium Subscription</Link>
                </Card.Footer>
            </Card>
        </CardGroup>

    );
};

export default CourseCard;