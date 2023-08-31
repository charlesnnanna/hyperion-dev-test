import Carousel from 'react-multi-carousel';
import { companies } from '../data/data';

export default function Companies() {
  return (
    <section className="flex flex-row justify-center dark:bg-darkBg dark:text-darkText">
      <section className="overflow-hidden   w-[80vw] flex flex-col justify-center items-center py-10 lg:px-10 px-3">
        <h2 className="py-4 font-semibold lg:text-2xl text-md text-center">
          {' '}
          Over 18+ leading companies hire our graduates
        </h2>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay={true}
          autoPlaySpeed={3000}
          centerMode={true}
          className=""
          containerClass="w-full "
          sliderClass="flex flex-row  justify-center"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="mr-0 px-0  w-[100px] h-[120px]"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 6,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          slidesToSlide={1}
          swipeable
        >
          {companies.map((item, index) => {
            return (
              <section className="w-[100px]" key={item.name + index}>
                <img src={item.src} alt={item.name} />
              </section>
            );
          })}
        </Carousel>
      </section>
    </section>
  );
}
