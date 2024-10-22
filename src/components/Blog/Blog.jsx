

import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    
  const {title,cover,author, author_img, posted_date, reading_time, hashtags} = blog;

  return (
    
    <div className='p-4 mb-20 space-y-4'>
      <img className='w-full mb-8' src={cover} alt={`this cover picture title ${title}`} />
      {/* author_img */}
      <div className='flex justify-between '>
        <div className='flex gap-3 mt-2 ml-3'>
           <img className='w-10 h-10 rounded-full' src={author_img} alt="" />

              {/* author_img and posted date */}
           <div className='mb-5' >
                 <h3 className='text-2xl'>{author}</h3>
                 <p>{posted_date}</p>
           </div>

        </div>
        <div className=''>
        <span>{reading_time} min read</span>
        <button  onClick={() =>handleAddToBookmark(blog)} className='ml-2 text-xl text-blue-500'><FaBookmark></FaBookmark></button>
        </div>
      </div>
      <h2 className='text-2xl mb-7'>{title}</h2>
      <p>
        {
          hashtags.map((hash,idx) => <span key={idx}> <a href="">#{hash}</a></span>)
        }
      </p>
      <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-700 font-bold underline '>Mark As Read</button>
    </div>
  );
};


Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired, // Optional: specify if this prop is required or not
 handleMarkAsRead: PropTypes.func
};


export default Blog;