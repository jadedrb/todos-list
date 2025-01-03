# todo-fullstack
Setup:

To run this project locally, clone to project to your computer. Navigate to the frontend
folder and run: 

###npm install.  

Then navigate to the backend and run: 

###npm install. 

You'll need a .env file in the backend with:

###MONGO_URL = mongodb+srv:// ...

And one in the frontend with:

###VITE_BASE_URL = http://localhost ...

To run the frontend, navigate to the frontend folder and run: 

###npm run dev.

To run the backend, navigate to backend folder and run: 

###node server

Outline:

I decided to go with a backend and frontend folder approach, but in the same repository. 
This felt like the simplest way to organize a fullstack application because there's a clear 
separation of folders. I didn't go as far as making seperate repositories because it feels
easier to maintain having everything in one place (and only one push required).

Starting with the backend, I kept it simple by first creating the server.js file, initializing
it with a package.json, then installing the things I need as I go. I want to first make the 
basic express server and get that running.

Once I have a test route, I want to immediately start the frontend so I can establish the 
connection. I create the frontend React folder by generating it using Vite. 

I clear out all the code I don't need, then in the App.js file I setup the useEffect for 
the API call to the backend. Using fetch, I make the request to the backend test route 
and, if I encounter CORS issues (likely), I install the cors package on the backend 
and use it as a middleware to circumvent this issue.

Once I know the frontend can hit backend route, I return to the backend and 
finish the routes and controller logic, creating a MVC (Model View Controller) structure
for organization and scalability purposes. 

I start with the index route to ensure I can connect to the database and retrieve data 
successfully. Once that connection is established, I finish the rest of the CRUD 
functionality, testing as I go using Postman or a similar REST API testing tool.

Once all backend routes functional, I return to the frontend and work on the logic 
for the Todo App, implementing state, event handling, and the rest of the 
requests that must be made to the now working backend. 

I keep everything in the App.js, until the Todo App is completely functional, at which
point I then focus on Component Driven Development by creating a TodoList and Todo 
component to further seperate and isolate the frontend logic.