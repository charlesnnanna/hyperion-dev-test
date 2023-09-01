import { Component } from 'react';
import Slider from 'react-slick';
import SingleStory from './SingleStory';
import { reviews } from '../data/data';

export default class SuccessStories extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section
        className="lg:w-full px-10 py-10 bg-info 
      bg-[url(/images/icons/tile.png)] lg:bg-[position:10%_50%] bg-[position:10%_20%]
      lg:bg-[length:350px] bg-[length:150px]
      bg-no-repeat"
      >
        <h2 className="py-4 font-semibold text-2xl lg:text-4xl my-5 text-center">
          {' '}
          Success Stories form <span>future leaders</span>
        </h2>
        <Slider {...settings} className="w-full h-full  py-5">
          {reviews.map((item, index) => {
            return (
              <SingleStory
                key={index + item.name}
                name={item.name}
                description={item.description}
                review={item.review}
                image={item.image}
              />
            );
          })}
        </Slider>
      </section>
    );
  }
}
