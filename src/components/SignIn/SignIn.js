import React from "react";
import { TextInput, Alert, StyleSheet, Text, View, ToolbarAndroid, StatusBar, Button, Image, ScrollView} from "react-native";

class SignIn extends React.Component {
      constructor(props) {
        super(props);
        this.state={
          username:"",
          password:""
        }
        this.login = this.login.bind(this);
      }
      login() {
        const { navigate } = this.props.navigation;
        for(let i = 0; i < user.length; i++) {
          if(user[i].username===this.state.username && user[i].password===this.state.password){
            navigate("Products")
            return true;
          }
        }
        Alert.alert("Username / Password is not valid");
      }   
      render() {
      return( 
        <View>
          <TextInput onChangeText={(username) => {
            this.setState({username})}} />
          <TextInput onChangeText={(password) => {
            this.setState({password})}} />
          <Button color="#05a5d1" title="SignIn"
          onPress={this.login} />
           
        </View>
      );
    }
}
const user = [
  {"username": "jean",
   "password": "123"
  }
];

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    padding: 10,
    textAlign: 'center'
  }
});

export default SignIn;
