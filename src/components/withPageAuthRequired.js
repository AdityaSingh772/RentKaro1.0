import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const withAuth = (Page) => {
  return withPageAuthRequired(Page);
};

export default withAuth;
