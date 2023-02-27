import { useState } from 'react';
import { StyleSheet, View, Modal, Text, Button } from 'react-native';
import LoginHead from '../components/LoginHead';
import LoginBody from '../components/LoginBody';
import LoginBottom from '../components/LoginBottom';

import database from '../global';

const HomeScreen = ({ navigation }) => {
    const [userCreds, setUserCreds] = useState({
        username: "",
        password: "",
    });

    const nameUpdateHandler = (enteredNameText) => {
        setUserCreds({
            username: enteredNameText,
            password: userCreds.password
        });
    }

    const pswdUpdateHandler = (enteredPswdText) => {
        setUserCreds({
            username: userCreds.username,
            password: enteredPswdText
        });
    }

    const [modalOn, setModalOn] = useState(false);

    const onClickHandler = () => {
        for (i = 0; i < database.length; i++) {
            currName = database[i].username;
            currPswd = database[i].password;

            if (userCreds.username === currName &&
                userCreds.password === currPswd) {
                database[i].logins.push("Logged in at: " +
                    Date());
                navigation.navigate('Profile', { index: i });
                return;
            }
        }

        setModalOn(true);
    }

    return (
        <View style={styles.container} behavior='padding'>
            <LoginHead />
            <LoginBody
                onNameChange={nameUpdateHandler}
                onPswdChange={pswdUpdateHandler} />
            <LoginBottom onClick={onClickHandler} />

            <View style={styles.modalStyle}>
                <Modal
                    visible={modalOn}
                    animationType='slide'>
                    <Text>Credentials could not be validated!</Text>
                    <Button title='Try Again' onPress={() => setModalOn(false)} />
                </Modal>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    modalStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalColor: {
        backgroundColor: 'dark grey',
    }
});

