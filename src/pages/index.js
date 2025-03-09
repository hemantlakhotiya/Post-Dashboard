import NoPostFound  from '../components/NoPostFound';
import PostList from '@/components/PostList';
import PropTypes from 'prop-types';
import { ApiClient } from './api/ApiClient';

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
  const res = await ApiClient.get('/posts');

  if (res.statusText !== 'OK') {
    return { notFound: true };  
  }

  return {
    props: {
      posts:res.data, 
    },
  };
}

BlogDashboard.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default BlogDashboard;


