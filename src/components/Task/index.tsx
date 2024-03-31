import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export type TaskType = {
    id: number,
    description: string,
    checked: boolean,
}

export type TaskProps = {
    id: number,
    description: string,
    checked: boolean,
    handleRemove: (id: number) => void
    toggleCheck: (id: number) => void
}

export function Task ({ 
    id, 
    description, 
    checked, 
    handleRemove, 
    toggleCheck 
}: TaskProps) {

    return (
        <View style={styles.container}>
            { !checked ?
                <TouchableOpacity 
                    style={styles.uncheckedButton} 
                    onPress={() => toggleCheck(id)}
                >
                </TouchableOpacity> :
                <TouchableOpacity 
                    style={styles.checkedButton}
                    onPress={() => toggleCheck(id)}
                >
                    <Image
                        style={{width: 7, height: 5}}
                        source={require('../../../assets/checked.png')}
                    />
                </TouchableOpacity>
            }
            <Text style={!checked ? styles.description : styles.descriptionCrossed}>{description}</Text>
            <TouchableOpacity onPress={() => handleRemove(id)}>
                <Image
                    style={{width: 14, height: 16}}
                    source={require('../../../assets/trash.png')}
                />
            </TouchableOpacity>
        </View>
    )
}