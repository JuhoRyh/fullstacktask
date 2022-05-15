import propTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
  <div>
    <p>{message}</p>
  </div>
);

ErrorMessage.propTypes = {
  message: propTypes.string.isRequired,
};

export default ErrorMessage;
