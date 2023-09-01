import Bootcamp from './Bootcamp';
import { trialBootcamps } from '../data/data';

export default function Bootcamps() {
  return (
    <section className="overflow-hidden bg-transparent dark:text-darkText dark:bg-darkBg w-full flex flex-col justify-center items-center px-4 py-10">
      <h2 className="py-4 font-semibold text-2xl lg:text-4xl ">
        {' '}
        Online Coding Bootcamps
      </h2>
      <p className="text-center">
        {' '}
        Transform form a coding novice to a job-ready pro in as little as 3 to 6
        months with our dynamic online coding bootcamps.
      </p>
      <section className="flex flex-col justify-center items-center flex-wrap w-full py-10">
        <section className="flex flex-row justify-center flex-wrap lg:w-[70vw] gap-10 px-4 py-4 lg:px-2">
          {[...trialBootcamps].splice(0, 4).map((item, index) => {
            return (
              <Bootcamp
                key={index + item.title}
                title={item.title}
                description={item.description}
                type={item.type}
                partTime={item.duration.partTime}
                fullTime={item.duration.fullTime}
              />
            );
          })}
        </section>

        <section>
          <h2 className="py-4 font-semibold lg:mt-10 mt-5 text-2xl lg:text-4xl lg:text-3xl text-center">
            {' '}
            University Bootcamps
          </h2>
          <section className="flex flex-row justify-center flex-wrap lg:w-[70vw] gap-10 px-4 py-4 lg:px-2">
            {[...trialBootcamps].splice(4, 3).map((item, index) => {
              return (
                <Bootcamp
                  key={index + item.title}
                  title={item.title}
                  description={item.description}
                  type={item.type}
                  partTime={item.duration.partTime}
                  fullTime={item.duration.fullTime}
                />
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
}
