import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    header: {
        height: '9%',
        backgroundColor: "#24145f"
    },
    symbol: {
        height: '100%',
        width: '100%',
    },
    menu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-evenly",
        height: '7%',
        backgroundColor: '#997610',
        alignContent: 'center',
    },
    menuButton: {
        height: '80%',
        justifyContent: 'center',
        paddingVertical: 2,
        paddingHorizontal: 4,
        elevation: 3,
        maxWidth: '20%',
    },
    menuText: {
        alignItems: 'center',
        fontSize: 18,
        lineHeight: 0,
        letterSpacing: 0.25,
        color: '#fff',
        fontFamily: 'OpenSans_400Regular',
    },
    banner1: {
        height: '13%',
        backgroundColor: '#282828'
    },
    banner2: {
        marginTop: 10,
        height: "33%",
        backgroundColor: '#997610'
    },
    bannerImage: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    categories: {
        height: '30%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 50,
        justifyContent: "space-evenly",
    },
    button: {
        width: '40%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        borderWidth: 5,
        borderColor: '#997610',
    },
    text: {
        fontSize: 17,
        lineHeight: 0,
        fontWeight: 'bold',
        fontStyle: 'italic',
        letterSpacing: 0.25,
        color: '#20174e',
        fontFamily: 'OpenSans_400Regular',
    },
    highlight: {
        fontWeight: "bold",
        fontSize: 30,
        justifyContent: "center",
        alignItems: "center",
        color: '#20174e',
        backgroundColor: '#fff',
        marginBottom: 20,
        fontFamily: 'OpenSans_400Regular',
    },
    card: {
        flexWrap: 'wrap',
        flexDirection: "row",
        justifyContent: 'space-around',
        alignContent: 'space-around',
        backgroundColor: "#eeeeee",
        height: 100,
    },
    cardText: {
        fontSize: 45,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#20174e',
        fontFamily: 'OpenSans_400Regular',        
    },
    assurance: {
        marginTop: 30,
        height: 180,
    },
    footer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-evenly",
        height: 50,
        backgroundColor: "#24145f",
        alignContent: 'center',
    },
});