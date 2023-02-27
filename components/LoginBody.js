import { StyleSheet, TextInput, Text, View } from "react-native";

const LoginBody = (props) => {

    const nameBoxHandler = (nameInput) => {
        props.onNameChange(nameInput);
    }

    const pswdBoxHandler = (pswdInput) => {
        props.onPswdChange(pswdInput);
    }

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.boxText}>Name</Text>
            <TextInput
                style={styles.loginBoxes}
                onChangeText={nameBoxHandler} />
            <Text style={styles.boxText}>Password</Text>
            <TextInput
                style={styles.loginBoxes}
                onChangeText={pswdBoxHandler} 
                secureTextEntry={true}/>
        </View>
    );
};


export default LoginBody;

const styles = StyleSheet.create({
    //Login Boxes Formatting
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },

    boxText: {
        flex: 1,
        fontSize: 25,
        width: '90%',
        textAlign: 'left',
        textAlignVertical: 'bottom',
        paddingHorizontal: 8,
        paddingTop: '10%'
    },

    loginBoxes: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#36393f',
        backgroundColor: 'white',
        width: '90%',
        paddingHorizontal: 8,
        borderRadius: 6,
    },
});