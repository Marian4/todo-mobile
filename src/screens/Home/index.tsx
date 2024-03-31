import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Task, TaskType } from "../../components/Task";
import { useState } from "react";

export function Home () {
    const [ tasks, setTasks ] = useState<TaskType[]>([])
    const tasksCompleted = tasks.reduce((sum, task) => sum + (task.checked ? 1 : 0), 0)
    const [ description, setDescription ] = useState<string>('')

    const handleAddTask = () => {
        const newTask = { id: tasks.length + 1, description, checked: false }
        setTasks(prevState => [...prevState, newTask])
        setDescription('')
    }

    const handleRemoveTask = (id: number) => {
        setTasks(prevState => prevState.filter(task => task.id !== id))
    }

    const toggleCheckTask = (id: number) => {
        setTasks(prevState => prevState.map((task) => {
            return task.id !== id ? task : {...task, checked: !task.checked}
        }))
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.appTitleLeft}>to</Text>
                <Text style={styles.appTitleRight}>do</Text>
            </View>

            <View style={styles.addTaskForm}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    value={description}
                    onChangeText={text => setDescription(text)}
                />
                <TouchableOpacity 
                    style={styles.addTaskButton}
                    onPress={handleAddTask}
                >
                    <Image
                        style={{width: 20, height: 20}}
                        source={require('../../../assets/plus.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.infoPanel}>
                <View style={styles.info}>
                    <Text style={styles.createdTitle}>Criadas</Text>
                    <Text style={styles.counter}>{tasks.length}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.completedTitle}>Concluídas</Text>
                    <Text style={styles.counter}>{tasksCompleted}</Text>
                </View>
            </View>

            <FlatList
                style={styles.tasks}
                data={tasks}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => {
                    return (
                        <Task
                            id={item.id}
                            description={item.description}
                            checked={item.checked}
                            toggleCheck={toggleCheckTask}
                            handleRemove={handleRemoveTask}
                        />
                    )
                }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.emptyList}>
                        <Image
                            style={{width: 50, height: 50}}
                            source={require('../../../assets/clipboard.png')}
                        />
                        <Text style={styles.emptyListTitle}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.emptyListDescription}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                }
            />
        </View>
    )
}