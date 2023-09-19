import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { classNames, useDarkMode } from '../data/utils';
import TrialModal from './TrialModal';

function Header() {
  const [sticky, setSticky] = useState(false);
  const [setTheme, colorTheme] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  function changeTheme() {
    setTheme(colorTheme);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });

  return (
    <header
      className={classNames(
        sticky ? ' shadow-xl ' : 'shadow-md',
        'sticky top-0 bg-lightBg dark:bg-darkBg  w-full flex flex-row justify-between py-4 px-4 lg:px-10 lg:py-3 z-50 overflow-hidden'
      )}
    >
      <img
        className="h-[30px] w-[120px] lg:h-[40px] lg:w-[170px] mt-3 lg:mt-0"
        src={
          colorTheme === 'dark'
            ? '/images/home/logo-dark.svg'
            : '/images/home/logo.svg'
        }
        alt="HyperionDev Logo"
      />
      <p className="w-[300px] text-center text-xs font-semibold hidden lg:block text-lightText dark:text-darkText">
        Join a league of excellence: Our graduates are in high demand with over
        18+ leading companies eagerly recruiting them
      </p>
      <section className="flex flex-row gap-5">
        <button className="w-7" onClick={changeTheme}>
          {colorTheme === 'dark' ? (
            <MoonIcon className="text-lightText" />
          ) : (
            <SunIcon className="text-white" />
          )}
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-md  bg-darkBg hover:border-2  dark:bg-transparent text-darkText dark:text-darkText dark:border dark:border-darkBorder lg:w-[10vw] w-[30vw] text-primary normal-case"
        >
          Begin Trial
        </button>
        <TrialModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>
    </header>
  );
}

export default Header;
