import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import './MyReview.css'


const MyReview = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth()
    const onSubmit = data => {
        fetch('https://obscure-badlands-58635.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                   alert('Your review is post ')
                    reset()

                }
            })
    };
    return (
        <Container fluid className="mt-5">

            <div className="">
                <form className="review-form " onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} placeholder="your name" />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    <textarea {...register("textAreaID")} />

                    {errors.email && <span className="error">This field is required</span>}

                    <input type="submit" className="bg-danger text-white" />
                </form>
            </div>

        </Container>
    );
};

export default MyReview;