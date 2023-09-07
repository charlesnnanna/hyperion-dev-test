import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import TrialModal from './TrialModal';
import VideoModal from './VideoModal';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <section
      className="backdrop-blur-xl px-4 py-4 lg:px-0 flex flex-col justify-center items-center dark:bg-darkBg
    lg:h-[600px] w-full bg-[url(/images/icons/polka-dots.png)] dark:bg-[url()] bg-[position:80%_10%] bg-[length:20px]
      bg-nrepeat"
    >
      <h1 className="lg:text-6xl text-2xl mt-20 dark:text-darkText">
        {' '}
        <span>
          <Typewriter
            words={['</Secure your future>', '</Learn to code>']}
            loop={10}
            cursor
            cursorStyle="_"
            typeSpeed={200}
            deleteSpeed={200}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p className=" lg:w-[700px] w-full text-center text-xs lg:text-xl my-4 dark:text-darkText">
        Our online coding bootcamps are set apart by integrating human-led code
        review. Our deep experience will support your ability to code and help
        you achieve career-focused skills
      </p>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-secondary text-primary normal-case my-1 w-[200px] "
      >
        Begin Trial
      </button>{' '}
      <TrialModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <button
        className="btn normal-case my-2 w-[200px]"
        onClick={() => setVideoOpen(true)}
      >
        Watch Video
      </button>
      <VideoModal
        isOpen={videoOpen}
        setIsOpen={setVideoOpen}
        video="https://www.youtube.com/embed/WAvg3wubkDo?si=zCQF0_QqQ-aqS3qP"
      />
    </section>
  );
}

export default Hero;
