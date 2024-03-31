import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        width: '100%',
        borderRadius: 6,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 15,
        marginBottom: 10
    },
    description: {
        flex: 1,
        color: '#f2f2f2'
    },
    descriptionCrossed: {
        flex: 1,
        color: '#808080',
        textDecorationLine: 'line-through'
    },
    uncheckedButton: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#5E60CE',
        borderRadius: 999
    },
    checkedButton: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#5E60CE',
        borderRadius: 999,
        backgroundColor: '#5E60CE',
        alignItems: 'center',
        justifyContent: 'center'
    }
})