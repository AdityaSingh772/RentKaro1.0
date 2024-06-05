import { handleAuth } from '@auth0/nextjs-auth0';



export default handleAuth({

    login: handleLogin({
  
      returnTo: '/' // Pass in your preferred callback URL
  
    })
  
  });

  export const GET = handleAuth();