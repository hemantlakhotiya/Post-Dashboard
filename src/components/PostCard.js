

import classNames from "classnames";
import PropTypes from 'prop-types';
import PostImage from './post/PostImage';
import PostTitle from './post/PostTitle';
import PostBody from "./post/PostBody";
import PostComments from "./post/PostComments";

const PostCard = ({children, className}) => {
  return (
    <div className={classNames("border border-gray-300 p-4 rounded-md min-h-[22rem]", className)}>
      {children}
    </div>
  );
};


PostCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

PostCard.Title = PostTitle;
PostCard.Image = PostImage;
PostCard.Comments = PostComments;
PostCard.Body = PostBody

export default PostCard;

