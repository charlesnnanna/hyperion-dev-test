import PropTypes from 'prop-types';

function SingleStory(props) {
  const { name, description, review, image } = props;
  return (
    <section className="lg:h-full lg:w-full flex lg:flex-row flex-col justify-center items-center">
      <img src={image} alt={`${name}-picture`} />
      <section className="lg:w-[300px] lg:mx-10">
        <p className="py-2">FEATURED STORY</p>
        <p className="text-3xl py-2">{review}</p>
        <p className="py-2">{`${name}, ${description}`}</p>
      </section>
    </section>
  );
}

SingleStory.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SingleStory;
