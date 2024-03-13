import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";


const Vlog = ({blog, handleBookmark}) => {
  const {cover_img, title, author, posted_date, authors_img, reading_time, hashtags} = blog;

  return (
    <div className='border-b-2 pb-6'>
      <div>
        <img src={cover_img} alt={title}  className='w-full rounded-lg'/>
      </div>
      <div className='mt-8 flex gap-4 items-center'>
        <img src={authors_img} alt="" className='w-14 h-14 rounded-full'/>
        <div className='flex-1'>
          <h4 className='text-xl font-semibold'>{author}</h4>
          <span className='text-sm'>{posted_date}</span>
        </div>

        <div className='flex gap-2 items-center'>
          <p>{reading_time} min ago </p>
          <button onClick={()=>handleBookmark(blog)}>
          <FaRegBookmark className='cursor-pointer text-blue-500 hover:text-blue-300'/>
          </button>
        </div>
      </div>

        <h4 className='font-bold text-2xl my-4'>{title}</h4>
      <small className='flex gap-4 text-lg'>
        {
          hashtags.map((hashtag, idx) => <span key={idx}>#{hashtag}</span>)
        }  
      </small>

      <button className='mt-2 w-full text-start'><a href="" className='text-[#6047EC] hover:text-[#261680] underline font-semibold '>Mark as read</a>
      </button>

      
    </div>
  );
};

Vlog.propTypes = {
  blog: PropTypes.isRequired,
  handleBookmark: PropTypes.func
}

export default Vlog;