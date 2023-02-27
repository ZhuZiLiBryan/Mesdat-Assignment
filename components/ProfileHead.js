import { StyleSheet, View, Text } from 'react-native';

const ProfileHead = (props) => {

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    if (props.count == 2) {
        message = "Hello, " + capitalize(props.name) + ", you have logged in " + 
            (props.count-1) + " time.";
    } else {
        message = "Hello, " + capitalize(props.name) + ", you have logged in " + 
            (props.count-1) + " times.";
    }
    return (  
        <View style={styles.profileHead}>
            <Text style={styles.profileHeadText}>Home</Text>
            <Text style={styles.profileDescription}>
                {message}
            </Text>
        </View>
    );
};

export default ProfileHead;

const styles = StyleSheet.create({
    // Login Heading Formatting
    profileHead: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    profileHeadText: {
        flex:2,
        fontWeight: 'bold',
        fontSize: 50,
        textAlignVertical: 'bottom',
    },

    profileDescription: {
        flex:1,
        fontSize: 25,
        margin: 20,
        textAlign: 'center'
    }
})