import PropTypes from 'prop-types';

export default function Card(props) {
  return (
      <div className="card-container">
        <div>
          <img src={`/images/${props.item.img}`} className="card--photo" />
        </div>
        <div>
          <div className="card--info--row1">
              <div className="card--info--row1--destination">
                <img src="/images/destination.png" className="card--location-logo" />
                <h6>{`${props.item.location}`} </h6>
              </div>
              <div>
                <p className="card--info--map--link">
                  <a href="{`${props.item.googleMapsUrl}`}" className="link">View on Google Maps</a>
                </p>
              </div>
          </div>
          <div className="card--info--row2">
            <h3> {`${props.item.title}`}</h3>
          </div>


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
