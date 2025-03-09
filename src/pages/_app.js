
import { ErrorBoundary } from '@/components/ErrorBoundary';
import '../styles/globals.css'
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) { 
  return  (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp

