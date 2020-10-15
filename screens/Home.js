import React, { useState } from "react";
import { View, Button, Text } from "react-native";

import styles from "../styles/styles";

import chords from "../data/chords";

const Home = ({ navigation }) => {
  const counter = useState(0);
  const accords = useState(chords);

  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
      />
      <Button
        title="Go to Contact Screen"
        onPress={() => navigation.navigate("Contact")} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};

export default Home;