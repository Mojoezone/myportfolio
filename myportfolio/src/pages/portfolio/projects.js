

import fashionFamily  from '../../images/familyFashion.jpg';
import shield  from '../../images/shield.jpg';
import bikeShop from '../../images/bikeShop.jpg';
import goblin from '../../images/goblin.jpg';

import htmlLogo  from '../../images/html5.png';
import cssLogo from '../../images/css3.png';
import bsLogo from '../../images/bootstrap.png';
import sassLogo from '../../images/sass.png';
import jsLogo from '../../images/javascript.png';
import jqLogo from '../../images/jquery.png';
import nodeLogo from '../../images/nodejs.png';
import phpLogo from '../../images/php.png';
import phpMySqlLogo from '../../images/phpmysql.png';

export const projects = [
    {   
        id: '11',
        title: 'Neightborhood Bikeshop',
        imgLink: bikeShop,
        urlLink: 'https://github.com/Mojoezone/BikeshoSpike',
        description: ['Sketched, designed the logo, wireframed in Ai, Photoshop comps, hand coded, uploaded to Git'],
        skills: [
            {
                id: 1,
                logos: htmlLogo
            }, 
            {
                id: 2,
                logos: cssLogo
            }, 
            {
                id: 3,
                logos: bsLogo
            }, 
            {
                id: 4,
                logos: jsLogo
            }, 
            {
                id: 5,
                logos: nodeLogo
            }
        ],
        accomplishment: 'Learned Nodejs, Bootstrap, the Headless CMS SpikeCf, ES6 and so much more.'
    },
    {   
        id: '12',
        title: 'Fashion Family',
        imgLink: fashionFamily,
        urlLink: 'http://mojoezone.com/fashionfamily/',
        description: ['Sketched, designed the logo, wireframed in Ai, Photoshop comps, hand coded, uploaded to livesite used FileZilla'],
        skills: [
            {
                id: 1,
                logos:htmlLogo
            }, 
            {
                id: 2,
                logos: cssLogo
            }, 
            {
                id: 3,
                logos: jsLogo
            }, 
            {
                id: 4,
                logos:phpLogo
            }, 
            {
                id: 5,
                logos: phpMySqlLogo
            }, 
            {
                id: 6,
                logos: 
                sassLogo
            }
        ],
        accomplishment: 'Data from backend to frontend using MySql to ouput the differences, and Sass.'
    },

    {   
        id: '13',
        title: 'Goblin',
        imgLink: goblin,
        urlLink: 'http://mojoezone.com/GoblinExile/goblinExile.html',
        description: ['Hand coded, uploaded to livesite used FileZilla'],
        skills: [
            {
                id: 1,
                logos: htmlLogo
            }, 
            {
                id: 2,
                logos: cssLogo
            }, 
            {
                id: 3,
                logos: jqLogo
            }
        ],
        accomplishment: 'First lesson on Javascript and jQuery, speed vs high resolution, variables and function.'
    },
    {   
        id: '14',
        title: 'Shield',
        imgLink: shield,
        urlLink: 'http://mojoezone.com/shield/',
        description: ['Sketched, designed the logo, wireframed in Ai, Photoshop comps, hand coded, uploaded to livesite used FileZilla'],
        skills: [
            {
                id: 1,
                logos: htmlLogo
            }, 
            {
                id: 2,
                logos: cssLogo
            }, 
            {
                id: 3,
                logos: jsLogo
            }
        ],
        accomplishment: 'Learn the Javascript Modulus for carousel and used negative padding-bottom fro responsive media.'
    }
];