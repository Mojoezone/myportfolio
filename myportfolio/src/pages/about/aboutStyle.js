import { mainColor, mainBgColor, logoColor, textShadow} from '../../components/vars/vars';



export const aboutStyle = {
    padding: '5% 0 20% 0',
    quote: {
        fontSize: '1.5em',
        color: logoColor,
        marginTop: '0'
    },
    h2:{
        color: mainBgColor,
        backgroundColor: logoColor,
        padding: '1.1em 0',
        fontSize: '2em'
    },
    p:{
        margin: '10% 15%',
        fontSize: '1.5em',
        textAlign: 'left',
        boxShadow: textShadow
    },
    skillDiv: {
        margin: '10%',
        boxShadow: textShadow
    },
    underline: {
        textDecoration: 'underline',
        textDecorationColor: mainColor
    },
    figureContainer: {
        display: 'flex',
        flexFlow:' row wrap',
        padding: '0 10%'
    },
    figure:{ 
        flex: '1',
        flexWrap: 'wrap'
    },
    img: {
        width: '75px',
        heigth: 'auto',
    },

    education:{
        textAlign: 'left',
        margin: '3% 15%'
    },
    buttonAtag:{
        color: mainBgColor,
        backgroundColor: logoColor,
        borderRadius: '10px',
        padding: '.5em 1em',
        fontSize: '1.2em',
        textDecoration: 'none'
    },
    buttonContainer: {
        marginTop: '2em'
    }

}