import { StyleSheet, View, ScrollView } from 'react-native';
import database from '../global';

import ProfileHead from '../components/ProfileHead';
import ProfileHistory from '../components/ProfileHistory';
import ProfileBottom from '../components/ProfileBottom';
const ProfileScreen = ({ navigation, route }) => {
    currUser = database[route.params.index];

    const logoutButtonHandler = () => {
        navigation.navigate('Home');
    }

    logs = currUser.logins.map((pastLogin) =>
        <ProfileHistory key={pastLogin} timestamp={pastLogin} />
        );

    logs = logs.slice(1,);
    return (
        <View style={styles.container}>
            <ProfileHead
                style={styles.profileHead}
                name={currUser.username}
                count={currUser.logins.length} />

            <View style={styles.container}>
                <ScrollView style={styles.scrollviewStyle}>
                    {logs}
                </ScrollView>
            </View>

            <ProfileBottom onClick={logoutButtonHandler} />
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    scrollviewStyle: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderColor: 'black',
        borderWidth: 1,
    }
});