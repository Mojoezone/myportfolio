import { mainColor, BgColor, mainBgColor} from '../vars/vars';



export const headerStyle ={
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: BgColor,
    width: '15em',
    height: '100%',
    padding: '0 2em',
    zIndex: '999999',
    ul: {
        //float: 'right',
       padding: '2em 2em 0 0'
    },
    logoContainer: {
        //float: 'left'
    },
    logoSVG:{
        width: '5em',
        height: '5em',
        margin: '2em 0 0 2em'
    },
    h2:{
        margin: ['0 0 0 1.5em'],
        color: mainBgColor
    },
    li:{
        listStyle: 'none',
        paddingLeft: '2em'
    },
    a:{
        textDecoration: 'none',
        color: mainColor,
        fontSize: '1.5em'
    },
    icons: {
        paddingRight: '.2em'
    },
    container:{
        clear: 'both', 
        width: '100%', 
        backgroundColor: 'red',
    }
 }