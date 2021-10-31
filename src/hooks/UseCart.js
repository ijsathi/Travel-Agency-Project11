import { useState } from "react";

const UseCart = () => {
    const [selectedBooking, setSelectedBooking] = useState([]);
    function addToCart (dt){
        const isHave = selectedBooking.find(select => select._id === dt._id);
        if (isHave) { 
            alert("Already Booked!! Thanks For Booking......")
        } else {
            const newBooking = [...selectedBooking, dt];
            setSelectedBooking(newBooking)
        }
    }
    function remove (id){
        const selectAfterRemove = selectedBooking.filter((select)=> !(select.id === id));
            setSelectedBooking(selectAfterRemove)
    }
    return {addToCart, selectedBooking, remove };
};

export default UseCart;