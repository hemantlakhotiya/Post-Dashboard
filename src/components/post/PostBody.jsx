import React from 'react'
import PropTypes from 'prop-types'

function PostBody({ postBody}) {
  return (
    <div className='text-md text-black font-medium my-2 capitalize'>{postBody}</div>
  )
}
PostBody.propTypes = {
  postBody: PropTypes.string.isRequired,
}

export default PostBody

