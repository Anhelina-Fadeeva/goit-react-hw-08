import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export default function Title({ children }) {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};
