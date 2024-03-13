import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <>
      <div className="md:w-1/3 py-4 md:py-6">
        <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-5 text-center text-blue-500 text-lg">
          <h3>Spent time on read : {readingTime} min</h3>
        </div>

        <div className="p-4 md:p-6 bg-gray-100 mt-6 rounded-lg">
          <h4 className="font-bold text-lg">
            Bookmarked Blogs: {bookmarks.length}
          </h4>

          <div className="mt-4 space-y-4">
            {
          bookmarks.map(blog => <div key={blog.id} className="bg-white rounded-lg p-5 font-semibold text-justify">{blog.title}</div>)
          }
          </div>
  
      </div>
      </div>
    </>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.isRequired,
  readingTime: PropTypes.num,
};

export default Bookmarks;
