import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";

const LoginBottom = (props) => {
    const loginButtonHandler = () => {
        props.onClick();
    }

    return (
        <View style={styles.loginContainer}>
            <Button
                style={styles.loginButton}
                title='Login'
                onPress={loginButtonHandler} />
        </View>
    );
}

export default LoginBottom;

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

    // Login Button Styling

    loginButton: {
        flex: 1,
    }
});