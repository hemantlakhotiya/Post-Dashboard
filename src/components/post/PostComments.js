import React from 'react'
import PropTypes from 'prop-types'

function PostComments({ comments }) {
    return (
        <div className='mt-4'>
        <ul className='space-y-4 flex flex-col items-start w-[95%] md:w-1/2 mx-auto my-0'>
            {comments.map(comment => (
                <li key={comment.id} className='border border-gray-300 p-4 rounded-lg shadow-sm my-4'>
                    <h3 className='text-lg font-semibold capitalize'>{comment.name}</h3>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    </div>
    )
}
PostComments.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired
        })
    ).isRequired
}

export default PostComments

