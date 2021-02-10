# Github Finder

I created this project while learning [React](https://reactjs.org/).

Where you can search users with username and view user profile, can see the number of repos, followers, following, and list of repos from where you can go to the repository on github.



## Setting Up

To run this app you need to register [Github Developer app](https://github.com/settings/developers), After registering you'll have a *client id* and *client secret*, create a **.env.local** file on root folder, same folder as *package.json* than paste below lines:

```
REACT_APP_GITHUB_CLIENT_ID='client_id'
REACT_APP_GITHUB_CLIENT_SECRET='client_secret'
```

Ofcourse replace *client_id* and *client_secret* with your id and secret. 

## Running the project
Use following command on project terminal/window/command prompt
- run ***npm install*** to install all the dependencies 
- run ***npm start*** to start the project
- Go to [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.