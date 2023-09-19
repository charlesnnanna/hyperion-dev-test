import PropTypes from 'prop-types';

function TrialItem(props) {
  const { image, title, alt, href } = props;
  return (
    <section
      tabIndex={0}
      className="my-4 lg:w-[45%] h-[] cursor-pointer shadow-xl flex flex-row justify-start gap-4 px-3 py-4 rounded-md"
    >
      <img className="w-[50px] h-[40px]" src={image} alt={alt} />

      <a href={href}>
        <p className="font-semibold text-sm text-secondary">{title}</p>
      </a>
    </section>
  );
}

TrialItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default TrialItem;
