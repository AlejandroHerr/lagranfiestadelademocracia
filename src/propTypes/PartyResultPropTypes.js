import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  percVotes: PropTypes.number.isRequired,
  seats: PropTypes.number.isRequired,
  percSeats: PropTypes.number.isRequired,
  distortion: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  costPerSeat: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
});
