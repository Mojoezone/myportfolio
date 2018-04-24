import { mainColor, BgColor, logoColor, mainBgColor} from '../../components/vars/vars';

export const portfolioStyle ={
    paddingBottom: '20%',
    h1:{
        color: mainBgColor,
        backgroundColor: logoColor,
        padding: '1.1em 0',
        fontSize: '2em',
        marginTop: '0'
    },
    thisWebsite:{
        margin: '5% 10%'
    },
    h2:{
        textDecoration: 'underline',
        textDecorationColor: mainColor,
        paddingBottom: '2em'
    },
    ulThisWebsite:{
        display: 'flex',
        flexFlow:' row wrap'
    },
    li: {
        listStyle: 'none',
        flex: '1'
    },
    img:{
        width: '75px',
        height: 'auto'
    },
    projects: {
        marginTop: '10%',
        display: 'flex',
        flexFlow:' row wrap',
        justifyContent: 'space-around'
    },
    projectsContainer:{
       position: 'relative',
       marginTop: '2em'
    },
    projectsMapContainer: {
        display: 'flex',
        flexFlow:' row wrap',
        width: '400px',
        minHeight: '420px',
        borderBottom: `1px solid ${logoColor}`
    },
    projectsTextContainer:{
        position: 'absolute',
        bottom: '-10px'
    },
    projectsTextH2: {
        width: '400px',
        fontSize: '1.4em',
        cursor: 'pointer',
        color: logoColor,
        textShadow: `1px 1px 1px ${BgColor}`
    },
    projectsUl:{
        display: 'flex',
        flexFlow:' row wrap'
    },
    projectsLi: {
        listStyle: 'none',
        flex: '1'
    },
    projectsImg:{
        width: '25px',
        height: 'auto'
    }, 
    projectsModal: {
        border: `1px solid ${logoColor}`,
        padding: '1.5em',
        textAlign: 'left',
        transition: '.4s all easy-in-out'
    },
    projectsModalAtag:{
        color: logoColor
    }
}