import { StyleSheet, View, Text } from 'react-native';

const LoginHead = () => {
    return (
        <View style={styles.loginHead}>
            <Text style={styles.loginHeadText}>Login</Text>
        </View>
    );
};

export default LoginHead;

const styles = StyleSheet.create({
    // Login Heading Formatting
    loginHead: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    loginHeadText: {
        fontWeight: 'bold',
        fontSize: 50,
    },
})