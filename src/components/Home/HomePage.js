import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  StatusBar,
  Button,
  Image,
  ScrollView
} from "react-native";

class HomePage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <ScrollView
          horizontal
          scrollEventThrottle={10}
          pagingEnabled
          style={{ marginBottom: 10 }}
        >
          <Image
            source={{ uri: 'http://wooteam.codeursyonnais.fr/wordpress/wp-content/uploads/2018/05/sunglasses.jpg' }} style={styles.sliderImage}
          />
          <Image
            source={{ uri: 'http://wooteam.codeursyonnais.fr/wordpress/wp-content/uploads/2018/05/cap.jpg' }} style={styles.sliderImage}
          />
          <Image
            source={{ uri: 'http://wooteam.codeursyonnais.fr/wordpress/wp-content/uploads/2018/05/belt.jpg' }} style={styles.sliderImage}
          />
        </ScrollView>
        <Button color="#05a5d1" title="Accès à la boutique" onPress={() => navigate("Products")} />
        <Button color="#05a5d1" title="SignUp" onPress={() => navigate("SignUp")} />
        <Button color="#05a5d1" title="SignIn" onPress={() => navigate("SignIn")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    padding: 10,
    textAlign: 'center'
  },
  sliderImage: {
    height: 360,
    width: 360
  }
});

export default HomePage;
