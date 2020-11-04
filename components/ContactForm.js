import React from 'react'
import { Form, FormGroup, ListGroup, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import FormContainer from './Formcontainer'

const ContactForm = ({ data }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const submitHandler = () => {
        console.log('submit')
    }
    return (
        <FormContainer>
            <h3>{data.title}</h3>
            <p>{data.p}</p>
            <div style={{ borderBottom: 'solid 1px white', padding: '0.5em', marginBottom: '1em' }}></div>


            <Form onSubmit={submitHandler}>


                {/* Contact Name input */}
                <Form.Group controlId="username">
                    <Form.Label>{data.cName.label}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={data.cName.placeholder}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>


                {/* Contact Email input */}
                <Form.Group controlId="email">
                    <Form.Label>{data.cEmail.label}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={data.cEmail.placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>


                {/* Contact Phone input */}
                <Form.Group controlId="phone">
                    <Form.Label>{data.cPhone.label}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={data.cPhone.placeholder}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    ></Form.Control>
                </Form.Group>


                {/* Subject input */}
                <Form.Group controlId="Subject">
                    <Form.Label>{data.cSubject.label}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={data.cSubject.placeholder}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                {/* Message input */}
                <Form.Group controlId="Message">
                    <Form.Label>{data.cMessage.label}</Form.Label>
                    <Form.Control as='textarea' rows={3}
                        placeholder={data.cMessage.placeholder}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></Form.Control>
                </Form.Group>

            </Form>


            <Button
                className="btn-block"
                type="submit"
            >
                {data.btn}
            </Button>


        </FormContainer>
    )
}

export default ContactForm
