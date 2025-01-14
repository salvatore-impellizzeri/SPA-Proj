import { useParams } from 'react-router-dom';   

function EventDetailPage(){
    const params = useParams();

    return (
        <div>
            <h1>Event Detail</h1>
            <p>{params.eventId}</p>
        </div>
    );
}

export default EventDetailPage;