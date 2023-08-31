import PropTypes from 'prop-types';

function Chat(props) {
  const { name, message, timestamp, image } = props;
  return (
    <section className=" flex flex-row  gap-2 my-2 ">
      <img className="lg:h-28 h-20" src={image} alt="chat-avatar" />
      <section className=" relative shadow-2xl justify-between items-center p-4 flex flex-row bg-white dark:bg-darkBg dark:text-darkText rounded-md  h-20 w-[60vw] lg:w-[300px]">
        <section className="">
          <h3 className="font-bold text-xs">{name}</h3>
          <p className="text-[8px] mt-2 font-light lg:w-[180px] w-[60%]">
            {message}
          </p>
        </section>
        <p className="min-w-[70px] py-1 lg:py-2 text-center absolute bottom-5 right-0 text-[10px] font-semibold">
          {timestamp}
        </p>
      </section>
    </section>
  );
}

Chat.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Chat;
