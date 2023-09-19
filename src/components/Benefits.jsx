import Chat from './Chat';

function Benefits() {
  return (
    <section className=" bg-primary dark:bg-darkBg dark:text-darkText overflow-hidden px-4 py-4">
      <h2 className=" text-center px-2 text-2xl lg:text-4xl w-full lg:py-4 py-10">
        We’ll take you from beginner to job ready.
      </h2>
      <section className="hero min-h-screen ">
        <section className="hero-content  flex-col lg:flex-row-reverse">
          <section className="h-80 lg:w-[50%] lg:ml-20">
            <Chat
              name="Sam S."
              message="Hey, I'm a little stuck. My code isn't working properly."
              timestamp="5 min ago"
              image="/images/icons/chat1.png"
            />
            <section className="lg:ml-32 ">
              <Chat
                name="Erika M."
                message="Hey, I took a look at your code. You should put a semi-colon at the end of line 8 and 28"
                timestamp="5 min ago"
                image="/images/icons/chat3.png"
              />
            </section>
            <Chat
              name="Sam S."
              message="Ah! Thank Erika. I'll see if it works now"
              timestamp="5 min ago"
              image="/images/icons/chat2.png"
            />
          </section>
          <section className="lg:w-[400px]">
            <p className="uppercase">what sets us apart</p>
            <h2 tabIndex={0} className="text-2xl lg:text-3xl  font-semibold ">
              We set you up for success
            </h2>
            <p className="py-6 my-5 text-sm lg:text-md">
              Take advantage of career development and networking opportunities
              in the HyperionDev Graduate Program.
            </p>
            <p className="py-6 text-sm lg:text-md">
              Get the best possible preparation for your new career in tech,
              with mock interviews, assistance with polishing your CV and
              developer portfolio, and professional interview tips from our
              in-house career services team.{' '}
            </p>
          </section>
        </section>
      </section>

      <section className="hero min-h-screen">
        <section className="hero-content  flex-col lg:flex-row">
          <section className="h-80 lg:w-[50vw] w-[80vw] relative overflow-hidden">
            <img
              className="absolute w-[200px] top-0 left-0 z-10 lg:w-[400px]"
              src="/images/icons/ellipse.png"
              alt="An-ellipse"
            />
            <img
              className="absolute w-[200px] top-0 left-24 lg:left-40 z-10 lg:w-[350px]"
              src="/images/icons/triang.png"
              alt="A-Triangle"
            />
            <video
              className="absolute top-0 left-0 z-40 hidden lg:block"
              width="500"
              height="240"
              autoPlay
              muted
              loop
            >
              <source src="/images/GIF.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            <video
              className="absolute top-12 left-0 z-40 lg:hidden"
              width="400"
              height="300"
              autoPlay
              muted
              loop
            >
              <source src="/images/GIF.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </section>
          <section className="lg:w-[400px]">
            <p className="uppercase">what sets us apart</p>
            <h2 tabIndex={0} className="text-2xl lg:text-3xl  font-semibold ">
              Your code is reviewed by professionals
            </h2>
            <p className="py-6 my-5 text-sm lg:text-md">
              Every piece of code you write is reviewed by professionals who
              check and refine code for some of the biggest companies out there.
            </p>
            <p className="py-6 text-sm lg:text-md">
              Expert on-demand feedback will get you writing efficient,
              error-free code, and keep you from getting stuck.
            </p>
          </section>
        </section>
      </section>

      <section className="hero min-h-screen mt-7 lg:mt-0">
        <section className="hero-content  flex-col lg:flex-row-reverse">
          <section className=" lg:w-[50%] lg:ml-20">
            <img src="/images/home/map.png" alt="map" />
          </section>
          <section className="lg:w-[400px]">
            <p className="uppercase">what sets us apart</p>
            <h2 tabIndex={0} className="text-2xl lg:text-3xl  font-semibold ">
              Accessible education{' '}
            </h2>
            <p className="py-6 my-5 text-sm lg:text-md">
              Learn from anywhere, in a structure that fits your needs, life,
              and goals.
            </p>
            <p className="py-6 text-sm lg:text-md">
              We’re passionate about allowing everyone to have equal access to a
              tech career. Our bootcamps can be taken online or on our campuses,
              full-time or part-time.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Benefits;
