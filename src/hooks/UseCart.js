import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const UseCart = () => {
    const {user} = useFirebase();
    const {uid} = user;
    const [selectedBooking, setSelectedBooking] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/cart/${uid}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.length){
                setSelectedBooking(data)
            }
        })
        setSelectedBooking([])
    },[uid])
    function addToCart (dt){
        const isHave = selectedBooking.find(select => select._id === dt._id);
        delete dt._id;
        dt.uid = uid;
        dt.status = 'pending'
        if (isHave) { 
            alert("Already Booked!! Thanks For Booking......")
        } else {
            fetch('http://localhost:5000/booking/add', {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(dt)
            })
            .then(res=> res.json())
            .then(data =>{
                if(data.insertedId){
                    const newBooking = [...selectedBooking, dt];
                    setSelectedBooking(newBooking)
                }
            })
        }
    }
    function remove (id){
        const selectAfterRemove = selectedBooking.filter((select)=> !(select.id === id));
            setSelectedBooking(selectAfterRemove)
    }
    return {addToCart, selectedBooking, remove };
};

export default UseCart;