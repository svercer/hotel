import React from 'react';
import { RoomContext } from '../context';
import Loading from '../components/Loading';
import Room from '../components/Room';
import Title from '../components/Title';

export default class FeaturedRooms extends React.Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms : rooms } = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>
            
        })
        
        return(
            <section className='featured-rooms'>
                    <Title title='Featured Rooms'/>
                <div> 
                    <div className='featured-rooms-center'>
                    { loading ? <Loading /> :rooms }

                    </div>

                </div>
            </section>
        );
    }
} 

