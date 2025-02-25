import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

function PostImage({ image }) {
  return (
    <img src={image ?? null} className={classNames('w-full h-64 object-cover', {
        'bg-gray-300': !image
    }) }/>
  )
}
PostImage.propTypes = {
  image: PropTypes.string
}

export default PostImage

