import { mainColor, BgColor, mainBgColor, logoColor} from '../vars/vars';

export const footerStyle = {
    backgroundColor: logoColor,
    fontSize: '1.3em',
    padding: '1em',
    footerContainer: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    li:{
        listStyle: 'none',
        padding: '.8em 0'
    },
    a: {
        textDecoration: 'none',
        color: mainColor
    },
    span: {
        paddingRight: '.5em',
        fontSize: '1.3em',
    },
    copyright: {
        color: mainColor,
        fontSize: '.6em',
        textAlign: 'center'
    },
    footerNav: {
        flex: '1'
    }

}