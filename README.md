# Welcome to Test-Driven React and Redux

## Instructor

Eric Greene - [http://t4d.io](http://t4d.io) - [LinkedIn](https://www.linkedin.com/in/ericwgreene)

## Schedule

Class:

- Monday - Friday, 9am to 5pm CDT

Breaks:

- Morning: 10:25am - 10:35am
- Lunch: Noon to 1pm
- Afternoon #1: 2:15pm - 2:25pm
- Afternoon #2: 3:40pm - 3:50pm

## Course Outline

### Monday’s Topics

- Creating a Component & JSX
- Display a Static List/Table with JSX
- Display a Dynamic List/Table with JSX and Map
- Styling Components
- Passing Data in with Props

### Tuesday’s Topics

- Working with State and Form Fields
- Working with State and Processing Form Data
- Decomposition and Props
- Decomposition and State

### Wednesday’s Topics

- Stateless Functions
- Adding PropTypes
- Understanding Keys
- Using Refs and Life Cycle Functions
- Pure Components

### Thursday’s Topics

- User Interface Routing
- Principles of Redux
- Reducers and Actions

### Friday’s Topics

- Integrating Redux with React
- Connecting Redux to REST Services
- Unit Testing

[Course Login](https://www.t4d.school/login/index.php)

- Username: Email account name without the @ symbol and domain
- Password: t4dpass (you will be prompted to change it on first login)

## Links

### Instructor's Resources

- [Accelebrate](http://www.accelebrate.com/)
- [Eric's Blog](http://t4d.io/)
- [WintellectNOW](https://www.wintellectnow.com/Home/Instructor?instructorId=EricGreene) - Special Offer Code: GREENE-2016
- [Microsoft Virtual Academy](https://mva.microsoft.com/search/SearchResults.aspx#!q=Eric%20Greene&lang=1033)
- [React Labs](https://github.com/Microsoft/TechnicalCommunityContent/tree/master/Web%20Frameworks/React)

### Other Resources

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)
- [Speaking JavaScript](http://speakingjs.com/es5/)
- [TC39 Process - Feature Stages](http://www.2ality.com/2015/11/tc39-process.html)
- [Official ES2016 Features](http://www.2ality.com/2016/01/ecmascript-2016.html)
- [Possible ES2017 Features](http://www.2ality.com/2016/02/ecmascript-2017.html)

## Setup Instructions

This is a starter project for creating an HTML/SASS/React/Redux/Relay application.

### Application Setup

Step 0. Please completely read and thoroughly understand the instructions below before performing them.

Step 1. Download Install Node.js version 8 or higher. Version 8 or higher MUST be installed. If you have an older Node.js version that you need to keep, then use something like [NVM](https://www.npmjs.com/package/nvm) to manage multiple Node.js installations. To install Node.js click [here](https://nodejs.org).

Step 2. Download the repository as a zip file. Extract the zip file to a working folder on your system.

Step 3. Open a new terminal window, change to the folder where you extracted the zip file. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the Mac terminal is all you need.

Step 4. From the terminal, run the following command:

```bash
npm i && npm start
```

It will take a few minutes for this command to complete. If you have connection issues due to a proxy server, please edit the **.npmrc** file per the instructions in that file. Then re-run the command above.

This set has been completed successfully when you receive the following message:

```bash
[1] Child html-webpack-plugin for "index.html":
[1]     chunk    {0} index.html 541 kB [entry] [rendered]
[1]         [0] ./~/lodash/lodash.js 540 kB {0} [built]
[1]         [1] ./~/html-webpack-plugin/lib/loader.js!./src/index.html 607 bytes {0} [built]
[1]         [2] (webpack)/buildin/global.js 509 bytes {0} [built]
[1]         [3] (webpack)/buildin/module.js 517 bytes {0} [built]
[1] webpack: Compiled successfully.
```

This terminal window is now running the web server, a second terminal window will need to be opened to run additional terminal commands.

Step 5. Open a web browser, and navigate to [http://localhost:3000](http://localhost:3000).  The starter web application should load and be usable.

Note: This command will run, and then wait for file changes to process updated source code from the **client** and **server** folders. Webpack does **NOT** exit and return to a terminal prompt. Please do not close this terminal window.

#### To Modify the Web Application

Step 6. Open your favorite text editor (such as [Visual Studio Code](https://code.visualstudio.com)), and modify the files in the **client** and **server** folders. When file changes are saved, **webpack** and **nodemon** will automatically transpile and bundle the server and client application code and assets. To see the changes, reload your web browser (live reload is enabled so reloading will probably occur automatically).

I recommend install the following Visual Studio Code extensions:

- dbaeumer.vscode-eslint
- mkaufman.htmlhint
- DavidAnson.vscode-markdownlint
- glen-84.sass-lint
- robertohuertasm.vscode-icons
- kumar-harsh.graphql-for-vscode

### NPM Scripts Command Reference

From a terminal, in the root project folder (where the **package.json** file exists), the following commands can be executed to perform various project development tasks.

- **npm start** - starts the entire application
- **npm test** - run unit tests
- **npm test -- --updateSnapshot** - run unit tests and update snapshots
- **npm run test:coverage** - run unit tests with coverage
- **npm run test:debug** - run unit tests in debug mode
- **npm run clean** - removes the generated files
- **npm run server-init** - runs initial server transpile and schema generation for relay compiler
- **npm run server** - runs babel, outputs the generated server files, and executes them with nodemon
- **npm run client** - runs the webpack development web server
- **npm run rest** - runs the JSON server to provide REST services
- **npm run relay** - runs the Relay Compiler in Watch Mode
- **npm run relay:once** - runs the Relay Compiler Once

### Useful Resources

- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [GraphQL](http://graphql.org/)
- [Relay](https://facebook.github.io/relay/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.github.io/)
- [Babel Relay Plugin](https://facebook.github.io/relay/docs/guides-babel-plugin.html)
- [SASS](http://sass-lang.com/)
- [Learn GraphQL](https://learngraphql.com/)
- [Learn Relay](https://www.learnrelay.org/)
- [Resolving GraphQL Circular Type References](http://t4d.io/resolving-graphql-circular-type-references/)
