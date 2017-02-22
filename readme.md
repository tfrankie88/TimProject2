# Tim Frankie: Project 1 - Method Man(agement) #
_____

### WDI Project #2: Wiki Crud App ###

For my first project I designed the game **Hangman**

1.) **Explanations of the technologies used**

- This project used<br>
• **[HTML]**<br>
was used to implement the structure of the site.<br>
• **[CSS]**<br>
gave the style and organized the layout/aesthetics of the site<br>
• **[JavaScript]**<br>
offered the functionality and logic of the site for user interaction<br>
• **[jQuery]**<br>
is a feature-rich JavaScript library which simplifies complex JavaScript functions and DOM manipulation<br>
• and the developer tools in both **[Google Chrome]** and **[Apple Safari]**, for debugging logic commands and making adjustments prior to changing the source code.<br>
• **[node.js]** was the environment for the communication between server and front end development<br>
• **[express]** for routing within node<br>
• **[SQL]** building database<br>
• **[bootstrap]** templated css frameworks<br>
• **[npm packages]** modules for simplifying large chuncks of complex code
*body parser* - pulls from the massive amount of meta data,
*ejs* - embedded javascript for dom manipulation, express,
*marked* - converts input into markdown,
*method override* - ability to overrirde POST method for PUT and DELETE crud functions,
*morgan* - logger,
*path* - grabs local static files,
*pg-promise* - simplifies communication with postgres,
*time-stamp* - records time from an action
2.) **Approach Taken**

- This application required major planning for the CRUD application while remembering to apply smaller functions in order to support and ease user experience. Before any major functionality began it was important to set up a wireframe, and ![schema]. Once the wireframe was done I began setting up the project by.
>
1.creating project folder and initializing npm which delivered the desired json packages<br> 2. creating an index folder which requires the specific dependencies and link to the resources which directed the proper routes to the controllers.<br> 3. using the index, controller and wiki.js models modules I was able to build out the crud application <br> 4. inside of the controller.js and wiki.js is where the necessary functionality was used for the CRUD appliction. <br>5. the wiki.js file is the module that allowed for communicating and editing the wiki_page table that was made in sql, while the controller.js file was the switch necessary for communication between user input and sql edits/updates
- In addition to the basic crud application functions utilizing the npm packages timestamp and markdown were used for recording the time a user update the schema with DATE key specific data, as well as allowing them to style the definition with markdown and having it rendered in the show page.
- In the public folder I was able to use a hover function so Method-Man could prompt the user to add information.
- For DOM manipulation the embedded javascript files were used. Using the *<% %>* notation, I was able to pull schema date and embed it right into the html file.
- Once the logic was stable I finally began coding out the CSS using a bootstrap template that allowed for a navigation to be hidden on mobile when not needed.

***Thank you all who helped***.<br>

3.) **User Stories**

- As a user I should be able to scroll over method man's face and have him talk to me
- As a user I should be able to click on method-man to create a new method item
- In the create *new* page as a user I should be able to label the item, give it a category and define the method and submit this information to the database
- In the define input area a user can write in markdown, and after saving the markdown will be rendered in the show page
- As a user I should be able to see the categories to the left when traveling back to the home page.
- As a user I should be able to select that category and reveal a new page which contains all of the elements within that category.
- As a user I should be able to click on one of those items and edit them on a *edit* page
- As a user I should be able to delete an item.<br>

4.) **Wireframe**<br>
![wireframe]

5.) **How To Use**

Using simple clicks and hovers a user can navigate the layout and utilize the full crud application, on both mobile and desktop device.

6.) **Unsolved Problems**

I found this project challenging and focused heavily on the functionality. I spent the majority of my time on the functionality mainly because it is why I am here. Styling has it's difficulties but I really just wish I had more time for it on this project more than anything.

- The first thing I would definitely add would be a search bar that could zero in on a specific title within the already simplified category selection. I wanted to attempt further but I had to stop to accomplish a finished product.
- To be honest I wish I used materialize instead of bootstrap. I found bootstrap more limiting than anything, and it felt like I was editing a squarespace page. I read through both materialize and bootstraps documentation, but made the wrong choice for my personal style. I was upset because I felt like I was using the !important tag in the CSS more often than not in order to override the bootstrap styling. What I liked about materialize is that it wasn't necessarily heavy on the templating full layouts like bootstrap but more giving you elements to render cool animations and icons.
- As I dived deeper and deeper into the crud modules capabilities I realized how much functionality could be built upon the original crud modules. I need to really work on smaller functions within each CRUD module to utilize their potential. I liked the string concatenation that was necessary for getting the DATE data key to recognize the timestamp function, as well as the markdown rendering, and the forEach loops when embedding the javascript. With more time I would have definitely cleaned up my code much more, and of course I could have spent days on stylizing the app.

[HTML]:http://html.com/
[CSS]: https:en.wikipedia.org/wiki/Cascading_Style_Sheets
[JavaScript]: https://www.javascript.com/
[jQuery]:https:jquery.com/
[Google Chrome]:https://developers.google.com/web/tools/
[Apple Safari]:https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html
[node.js]:https://nodejs.org/en/
[SQL]:https://www.postgresql.org/
[express]:https://www.npmjs.com/package/express
[bootstrap]:http://getbootstrap.com/
[npm packages]:https://www.npmjs.com/
[schema]:http://i.imgur.com/CF1fD31.png
[wireframe]:http://i.imgur.com/PeIRJHk.jpg
