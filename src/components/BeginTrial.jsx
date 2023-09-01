import { CheckIcon } from '@heroicons/react/outline';
import TrialModal from './TrialModal';
import { useState } from 'react';

function BeginTrial() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className="
    flex flex-col justify-center items-center bg-accent text-darkText py-4 px-4
    lg:py-10 lg:bg-[url(/images/icons/diamond.png),_url(/images/icons/ellipse.png)]
    bg-no-repeat lg:bg-[length:200px_200px,_150px]  lg:bg-[position:10%_10%,_90%_20%]"
    >
      <p className="text-xl lg:w-[50vw] text-center my-4">
        Join more than 100,000 students who have registered to learn to code at
        HyperionDev.
      </p>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="my-4 btn btn-secondary text-primary normal-case my-6 w-[200px] "
      >
        Begin Trial
      </button>
      <TrialModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <ul className="flex flex-col items-center lg:flex-row justify-around w-full my-4 text-xs">
        <li>
          <CheckIcon className="w-4 inline mx-1" />
          No coding experience required
        </li>
        <li>
          <CheckIcon className="w-4 inline mx-1" />
          Study from anywhere
        </li>
        <li>
          <CheckIcon className="w-4 inline mx-1" />
          Student funding available
        </li>
      </ul>

      <img
        className="my-4"
        src="/images/icons/facebook-google.png"
        alt="backed_by_facebook_and_google"
      />
    </section>
  );
}

export default BeginTrial;
