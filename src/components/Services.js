import React from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends React.Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Fee Cocktails",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora iusto molestiae consectetur obcaecati quis.",
            },
            {
                icon: <FaHiking />,
                title: "endles Hiking",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora iusto molestiae consectetur obcaecati quis.",
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora iusto molestiae consectetur obcaecati quis.",
            },
            {
                icon: <FaBeer />,
                title: "Alcholocs ",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora iusto molestiae consectetur obcaecati quis.",
            },
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='Services'/> 
                <div className="services-center">
                    {this.state.services.map((service, key) => {
                        return( 
                        <article key={key} className='service'> 
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>)
                    })}
                </div>
            </section>
        );
    }
}