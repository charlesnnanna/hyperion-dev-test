import PropTypes from 'prop-types';
import { classNames } from '../data/utils';

function Bootcamp(props) {
  const { title, description, type, partTime, fullTime } = props;
  return (
    <section
      tabIndex={0}
      className="card bg-lightBg dark:bg-darkBg shadow-xl hover:shadow-3xl md:w-[400px] md:h-[400px] py-4 px-4"
    >
      <h2
        className={classNames(
          type === 'online'
            ? ' bg-secondary  text-primary'
            : 'bg-info text-secondary',
          'font-bold text-md text-center text-md w-full lg:h-20 py-4 px-3'
        )}
      >
        {title}
      </h2>
      <p className="text-center py-14 px-4">{description}</p>

      <ul className="flex flex-col justify-around items-center py-2 list-image-[url(/images/icons/check.svg)] ">
        <li className="text-xs">{partTime} part-time</li>
        <li className="text-xs">{fullTime} full-time</li>
      </ul>
      <section className="card-actions justify-end"></section>
    </section>
  );
}

Bootcamp.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  partTime: PropTypes.string.isRequired,
  fullTime: PropTypes.string.isRequired,
};

export default Bootcamp;
