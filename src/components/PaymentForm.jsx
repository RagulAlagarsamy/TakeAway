import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React from 'react'
import './cardStyles.css';


export default function PaymentForm(props) {
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:5001/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                props.handleClose(false)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        <form onSubmit={handleSubmit} style={{ width: "35%" , marginBottom: "10px"}}>
                    <CardElement className="cardStyles" />
            <button className="btn btn-primary mt-4">Pay</button>
        </form>
        </>
    )
}