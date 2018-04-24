import React from 'react';
//icons
import FaHome from 'react-icons/lib/fa/home';
import FaFolderO from 'react-icons/lib/fa/folder-o';
import FaPhone from 'react-icons/lib/fa/phone';
import FaExclamationCircle from 'react-icons/lib/fa/exclamation-circle';
//pages
import { Home } from '../../pages/home';
import { Portfolio } from '../../pages/portfolio/portfolio';
import {About} from '../../pages/about/about';
import {Contact } from '../../pages/contact/contact';

export const routes = [
    {
        title: 'Home',
        icon: <FaHome />,
        path: '/',
        exact: true,
        sidebar: ()=><Home />,
        main: ()=><Home />
    },
    {
        title: 'Portfolio',
        icon: <FaFolderO />,
        path: '/portfolio',
        sidebar: ()=><Portfolio />,
        main: ()=><Portfolio />
    },
    {
        title: 'About',
        icon: <FaExclamationCircle />,
        path: '/about',
        sidebar: ()=><About />,
        main: ()=><About />
    },
    {
        title: 'Contact',
        icon: <FaPhone />,
        path: '/contact',
        sidebar: ()=><Contact />,
        main: ()=><Contact />
    }
]
