import { Component } from 'react';
import Slider from 'react-slick';
import Student from './Student';
import { students } from '../data/data';

export default class Students extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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
        className=" flex flex-col justify-center items-center py-4 px-4 lg:py-12  lg:bg-info  
      "
      >
        <h2 className="py-4 font-semibold text-2xl lg:text-4xl my-5">
          {' '}
          Meet our Students{' '}
        </h2>
        <section className="lg:flex lg:flex-row justify-between hidden w-full  px-20 py-10">
          {students.map((item, index) => {
            return (
              <section
                key={index + item.video}
                className="mx-5 rounded-sm p-4 shadow-xl hover:shadow-2xl "
              >
                <Student
                  name={item.name}
                  video={item.video}
                  title={item.title}
                  image={item.image}
                />
              </section>
            );
          })}
        </section>
        <section className="lg:hidden">
          <Slider {...settings} className=" lg:hidden  w-[70vw] mt-5 ">
            {students.map((item, index) => {
              return (
                <section
                  key={index + item.video}
                  className="bg-info  w-[300px] rounded-md p-4 "
                >
                  <Student
                    name={item.name}
                    video={item.video}
                    title={item.title}
                    image={item.image}
                  />
                </section>
              );
            })}
          </Slider>
        </section>
      </section>
    );
  }
}
