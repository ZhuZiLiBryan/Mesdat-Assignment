import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";

const ProfileBottom = (props) => {
    const logoutButtonHandler = () => {
        props.onClick();
    }

    return (
        <View style={styles.logoutContainer}>
            <Button
                style={styles.logoutButton}
                title='Logout'
                onPress={logoutButtonHandler} />
        </View>
    );
}

export default ProfileBottom;

const styles = StyleSheet.create({
    logoutContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },


    logoutButton: {
        flex: 1,
    }
});