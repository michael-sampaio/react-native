import { StatusBar, StyleSheet } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'android' ? 20 : StatusBar.currentHeight;

export const style = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    header: {
        height: 80,
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
        height: 65,
        backgroundColor: '#997610',
        alignContent: 'center',
    },
    menuButton: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 2,
        paddingHorizontal: 4,
        elevation: 3,
        width: 70,
    },
    menuText: {
        alignItems: 'center',
        fontSize: 16,
        letterSpacing: 0.25,
        color: '#fff',
        fontFamily: 'OpenSans_400Regular',
    },
    banner1: {
        resizeMode: 'contain',
        height: 69,
        backgroundColor: '#282828'
    },
    banner2: {
        resizeMode: 'contain',
        marginTop: 10,
        height: 164,
        backgroundColor: '#997610'
    },
    bannerImage: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    categories: {
        height: 120,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 40,
        marginBottom: 20,
        justifyContent: "space-evenly",
    },
    categoriesButton: {
        width: '40%',
        height: '40%',
        marginBottom: 20,
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
    categoriesText: {
        fontSize: 14,
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
        marginTop: 10,
        marginBottom: 20,
        fontFamily: 'OpenSans_400Regular',
    },
    card: {
        flexWrap: 'wrap',
        flexDirection: "row",
        backgroundColor: "#eeeeee",
        height: 100,
        justifyContent: 'space-around',
    },
    cardText: {
        fontSize: 45,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#20174e',
        fontFamily: 'OpenSans_400Regular',
    },
    assuranceBanner: {
        resizeMode: 'contain',
        marginTop: 30,
        height: 140,
    },
    footer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-around",
        height: 40,
        backgroundColor: "#24145f",
        alignItems: 'flex-end'
    },
});