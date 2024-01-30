import {StyleSheet, View, Text } from 'react-native';

const dashboard = () => {
    return (
        <View style={styles.container} className="login-container">
            <Text className="login-text">
                asu
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      display:'flex',
      width:'100%',
      backgroundColor:'red',
      height: '100%',
    },
  });

export default dashboard;
