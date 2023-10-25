import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Bookpage() {
    return (
<div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="name" placeholder=" Enter author" />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="number" placeholder="Enter Year" />
                </Form.Group>
                    
                <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="name" placeholder="Enter Price" />
                 </Form.Group>
            </Form>
    
</div>                )
}

                export default Bookpage;
