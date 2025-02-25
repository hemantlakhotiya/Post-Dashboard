import NoPostFound  from '../components/NoPostFound';
import PostList from '@/components/PostList';
import PropTypes from 'prop-types';

const BlogDashboard = ({ posts }) => {  
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
              <PostList key={post.id} post={post} />
        ))}
      </div>
      {posts.length === 0 && !posts && <NoPostFound />}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/posts`);
  
  if (!res.ok) {
    return { notFound: true };  
  }

  const posts = await res.json();

  return {
    props: {
      posts, 
    },
  };
}

BlogDashboard.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default BlogDashboard;


