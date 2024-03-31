import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    header: {
        backgroundColor: '#0D0D0D',
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    appTitleLeft: {
        fontSize: 34,
        color: '#4EA8DE',
        fontWeight: '900'
    },
    appTitleRight: {
        fontSize: 34,
        color: '#5E60CE',
        fontWeight: '900'
    },
    addTaskForm: {
        marginTop: -27,
        width: '100%',
        flexDirection: 'row',
        gap: 5,
        paddingLeft: 20,
        paddingRight: 20
    },
    input: {
        backgroundColor: '#333',
        height: 54,
        flex: 1,
        borderRadius: 6,
        padding: 15,
        color: '#f2f2f2',
    },
    addTaskButton: {
        height: 54,
        width: 54,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30
    },
    info: {
        flexDirection: 'row',
        gap: 5
    },
    createdTitle: {
        color: '#4EA8DE',
        fontWeight: 'bold'
    },
    completedTitle: {
        color: '#5E60CE',
        fontWeight: 'bold'
    },
    counter: {
        color: '#f2f2f2',
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 8,
        borderRadius: 999
    },
    tasks: {
        width: '100%',
        marginTop: 25,
        paddingLeft: 20,
        paddingRight: 20,
    },
    emptyList: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 50,
        borderTopWidth: 1,
        borderTopColor: '#333'
    },
    emptyListTitle: {
        marginTop: 15,
        color: '#808080',
        fontSize: 14,
        fontWeight: 'bold'
    },
    emptyListDescription: {
        color: '#808080',
        fontSize: 14,
    },
})