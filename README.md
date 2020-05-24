

## In-App Browser tests

_Early stage, expect bugs_

 In-app browsers open browser windows within an external app - e.g: Facebook or Google app. They disable certain functionalities but till date there isn't a resource to tell you what is exactly disabled or does work properly.

This project aspires to be the `caniuse` of in-app browsers

## Testing
You are just testing the functionality,  Share this URL 
either privately or publically! 

https://inapptest.now.sh/ 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Share the URL to Facebook or Google app ( private mode) - This runs all modernizr tests and a test of retaining a localstorage item _More tests to follow)

## Wishlist
3. Save test results to dynamodb
4. view past results 
5. view your results
6. sample applications
    1. NextJS 
        1. local storage
        2. cookies
        3. links in a new page - did the link open?
        4. lazy load
        5. Window close 
7. Homepage
    1. Select test type - individual or suite
8. Share page - 
    1. beacon count
9. Match to known user agents
10. Input to user agent - type, action
11. Best to worst

## Contributing 
Raise a pull request

## Utilizes
1. Nextjs
2. Userstack
