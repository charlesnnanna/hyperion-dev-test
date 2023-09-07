import { useState } from 'react';
import VideoModal from './VideoModal';
import PropTypes from 'prop-types';

function Student(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { name, title, video, image } = props;

  return (
    <>
      {' '}
      <section className="w-full overflow-hidden">
        <img className=" w-[699px]" src={image} alt={name} />
      </section>
      <section className="">
        <h2 className="my-4 text-sm lg:text-md">{name}</h2>
        <p className="my-4 text-sm lg:text-md">{title}</p>
        <section className="">
          <button className="btn normal-case" onClick={() => setIsOpen(true)}>
            Watch video
          </button>
        </section>
        <VideoModal video={video} isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>
    </>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Student;
