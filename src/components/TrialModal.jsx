import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import TrialItem from './TrialItem';
import { trialBootcamps } from '../data/data';

export default function TrialModal(props) {
  // REDUX
  //const counter = useSelector((state) => state.counter)

  const { isOpen, setIsOpen } = props;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="section"
        className="fixed z-50 inset-0 overflow-y-auto "
        onClose={setIsOpen}
      >
        <section className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <section className=" inline-block align-bottom bg-primary rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-[50vw] sm:p-6">
              <section className="flex flex-col items-center justify-center">
                <Dialog.Title className="bg-primary">
                  <section className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="bg-primary rounded-md text-secondary hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </section>

                  <section className=" w-full py-3 flex flex-col justify-center items-center p-5">
                    <h2 className="text-center text-3xl font-semibold">
                      Select your bootcamp
                    </h2>
                    <p className="text-center mt-4">
                      Join 17776 students that started with us in the past 90
                      days
                    </p>
                    <img
                      src="/images/home/people-lg.png"
                      alt="Students-that-started-in-the-last-90-days"
                    />
                  </section>
                </Dialog.Title>

                <section className="  lg:flex lg:flex-row lg:flex-wrap justify-around">
                  {trialBootcamps.map((item, index) => {
                    return (
                      <TrialItem
                        key={index + item.alt}
                        image={item.image}
                        alt={item.alt}
                        title={item.title}
                      />
                    );
                  })}
                </section>
              </section>
            </section>
          </Transition.Child>
        </section>
      </Dialog>
    </Transition.Root>
  );
}

TrialModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
