import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class LogIn extends Component {
  constructor(props){
    super(props);
  }

  signIn = ()=>{
    this.props.navigation.replace("DrawerMenu");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pantalla de Inicio de Sesión</Text>
        <TouchableOpacity onPress={()=>{this.signIn()}}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
