import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer>
            <div className="footer-row">
            <li><a className='tech-link' href='https://reactjs.org/' target='_blank' rel='noreferrer'>React</a></li>
                <li><a className='tech-link' href='https://redux.js.org/' target='_blank' rel='noreferrer'>Redux</a></li>
                <li><a className='tech-link' href='https://www.javascript.com/' target='_blank' rel='noreferrer'>JavaScript</a></li>
                <li><a className='tech-link' href='https://www.python.org/' target='_blank' rel='noreferrer'>Python</a></li>
                <li><a className='tech-link' href='https://www.sqlalchemy.org/' target='_blank' rel='noreferrer'>SQLAlchemy</a></li>
                <li><a className='tech-link' href='https://www.postgresql.org/' target='_blank' rel='noreferrer'>PostgreSQL</a></li>
                <li><a className='tech-link' href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' rel='noreferrer'>CSS</a></li>
                <li><a className='tech-link' href='https://jsonapi.org/' target='_blank' rel='noreferrer'>JSON API</a></li>
                <li><a className='tech-link' href='https://git-scm.com/' target='_blank' rel='noreferrer'>Git</a></li>
            </div>
            <div className="divider" />
            <div className="footer-dev">
                <li>©2022 Scrap Swap</li>
                <li>Yu Ra Kim</li>
                <a href="https://github.com/kim-yura" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/yura-kim/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    )
};

export default Footer;
