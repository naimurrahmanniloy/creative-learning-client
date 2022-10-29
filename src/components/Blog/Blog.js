import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border border-primary rounded-5 bg-light m-5'>
                <h1> what is cors?</h1>
                <p className='p-2 m-5'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that
                    allows a server to indicate any origins (domain, scheme, or port) other than its
                    own from which a browser should permit loading resources. CORS also relies on a
                    mechanism by which browsers make a "preflight" request to the server hosting the
                    cross-origin resource, in order to check that the server will permit the actual request.
                    In that preflight, the browser sends headers that indicate the HTTP method and headers
                    that will be used in the actual request.</p>
            </div>
            <div className='border border-primary rounded-5 bg-light m-5'>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='p-2 m-5'>Firebase Authentication aims to make building secure authentication systems easy,
                    while improving the sign-in and onboarding experience for end users. It provides
                    an end-to-end identity solution, supporting email and password accounts, phone auth,
                    and Google, Twitter, Facebook, and GitHub login, and more.</p>
            </div>
            <div className='border border-primary rounded-5 bg-light m-5'>
                <h1>How does the private route work?</h1>
                <p className='p-2 m-5'>The private route component is similar to the public route, the only change is
                    that redirect URL and authenticate condition. If the user is not authenticated
                    he will be redirected to the login page and the user can only access the
                    authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className='border border-primary rounded-5 bg-light m-5'>
                <h1>What is Node? How does Node work?</h1>
                <p className='p-2 m-5'>Javascript has existed since 1995 and has since taken over as the
                    dominant language for web development. For much of its life, JavaScript
                    was used mainly for client-side scripting inside tags executing
                    in web browsers. This limitation meant that developers were often working
                    in many different languages and frameworks between the front-end (client-side)
                    and backend (server-side) aspects of a web application.</p>
                <p>Node provides access to several important global objects for use with Node program files. When writing a file that will run in a Node environment, these variables will be accessible in the global scope of your file.

                    module is an object referring to the functionality that will be exported from a file. In Node, each file is treated as a module.
                    require() is a function used to import modules from other files or Node packages.
                    process is an object referencing to the actual computer process running a Node program and allows for access to command-line arguments and much more.</p>
            </div>
        </div>
    );
};

export default Blog;