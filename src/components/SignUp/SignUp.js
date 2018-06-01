import React from "react";
import { TextInput, Alert, StyleSheet, Text, View, ToolbarAndroid, StatusBar, Button, Image, ScrollView} from "react-native";

class SignIn extends React.Component {
      render() {
      return(
        <View style={display:flex, flexDirection: column, justifyContent:spaceAround}>
          <TextInput style={height:100%} placeholder="email" />
          <TextInput style={height:100%} placeholder="pseudo"/>
          <TextInput style={height:100%} placeholder="mot de passe" />
          <Button color="#05a5d1" title="SignIn"
            onPress={this.login} />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    padding: 10,
    textAlign: 'center'
  }
});

export default SignIn;
