// import React, { useState } from 'react'
import { Container } from '../globlaStyle/Container.style'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'

import {
  ContactContainer,
  FormWrapper,
  MapContainer,
  Form,
  FormGroup,
} from './Contact.style'

const Contact = () => {
  const inputRef = useRef()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  console.log(errors)

  return (
    <Container>
      <ContactContainer>
        <h5>Contact us</h5>
        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)} ref={inputRef}>
            <FormGroup>
              <label htmlFor='firstname'>Full name*</label>
              <input
                type='text'
                {...register('name', { required: 'full name is required.' })}
              />
              <ErrorMessage message={errors.name?.message}></ErrorMessage>
            </FormGroup>
            <FormGroup>
              <label htmlFor='Address'>Adress</label>
              <input type='text' name='address' {...register('address')} />
            </FormGroup>
            <FormGroup>
              <label htmlFor='contact'>Contact No*</label>
              <input
                type='Number'
                {...register('contact', {
                  required: 'contact number is required.',
                })}
              />
              <ErrorMessage message={errors.contact?.message}></ErrorMessage>
            </FormGroup>
            <FormGroup>
              <label htmlFor='Email'>Email Adress</label>
              <input
                type='text'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address',
                  },
                })}
              />
              <ErrorMessage message={errors.email?.message}></ErrorMessage>
            </FormGroup>
            <FormGroup>
              <label htmlFor='subject'>Subject*</label>
              <input
                type='text'
                {...register('subject', {
                  required: 'subject filed is required.',
                })}
              />
              <ErrorMessage message={errors.subject?.message}></ErrorMessage>
            </FormGroup>
            <FormGroup>
              <label htmlFor='textarea'>Your Query</label>
              <textarea {...register('query')} />
            </FormGroup>
            <FormGroup>
              <article>
                <button
                  type='submit'
                  onClick={() => {
                    reset(
                      {
                        name: '',
                        address: '',
                        contact: '',
                        email: '',
                        subject: '',
                        query: '',
                      },
                      {
                        keepErrors: true,
                        keepDirty: true,
                        keepIsSubmitted: false,
                        keepTouched: false,
                        keepIsValid: false,
                        keepSubmitCount: false,
                      }
                    )
                  }}
                >
                  Submit
                </button>
              </article>
            </FormGroup>
          </Form>
          <MapContainer>
            <iframe
              title='google map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1558.412999525095!2d85.32336666908209!3d27.706111798902025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb192ffb8ecc39%3A0x30069e7d73ad84e3!2sReflex%20IT%20Solution!5e0!3m2!1sen!2snp!4v1650449435272!5m2!1sen!2snp'
              width='530'
              height='530'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            >
              Google map
            </iframe>
          </MapContainer>
        </FormWrapper>
      </ContactContainer>
    </Container>
  )
}

export default Contact
