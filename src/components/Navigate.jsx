import Link from 'next/link'
import PropTypes from 'prop-types'

const Navigate = ({label, ...props}) => {
  return (
    <Link {...props}> { label } </Link>
  )
}


Navigate.propTypes = {
  label: PropTypes.string.isRequired,
}


export default Navigate
