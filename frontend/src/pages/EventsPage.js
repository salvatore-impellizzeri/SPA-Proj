import React from 'react';
import { Link } from 'react-router-dom';

const EventsPage = () => {
    const events = [
        { id: 1, name: 'Event 1' },
        { id: 2, name: 'Event 2' },
        { id: 3, name: 'Event 3' },
    ];

    return (
        <>
            <h1>Events</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <Link to={`/events/${event.id}`}>{event.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default EventsPage;