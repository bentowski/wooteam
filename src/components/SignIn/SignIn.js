import React from "react";
import { TextInput, Alert, StyleSheet, Text, View, ToolbarAndroid, StatusBar, Button, Image, ScrollView} from "react-native";

class SignIn extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TextInput
          id="login"
          style={{height: 40}}
          placeholder="Username"
        />
        <TextInput
          id="password"
          style={{height: 40}}
          placeholder="Password"
        />
        <Button color="#05a5d1" title="SignIn"
          onPress={() => {
            let questionUser=document.getElementById("login").value
            , questionPassword=document.getElementById("password").value
            for(let i=0; i<user.length; i++){
              if(questionUser===user[i].username && questionPassword===user[i].password){
                navigate("SignIn")
                return true;
              }
            }
            Alert.alert("Username or password wrong")
            return false;
          }
          }/>
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
