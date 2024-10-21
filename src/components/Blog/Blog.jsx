
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    
  const {title,cover,author, author_img, posted_date, reading_time, hashtags} = blog;

  return (
    
    <div>
      <img src={cover} alt={`this cover picture title ${title}`} />
      {/* author_img */}
      <div className='flex justify-between'>
        <div className='flex gap-3 mt-2 ml-3'>
           <img className='w-10 h-10 rounded-full' src={author_img} alt="" />

              {/* author_img and posted date */}
           <div  >
                 <h3 className='text-2xl'>{author}</h3>
                 <p>{posted_date}</p>
           </div>

        </div>
        <div>
        <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className='text-2xl'>{title}</h2>
      <p>
        {
          hashtags.map((hash,idx) => <span key={idx}> <a href="">#{hash}</a></span>)
        }
      </p>
    </div>
  );
};


Blog.PropTypes ={
  blog: PropTypes.object.isRequired
}

export default Blog;
