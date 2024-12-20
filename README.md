# Cats, Coffee and Covers
This is the README for the Front-end React application - other information can be found in the Back-end repository documentation [here](https://github.com/elamont174/catscoffeecovers).

## Project Overview
- Welcome to "Cats, Coffee & Covers".
- ![responsive screenshot](public/images/responsive.png)
- The website is a social media site where users can share their common interests of cats, reading and coffee.
- Users can create their own profile where they can share what they are currently reading, what their favourite coffee is and the name of their pet.
- Users can also leave reviews of books that they have recently read with an accompanying photo. 
- When exploring the site, users can like other members reviews to show their appreciation. 
- The deployed site can be found [here](https://cats-coffee-covers-ef0ac9a164ac.herokuapp.com/).

### Target Audience
- The target audience is adults who like cats, books and coffee! 

## Agile methodology
- A project board was set up and the project divided into user stories.
- MoSCoW (must have, should have, could have) prioritisation was used to prioritise the importance of tasks. 
- The project board was used to organise sprints (for time management) and to keep track of tasks.
- The project board can be found [here](https://github.com/users/elamont174/projects/7/views/1). 
- ![Project board in action](public/images/project-board.png)
- ![Project board in action](public/images/project-board2.png)


## Front-end documentation
### User stories
**Must haves**

*As a user I can create an account so that I can access feature for logged in users.*
- SUCCESS CRITERIA:
- Users can create an account with a username and password
- Users can access certain content as a logged in user but not a logged out user
- RESULT
- Users are able to create an account with a username and password in order to access their and other members profiles. They must be logged in to be able to like and leave reviews as well. 

*As a user, I have a customisable profile page where I can display information about myself.*
- SUCCESS CRITERIA:
- Users can read their own and others profile pages
- Users can edit their own profile pages but NOT others
- Some information will be optional and not displayed
- RESULT
- Profile pages are created upon registration with a default image. Profile pages can be edited when users are logged in.

*As a user, I can log-in to the site to access content that can only be accessed by logged-in users.*
- SUCCESS CRITERIA:
- Users can log-in and log-out easily
- RESULT
- There is a log-in button displayed when a user is logged out and vice versa. This can easily be clicked. 
- Users must be logged in to be able to like and leave reviews. 

*As a user, I can create book reviews to share my views with the community.*
- SUCCESS CRITERIA:
- User can create a review with Book Title, Author, Genre, Content review and a photo
- RESULT
- When logged in, users can click "new review" and create a new review

*As a user I can view the review page so that I can read the review.*
- SUCCESS CRITERIA:
- Clicking on the review makes it easier to read
- RESULT
- Clicking on the review takes you to it's individual page. From there, if you own the review, you can edit or delete the review.
- You can like the review if you don't own it. 

*As the review owner I can edit my review so that I can make corrections or update my post after it was created*
- SUCCESS:
- The user who created the review can edit the review
- Other users cannot edit the review
- RESULT
- When you click on the review, you can then click another button which allows you to edit the review but this doesn't work if you don't own the review.

*As the review owner I can delete my review.*
- SUCCESS CRITERIA:
- The user who created the review has the option to delete it
- Other users cannot delete the review
- RESULT
- When you click on the review, you can then click another button which allows you to delete the review but this doesn't work if you don't own the review.

**Should haves**

*As a user, I can search for a review by book title or genre so that I can find reviews I'm interested in.*
- SUCCESS CRITERIA:
- ability to search for reviews by Book Title, Author, Genre and Reviewer
- RESULT
- Feature isn't included in this iteration. This would be considered a 'future improvement'.

**Could haves**

*As a user, I can comment on book reviews so that I can share my views with others.*
- SUCCESS CRITERIA:
- ability to comment on reviews as a user
- RESULT
- Feature isn't included in this iteration. This would be considered a 'future improvement'.

*As a user I can 'like' reviews to show that I like them.*
- SUCCESS CRITERIA:
- the ability to like posts
- RESULT
- When logged in, users can like reviews that they didn't write. 

*As a user I am able to 'follow' my favourite profiles so I can keep up to date with their content.*
- SUCCESS CRITERIA:
- ability to 'follow' another user
- RESULT
- Users can follow other users but can't follow themselves.

*As a user, I can't upload images which are too big and will disrupt the aesthetic of the page.*
*As a developer, the user can't upload images which are too big and could cause storage issues.*
- SUCCESS CRITERIA:
- If a user tries to upload a large image, they will receive an error message and the photo won't be uploaded.
- RESULT
- Currently, the photo will not be uploaded, but the error message doesn't show. This would be considered a 'future improvement'. 

### Wireframes 
- ![Design wireframe](public/images/initial-wireframe.png)

### User experience
### Design
#### Colour scheme
- ![logo](public/images/ccc-logo.png)
- The colour scheme was centred around the logo for the site. Once the logo was selected, it was run through imagecolorpicker.com which created the colour-scheme below. 
- ![public/images/pp5-palette.png](public/images/pp5-palette.png)
- The logo was selected as it was soft and cute with gentle pastel colours. Since the theme of the site is around the mindful theme of reading, cats and drinking coffee, these qualities were deemed important. 
- The main colours used for the site are the gentle pink tones in order to provide a calm environment. Any hover features are deliberately blue to create a contrast. 

#### Typography
- Sans-serif is considered the best styles of font for accessibility for dyslexic and autistic people so this was taken into consideration. A font with rounded edges was chosen to fit with the calm, gentle theme of the site. 
- Sniglet was chosen as it fit these criteria:
- ![Sniglet screenshot](public/images/sniglet.png)

### Features
#### Profiles
- ![Profile screenrecord](public/images/profile.gif)
- The profile page has a profile photo, the number of reviews that the user has written, the number of followers they have, the number of people that they follow and a list of their reviews with attached photos. 
- There is also an information paragraph which is populated from information given by the user in the 'Edit profile' page.
- You can follow other users if you are logged in by clicking the 'follow' button. This changes into an 'unfollow' button which can be used to unfollow the user if you change your mind. 
- By clicking the three dots, you can edit the information on your profile, change your username and password. 
- The information includes Name, Bio, Location, Currently Reading, Favourite Coffee and Pets Name. 

#### Reviews
- ![review screenshot](public/images/review.jpg)
- You can create a new review by clicking the "+" in the navigation bar (if you are logged in).
- When you create a review, it is added to your profile and also the homepage. If someone likes your review, it will be added to their liked page and if someone follows you it will be added to their 'feed'. 
- You can edit or delete your review by clicking on the review you want to change/delete and then clicking the three dots. 
- Reviews 

#### Followers
- You can follow a user by clicking the button on their profile.
- ![follow button](public/images/follow.jpg)
- You can unfollow a user by clicking the button again.
- ![unfollow button](public/images/unfollow.jpg)


#### Navigation
- Navigation is easily achieved via the NavBar. 
- If you are logged in, then the NavBar will look like this:
- ![navbar loggedin](public/images/nav1.png)
- There are buttons for "New Review", "Home", "Feed", "Liked", "Log-out" and "Profile".
- A bubble pops up with the name of the buttons when you hover over them and a contrasting colour highlights the button. 
- Clicking the logo on the left will also take you to the homepage.
- If you are logged out, then the NavBar will look like this:
- ![navbar loggedout](public/images/nav2.png)
- There are buttons for "Home", "Log-in" and "Register".
- A bubble pops up with the name of the buttons when you hover over them and a contrasting colour highlights the button. 
- Clicking the logo on the left will also take you to the homepage.


### Setting up a new repository
1. Do not use the Code Institute template. Create a new blank repository with a unique name (ensure it is lowercase).
2. Create a react app by typing the following into the terminal:
- "npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm"
### Deployment
1. Go to the Dashboard.
2. Click 'New' > 'Create new app'.
3. Choose a **unique** app name, choose the closest region and press 'Create app'.
4. Go to the Heroku app Dashboard.
5. Click the 'Deploy' tab.
6. In the Deployment method section, click "Connect to GitHub".
7. Search for the repo you want to connect and click 'Connect'.
8. Scroll down and click "Deploy Branch" in the Manual deploy section.
9. Your app has been deployed! You can find it in "Open app".

### Security
- A Secret Key was created which was kept private in env.py.

### Testing 
Please see separate [TESTING.md](TESTING.md) file for all testing.

## Future improvements
- With more time, I would add comment functionality to the posts. I would also add a search feature.
- On a larger scale, the site would be expanded to also allow reviews of coffee shops without photos and allow posting of photos without reviews (for cat pictures). The idea being that the site is truly about 'Cats, Coffee & Covers'.

## Reusable React Components
**Asset.js**
Displays a spinner whenever a page is loading.

**Avatar.js**
A user's profile photo: used in every user's profile.
Allows a user to display a profile photo.

**MoreDropdown.js**
Shows three dots which expands into a dropdown menu when clicked: used when Editing Profiles or Editing Reviews.

**NavBar.js**
The navigation bar: this is used across every page.
It allows the user to easily navigate between pages, log-in/out, access their profile (if logged-in), register (if logged out) and create new reviews.

**NotFound.js**
Displays a 'Page not found' error message when an unknown link is clicked or an incorrect url is typed into the search engine. 

## Languages
- HTML
- CSS
- Bootstrap
- React

## Libraries used
- React is a JavaScript library used to build the user interface. 
- React-Bootstrap was used to provide pre-built, responsive components.
- Axios handled API requests between the React frontend and the Django REST API, allowing the Front-end to communicate with the Back-end.
- React Router Dom was used for managing routing and navigation between different pages within the React frontend.

## Technologies used
- [GitHub](https://github.com/) was used to host the repository and as version control. 
- [Heroku](https://www.heroku.com/) was used to deploy the frontend of the project.
- [Leonardo Ai](https://app.leonardo.ai/) created all of the images - the profile photos and posts.
- [ChatGPT](https://chatgpt.com/) created the book titles, author names and book reviews.
- [Table to Markdown](https://tabletomarkdown.com/convert-spreadsheet-to-markdown/) created the table in my TESTING.md file.
- [ImageColourPicker.com](https://imagecolorpicker.com/) was used to get the colourscheme from the logo. 
- [FontAwesome](https://fontawesome.com/) was used to choose icons for the NavBar.

## Credits
- I utilised the Code Institute Moments walkthrough to help me create my website and then adapted the code and created 2 unique models to make the project my own. 
- When debugging, [these](https://stackoverflow.com/questions/70612439/csrf-failed-origin-checking-failed-http-localhost8000-does-not-match-any) [sites](https://forum.djangoproject.com/t/django-csrf-trusted-and-allowed-hosts-issues/23842/6) were very helpful. 
- With the help of Slack and [this](https://gist.github.com/ianmeigh/8e603b91a38d7829d959402bfcf29d3d) website I installed ESlint.

## Acknowledgements 
- My mentor Julia Konovalova for always supporting me.
- The Bootcamp team at Code Institute for ensuring I had the space to complete this project while working at the same time. 
- My husband Malcolm Lamont for being my biggest cheerleader and my harshest critic.
- Stephanie Bell for testing my website. 

