# ScrapSwap

Scrap Swap is a social hub for yarny crafters to meet up and swap scraps! Sometimes, we just need a few yards or meters of a certain color, certain fiber content, or yarn weight. This is the place for you!

As my App Academy capstone project, this application will showcase the skills developed in the previous 20 weeks, and will utilize HTML & CSS, React, Redux, JavaScript, Python, SQLAlchemy, PostgreSQL, JSON API, and Git for a fully functional self-contained web-app.

| [Live Site](https://scrapswap.herokuapp.com/)
| [MVP Feature List](https://github.com/kim-yura/Scrap-Swap/wiki/MVP-List)
| [Database Schema](https://github.com/kim-yura/Scrap-Swap/wiki/Database-Schema)
| [API Documentation](https://github.com/kim-yura/Scrap-Swap/wiki/API-Documentation)
| [Frontend Routes](https://github.com/kim-yura/Scrap-Swap/wiki/Frontend-Routes)
| [User Stores](https://github.com/kim-yura/Scrap-Swap/wiki/User-Stories)
|
<br/><br/>

# Technologies Used

Scrap Swap is built on a React / Redux frontend, a Python / Flask backend, and a PostgreSQL database. Additionally, AWS S3 is implemented for image uploads.

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" height=40 />  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" height=40/>  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/>  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/>  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/>  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height=40/>  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" height=40 />
<br/><br/>

# How to Get Started

1. Clone this repository
   ```bash
   git clone https://github.com/kim-yura/Scrap-Swap.git
   ```

2. Install dependencies in the root directory

   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

3. `CD` into the `/react-app` directory and install dependencies

   ```bash
   npm install
   ```

4. Create a **.env** file based on the example with proper settings for your
   development environment, including an AWS S3 account for image uploads

5. Setup a PostgreSQL user based on your **.env** file

6. Setup a PostgreSQL database based on your **.env** file

7. Start your shell, migrate your database, seed your database, and run the flask app

   ```bash
   pipenv shell
   flask db upgrade
   flask seed all
   flask run
   ```

8. In a new terminal, `CD` into `/react-app` and run the React app

   ```bash
   npm start
   ```
<br></br>

# Features

## Scraps (Full CRUD)
Scraps are the primary feature of Scrap Swap. Users may browse Scraps posted by other users or upload their own Scraps, which may be edited or deleted. Scraps are used to communicate yarn scraps users may wish to swap, and an extensive data collection form ensures robust searchability.

## Comments (Full CRUD)
Users may leave comments on Scrap posts. Comments may mark the start of a new comment thread, or may be nested underneath other comments. Dynamic rendering of comments extends to Edit / Delete functions for owned comments.

## Likes (Create, Delete)
Users may like or unlike Scraps. Liked Scraps will be displayed to the user in a private gallery on their user page.

## Follows (Create, Delete)
Users may follow or unfollow other users. Lists of both followers and accounts followed are visible on user pages. For authenticated users, the home page will also display a small gallery of recently posted Scraps from accounts they follow.

## User Profile (Create, Read, Delete)
Upon signing up as a user, users may further customize their user profiles through changing their usernames, profile pictures, or profile bios. This information is visible on all user profiles for all authenticated users.

## Image Uploading with AWS S3
AWS S3 is used for uploading images of Scraps, editing stored images of Scraps, or changing the user's profile picture.

## Search Feature
Users may search existing Scraps for Scraps that best fit their needs. An extensive search bar allows users to narrow their search using parameters including yarn weight, inclusive color search, minimum yardage, household allergens, and more.
<br></br>

# Database Schema
![image of database](https://user-images.githubusercontent.com/89601983/155236765-7fc14493-2eab-4d3b-b973-438700e7a62a.png)

# Conclusion
After 20 weeks as a Full Stack Software Engineering student at App Academy, this capstone project gave me the opportunity to apply and demonstrate all that I have learned in designing and developing a full-stack application. This project also gave me the opportunity to bring in my other passion -- knitting -- as well as my background in user experience design to create not just a technically holistic project, but also a project that encapsulates who I am as an aspiring junior developer.

Given the 2-week timeframe of this assignment, there are still a number of things that I hope to implement in future versions. For example, a direct messaging feature between users as well as a user rating system based on Swaps completed would help in establishing user-to-user trust, as well as security / privacy.

Finally, I'd like to thank a/A's teaching staff who pushed us to do our best, and all of my knitting friends who submitted fake user and Scrap data -- data that really made the site come to life!
