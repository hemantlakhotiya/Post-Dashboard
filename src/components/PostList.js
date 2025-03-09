import React from 'react'
import PropTypes from 'prop-types'
import PostCard from './PostCard'
import Link from 'next/link'
import PostTitle from './post/PostTitle'
import PostImage from './post/PostImage'

const PostList = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>

      <PostCard>
        <div className="max-w-md rounded-md overflow-hidden bg-white my-0 mx-auto">
          <PostCard.Image src={post.image} alt={post.title} />
          <PostCard.Title title={post.title} />
        </div>
      </PostCard>
    </Link>
  )
}

PostList.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string
  }).isRequired,
}

export default PostList

