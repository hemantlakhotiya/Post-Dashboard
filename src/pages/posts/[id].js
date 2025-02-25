

import PostDetails from '@/components/PostDetails';
import PropTypes from 'prop-types';


const PostDetail = ({ postDetails, comments }) => {
  return (
    <PostDetails post={postDetails} comments={comments}/>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params

  const postRes = await fetch(`http://localhost:3000/api/posts/${id}`);
  const {postDetails, comments} = await postRes.json();

  return {
    props: { 
      postDetails,
      comments
    },
  }
}

PostDetail.propTypes = {
  postDetails: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
};

export default PostDetail;

