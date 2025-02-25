

import classNames from "classnames";
import PropTypes from 'prop-types';

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

export default PostCard;

