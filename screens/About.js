import React, { Component } from "react";
import { View, StyleSheet, Text, Picker } from "react-native";

import chords from "../data/chords";
import { render } from "react-dom";

class About extends Component {

  state = {
    selChordId: 1
  }

  updateChord = (chordId) => {
      this.setState({ 
        selChordId: chordId 
      })
  }

  render() {
    return (
      <View style={styles.center}>
        <Picker selectedValue = {this.state.selChordId} onValueChange = {this.updateChord}>
          {chords.map((item) => {
              return (<Picker.Item label={item.type} value={item.id}/>) 
          })}
        </Picker>
        <Text style = {styles.text}>{chords[this.state.selChordId - 1].type}</Text>
      </View>
    );
  }
};

export default About;

const styles = StyleSheet.create({
  text: {
     fontSize: 30,
     alignSelf: 'center',
     color: 'red'
  }
})

