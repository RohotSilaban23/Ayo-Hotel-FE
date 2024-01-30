import {StyleSheet, View, Text } from 'react-native';
import { Box } from "native-base";

const dashboard = () => {
    return (
        <View style={styles.container}>
            <Box>
            <Text>
Dashboard            </Text>
            </Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'red',
      color:'black'
    },
  });

export default dashboard;
