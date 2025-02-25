import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navigate from './Navigate'
import PostCard from './PostCard'
import PostTitle from './post/PostTitle'
import PostImage from './post/PostImage'
import PostBody from './post/PostBody'
import PostComments from './post/PostComments'

const PostDetails = ({ post, comments }) => {
    const [showComments, setShowComments] = useState(false);

    const loadComments = async () => {
        setShowComments(!showComments)
    }

    return (
        <div className='flex flex-col items-center'>
            <PostCard className='w-[95%] md:w-1/2 my-4'>
                <div>
                    <PostImage src={post.image} />
                    <PostTitle title={post?.title} />
                    <PostBody postBody={post?.body} />
                    <button className='inline-block px-6 py-2 text-black bg-white rounded-md border border-black mt-4' onClick={() => setShowComments(!showComments)}>Comment</button>
                </div>
            </PostCard>

            {showComments && <PostComments comments={comments} />}

            <Navigate href='/'
                className="inline-block px-6 py-2 text-black bg-white rounded-md hover:bg-black hover:text-white border border-black hover:border-600 mt-4"
                label='Back to Dashboard'
            />
        </div>

    )
}

PostDetails.propTypes = {
    post: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
    }).isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,  
}

export default PostDetails

