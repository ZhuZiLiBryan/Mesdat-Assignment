import { StyleSheet, Text, View } from 'react-native';

const ProfileHistory = (props) => {
    return (
        <View style={styles.profileContainer} key={props.timestamp}>
            <Text style={styles.timestampText}>
                {props.timestamp}
            </Text>
        </View>
    );
};

export default ProfileHistory;

const styles = StyleSheet.create({
    // Login Heading Formatting
    profileContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    timestampText: {
        fontSize: 15,
        margin: 10,
        backgroundColor: '#4c9ef5',
        padding: 10,
        borderRadius: 10,
        borderWidth:1,
    
    },
})