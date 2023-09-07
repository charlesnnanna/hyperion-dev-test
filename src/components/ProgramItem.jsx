import PropTypes from 'prop-types';

function ProgramItem(props) {
  const { number, title, description } = props;
  return (
    <section tabIndex={0} className="w-[80vw] lg:w-[22vw] ">
      <h2 className="font-semibold text-xl py-1">
        <span className="font-bold text-3xl py-1">{number}</span>
        <br />
        {title}
      </h2>
      <p className="font-thin dark:font-bold text-sm lg:text-md">
        {description}
      </p>
    </section>
  );
}

ProgramItem.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProgramItem;
