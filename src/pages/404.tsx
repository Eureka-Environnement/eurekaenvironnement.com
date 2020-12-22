import { useEffect } from 'react';
import { navigate } from 'gatsby';
import { HOME_PAGE } from 'utils/constants';

const page404 = () => {
  useEffect(() => {
    navigate(HOME_PAGE);
  }, []);
  return null;
};

export default page404;
