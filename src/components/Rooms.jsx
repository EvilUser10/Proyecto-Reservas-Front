import { React, useEffect, useState } from 'react'
import { listRoomsByHotelId } from '../services/RoomService'
import Booking from './Booking';

function Rooms({ id }) {
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const rooms = await listRoomsByHotelId(id);
                setRoomList(rooms.data._embedded.roomList);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };
        fetchRooms();
    }, [id]);

    return (
        <>
            <div className=''>
                {roomList.map((room) => (
                    <section key={room.id}>
                        <div className="container py-3 ">
                            <div className="card">
                                <div className="row ">
                                    <div className="col-md-4">
                                        <img src="https://source.unsplash.com/random/200%C3%97200/?hotel_room" className="w-100" />
                                    </div>
                                    <div className="col-md-8 px-3">
                                        <div className="card-block px-3 py-4">
                                            <h3>{room.description}</h3>
                                            <h4>Habitación disponible</h4>
                                            <h3>{room.price} €</h3>
                                            <Booking id={id} roomId={room.id} />
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                <section className='d-flex justify-content-center py-2'>
                                    
                                </section>
                            </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div >
        </>
    )
}

export default Rooms