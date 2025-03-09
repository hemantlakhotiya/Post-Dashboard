

import PostDetails from '@/components/PostDetails';
import PropTypes from 'prop-types';
import { ApiClient } from '../api/ApiClient';


const PostDetail = ({ postDetails, comments }) => {
  return (
    <PostDetails post={postDetails} comments={comments}/>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params

  const {data: { postDetails, comments }} = await ApiClient.get(`/posts/${id}`);

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

