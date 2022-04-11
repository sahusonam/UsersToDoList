# How long did you spend on your solution?
Effectively 4 hours but I did it in parts. I started in the afternoon then had a long break, resuming it in the night to finish the implementation. Couldn't manage to finish it in 1 sitting. 

# How do you build and run your solution?

    I am using 2 parallel applications in 2 Terminals.

    ## For running the backend services in 1st Terminal
        In the project directory, navigate to "server" & then run 

        ### `npm start`

    ## For running the client side application in 2nd terminal

        In the project directory, navigate to "client" folder & then run 

        ### `npm start`

    ## For running the test cases for both front-end and backend 

        ### `npm test`

# What technical and functional assumptions did you make when implementing your solution?

Assumption is user already have some task in the list. Initial list is not empty. When you run the application, it loads some data in the page. 

# Briefly explain your technical design and why do you think is the best approach to this problem.

Design of the application is:

    There are 2 parts of the application- 
    1)  Client side  (/client)
            index.js (entry point of my client side applicatin)
            App.js (main container which holds the components)
            -Components (all the components are in one place)
                -AddItem
                -TodoItem
                -TodoList
            -services (call to the back end services)
                -taskServices.js

    2)  Server side  (/server)
            index.js (entry point of server side application)
            routes 
                -items.js (defining the route information)
            controllers
                -items.js (holds the logic of request and response)
    

Improvement areas:
    1) We can make use of Redux for state management. This can be done by creating a redux folder (including thunk.js, slice.js &  type.js).

    With the use of Redux we can have centralized state management system i.e store & ensuring that a given component re-renders only when its data has actually changed.

    2) By installing babel, we can make use of tsx files.


# If you were unable to complete any user stories, outline why and how would you have liked to implement them.
Incomplete user story is "3) updating the status of existing task", because of the time constraint.


Steps to implement the update functionality
1) Server side: 
    - change in 'routes/items.js': to handle the update request by using router.patch
    - new method in 'controllers/items.js' - to handle the update logic & return the updated list.

2) Client side:
    - Component update: add checkboxes within TodoItem.js when we are rendering the todo's items in <li>
    - Event onChange of checkbox will trigger a props method  which will send a request to backend.
    - backend response will update the state & re-render the component.




