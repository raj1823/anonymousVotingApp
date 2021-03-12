import React from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import RadioButtonRN from "radio-buttons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import { castVote } from "../services/data/action";

const data = [
  {
    label: "Lomesh Joshi",
    id: 1,
  },
  {
    label: "Yash Parmar",
    id: 2,
  },
  {
    label: "Arjun Singh Rathore",
    id: 3,
  },
  {
    label: "Ritik Mishra",
    id: 4,
  },
  {
    label: "Kritika Kabra",
    id: 5,
  },
  {
    label: "Neetesh Singh Bhadhoria",
    id: 6,
  },
  {
    label: "Ayushi Jain",
    id: 7,
  },
  {
    label: "Palak Sharma",
    id: 8,
  },
  {
    label: "Nitesh Sharma",
    id: 9,
  },
  {
    label: "Jitendra Patel",
    id: 10,
  },
];

class VotingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCandidate: null,
    };
  }

  render() {
    console.log("user mobile", this.props.length);
    const voterId = this.props.route.params.mobile;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "yellow" }}>
        <View style={{ margin: 20, backgroundColor: "white" }}>
          <Text style={{ color: "red", fontSize: 25, alignSelf: "center" }}>
            CHOOSE YOUR RIGHTFUL
          </Text>
          <Text style={{ color: "red", fontSize: 25, alignSelf: "center" }}>
            CANDIDATE
          </Text>
        </View>
        <ScrollView>
          <View style={{ marginHorizontal: 20 }}>
            <RadioButtonRN
              data={data}
              activeColor={"#fff"}
              boxStyle={styles.boxStyle}
              textStyle={styles.textStyle}
              selectedBtn={(e) => this.setState({ selectedCandidate: e })}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.castVote(
                this.state.selectedCandidate.id,
                voterId,
                this.props.length,
                (callback) => {
                  console.log("callback", callback);
                  if (callback) {
                    this.props.navigation.navigate("votingEnd");
                  } else {
                    console.log("cannot cast your vote");
                  }
                }
              );
            }}
            style={{
              height: 50,
              borderColor: "black",
              width: "60%",
              borderWidth: 2,
              backgroundColor: "green",
              borderRadius: 10,
              marginVertical: 20,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                marginHorizontal: 15,
                fontWeight: "600",
                alignSelf: "center",
                fontSize: 20,
                color: "#fff",
              }}
            >
              Place your Vote
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  boxStyle: {
    backgroundColor: "orange",
    borderColor: "#000",
  },
  textStyle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
  },
});
const mapStateToProps = (state) => ({
  length: state.data_Reducer.length,
});
const mapDispatchToProps = (dispatch) => ({
  castVote: (id, voterId, length, callback) =>
    dispatch(castVote(id, voterId, length, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VotingPage);
