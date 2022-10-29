import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './CardDetails.css'


const CardDetails = () => {
    const courses = useLoaderData();
    console.log(courses);

    const { user } = useContext(AuthContext);
    const handleProceedBtn = () => {
        alert('Thanks For The Subscription')
    }
    return (
        <div className='card-details'>

            <Card className="text-center card-details">
                <Card.Header></Card.Header>
                <Image className='card-details-img' src={courses.picture}></Image>
                <Card.Body>
                    <Card.Title>{courses.name}</Card.Title>
                    <Card.Text>
                        {courses.details}
                    </Card.Text>
                    <Button onClick={handleProceedBtn} variant="primary">Proceed To Buy</Button>
                </Card.Body>

            </Card>
        </div>
    );
};

export default CardDetails;