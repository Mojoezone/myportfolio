import React from 'react';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square';

export const socialNav = [
    {
        title: 'Mojoezone',
        icon: <FaGithubSquare />,
        url: 'https://github.com/Mojoezone',
        isOpenNewPage: '_blank'
    },
    {
        title: 'joemowebdev',
        icon: <FaLinkedinSquare />,
        url: 'https://www.linkedin.com/in/joe-mo-04228b101/',
        isOpenNewPage: '_blank'
    },
    {
        title: 'mojoezone@gmail.com',
        icon: <FaEnvelopeSquare />,
        url: 'mailto: mojoezone@gmail.com',
        isOpenNewPage: '_self'  
    }
];