import ProgramItem from './ProgramItem';

const program = [
  {
    number: '3000+',
    title: 'Code reviews',
    description:
      'We process over 3,000 on-demand code reviews every month, to ensure our students are writing the best industry-grade code they can.',
  },

  {
    number: '500+',
    title: 'Unique mentor sessions',
    description:
      'We’ve optimised and scaled our mentor support to provide more than 500 unique personal mentor sessions every month.',
  },

  {
    number: '45 NPS',
    title: 'High student satisfaction',
    description:
      'Our average week-on-week Net Promoter Score from our students is typically over 45, proving that our learners love their bootcamps.',
  },

  {
    number: '70%',
    title: 'Consistent student progress',
    description:
      'As of this year, we’ve officially maintained a progression rate of over 70% across all of our coding bootcamps.',
  },
];

function ProgramList() {
  return (
    <>
      <section className="hero min-h-screen bg-base-200 overflow-hidden">
        <section className="hero-content flex-col lg:flex-row-reverse">
          <img
            className=" w-[80vw] lg:w-[40vw]"
            src="/images/home/couple.webp"
            alt="Two couples working on s laptop together"
          />{' '}
          <section className="px-7">
            <h2 className="font-bold text-4xl my-2 lg:my-10">
              A life-changing experience
            </h2>
            <section className="mt-6 flex flex-row flex-wrap lg:w-[50vw] gap-8">
              {program.map((item, index) => {
                return (
                  <ProgramItem
                    key={item.number + index}
                    number={item.number}
                    description={item.description}
                    title={item.title}
                  />
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default ProgramList;
