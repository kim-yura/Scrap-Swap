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

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" height=40 />  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" height=40/>  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/>  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height=40/>  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" height=40 />
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
