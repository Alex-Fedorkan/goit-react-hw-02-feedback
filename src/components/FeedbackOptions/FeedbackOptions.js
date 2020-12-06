import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.list}>
      {options.map(option => (
        <li key={option}>
          <button
            className={s.btn}
            type="button"
            onClick={onLeaveFeedback}
            data-button-type={option}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
