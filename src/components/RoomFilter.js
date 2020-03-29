import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from "../components/Title";

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) { 
    const context = useContext(RoomContext)
    let {
        handleChange, 
        sortedRooms,
        type, 
        capacity,
        price, 
        minPrice,
        maxPrice, 
        minSize,
        maxSize,
        breakfast,
        pets,
    } = context;
    // get unique types
    // maxPrice = Math.max(...rooms.map(item => item.price));
    // maxSize = Math.max(...rooms.map(item => item.size));


    
    let types = getUnique(rooms, 'type');
    // add all

    types = ['all', ...types];
    // map to jsx 
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity') 
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })


    return (
        <section className='filter-container'>
            <Title title='Searched Rooms'/>
            <form className='filter-form'>
                {/* select type */}
                <div  className='form-group'>
                    <label htmlFor='type'>Room Type</label>
                    <select 
                        className='form-control' 
                        name='type' 
                        id='type' 
                        value={type}
                            onChange={handleChange}>
                    {types}
                    </select>
                </div>
                {/* end of select type */}
                {/* select guest */}
                <div  className='form-group'>
                    <label htmlFor='capacity'>Guest</label>
                    <select 
                        className='form-control' 
                        name='capacity' 
                        id='capacity' 
                        value={capacity}
                            onChange={handleChange}>
                    {people}
                    </select>
                </div>
                {/* end of select guest  */}
                {/* price */}
                <div className='form-group'>
                    <label htmlFor=''>
                         room price: ${price}
                         <input 
                            type='range' 
                            min={minPrice} 
                            max={maxPrice} 
                            value={price} 
                            id='price' 
                            name='price' 
                            onChange={handleChange}
                            className='form-control'
                         />
                         {console.log(price)
                         }
                    </label>
                </div>
                {/* end of price */}
                {/* room size */}
                <div className='form-group'>
                    <label htmlFor='size'>Room Size</label>
                    <div className='size-inputs'>
                        <input 
                            type='number' 
                            name='minSize' 
                            id='minSize' 
                            value={minSize}
                            onChange={handleChange}
                            className='size-input'
                        />
                        <input 
                            type='number' 
                            name='maxSize' 
                            id='maxSize' 
                            value={maxSize}
                            onChange={handleChange}
                            className='size-input'
                        />
                    </div>
                </div>
                {/* end of room size */}
                {/* extras */}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input 
                            type='checkbox'
                            name='breakfast'
                            id='breakfast'
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor='breakfast'>breakfast</label>
                    </div>
                    <div className='single-extra'>
                        <input 
                            type='checkbox'
                            name='pets'
                            id='pets'
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor='pets'>Pets</label>
                    </div>
                </div>
                {/* endextras */}
                
            </form>
        </section>
    )

}
