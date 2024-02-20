import PropTypes from 'prop-types';

export default function Card(props) {
  return (
      <div className="card">
        <img src={`/images/${props.item.img}`} className="card" />
        <div className="card--info">
          {`${props.item.location}`}
          <a href="{`${props.item.googleMapsUrl}`}" className="link">View on Google Maps</a>
        </div>

      </div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  location: PropTypes.string,
  item: PropTypes.object
  // googleMaps: PropTypes.string,
  // Other prop validations can continue from here
};
