import React from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

class VotingEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCandidate: null,
    };
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 150 }}>
        <View style={{ height: 50, width: "80%", alignSelf: "center" }}>
          <Text style={{ fontSize: 26, alignSelf: "center" }}>
            Your Vote has been counted.
          </Text>
          <Text style={{ fontSize: 26, alignSelf: "center" }}>Thank You!</Text>
          <Image
            source={require("../assets/smiley.png")}
            style={{
              height: 130,
              width: 120,
              marginVertical: 20,
              alignSelf: "center",
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default VotingEnd;
