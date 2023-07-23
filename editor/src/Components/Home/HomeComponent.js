import React from 'react';
import { Link } from 'react-router-dom';
import styles from './main.module.css';

const HomeComponent = props => {
    const { createId } = props;
    return (
        <div className={styles.home}>
            <h1>RealTime Code-Editor</h1>
            <p className={styles.heading}>RealTime code-editors are software tools designed to provide an interactive coding environment where developers can write, edit, and execute code in real-time. These editors offer features that enable immediate feedback and responsiveness as developers write code, allowing them to see the results of their code execution instantly. Video calling and Real time chat is also provided within this application.</p>
            
            <Link to={`/${createId()}`}>
                <button className={`${styles.btn} btn_primary`}>Start Coding</button>
            </Link>


        

        </div>
    );
}

export default HomeComponent;