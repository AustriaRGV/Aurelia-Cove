import { Link } from 'react-router-dom';
import { formatUSD, type Accommodation } from '../data/resort';

export default function RoomCard({ room }: { room: Accommodation }) {
  return (
    <article className="room-card">
      <div className="room-media">
        <img src={room.images[0].src} alt={room.images[0].alt} loading="lazy" />
        <span className="room-price-tag"><strong>{formatUSD(room.rate)}</strong> / night</span>
      </div>
      <div className="room-body">
        <h3>{room.name}</h3>
        <div className="room-specs" aria-label="Key specifications">
          <span>Up to {room.guests} guests</span>
          <span>{room.beds}</span>
          <span>{room.view}</span>
        </div>
        <p className="room-desc">{room.description}</p>
        <div className="room-actions">
          <Link className="btn btn-outline-dark btn-sm" to={`/stay/${room.slug}`}>View details</Link>
          <Link className="btn btn-primary btn-sm" to={`/booking?room=${room.slug}`}>Book now</Link>
        </div>
      </div>
    </article>
  );
}
