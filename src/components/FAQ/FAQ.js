
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='w-50 ml-auto'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Are these course efficient enough for job?</Accordion.Header>
                    <Accordion.Body>
                        We provide best services from our hand.But we cannot ensure to have a job.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How much time will take to end-up these courses?</Accordion.Header>
                    <Accordion.Body>
                        We can ensure you that the course will be end-up in month.
                        After that we will be there to support you. And we all are looking for your bright future.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Which one is the most enrolled course?</Accordion.Header>
                    <Accordion.Body>
                        All of the courses are enrolled frequently. Among them JavaScript course is little bit famous.
                        Forty percent of the student enrolled our JavaScript course.We are promissing you that we will give the same effort in other courses.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;