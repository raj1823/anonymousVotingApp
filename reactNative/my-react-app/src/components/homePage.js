import React from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { isUserValid } from "../services/data/action";
import { connect } from "react-redux";
import RNOtpVerify from "react-native-otp-verify";
import Modal from "react-native-modal";
import Dialog, { DialogContent } from "react-native-popup-dialog";
const voterList = [
  "7023059828",
  "9630602846",
  "7415063634",
  "8989606225",
  "9770493774",
  "9179942052",
  "7374083764",
  "9479730489",
  "7067757938",
  "9644315459",
  "8949485400",
  "9584535652",
  "9455228327",
  "7509358117",
  "9140417979",
  "9610896939",
  "8435399359",
  "7089130640",
  "7715910165",
  "8962419860",
  "9630986610",
  "9468537964",
  "6387851700",
  "7413907269",
  "7999391284",
  "6265503912",
  "9111084851",
  "8770843577",
  "7049242897",
  "7869183726",
  "9521014775",
  "6263252902",
  "8949367684",
  "8954133470",
  "7870660933",
  "9929116309",
  "9785906697",
  "8770911578",
  "9493602541",
  "8922007932",
  "8269997722",
  "6375198391",
  "9414975019",
  "7374818079",
  "9326159367",
  "9460455830",
  "9521869265",
  "9027331295",
  "9516558701",
  "9644049478",
  "9516943720",
  "9109072767",
  "6375943141",
  "9977075934",
  "9926520718",
  "6262090528",
  "9492488377",
];

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      invalidUser: false,
      showModal: false,
      showLoader: false,
    };
  }

  async componentDidMount() {}
  onCancel = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/vote.jpeg")}
          style={styles.image}
        >
          <View style={{ flexDirection: "row", marginTop: 150 }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 4, backgroundColor: "yellow" }}>
              <TextInput
                placeholder={"Enter your mobile Number"}
                style={{ height: 50, marginLeft: 10 }}
                autoFocus={true}
                keyboardType={"number-pad"}
                placeholderTextColor={"#000"}
                onChangeText={(name) => {
                  this.setState({ mobile: name }, () => {
                    console.log("name", this.state.mobile);
                  });
                }}
              />
            </View>

            <View style={{ flex: 1 }}></View>
          </View>
          <View
            style={{
              margin: 15,
              width: 100,
              height: 40,
              backgroundColor: "red",
              borderRadius: 8,
              borderWidth: 1,
              justifyContent: "center",
              borderColor: "#000",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                let isUserValid = false;
                voterList.forEach((item) => {
                  if (item === this.state.mobile) isUserValid = true;
                });
                if (!this.state.mobile || !isUserValid) {
                  this.setState({ invalidUser: true, showModal: true });
                } else {
                  this.setState({ showLoader: true });
                  this.props.isUserValid(this.state.mobile, (callback) => {
                    if (!callback)
                      this.setState({
                        invalidUser: true,
                        showModal: true,
                        showLoader: false,
                      });
                    else {
                      this.setState({ showLoader: false });
                      this.props.navigation.navigate("votingPage", {
                        mobile: this.state.mobile,
                      });
                    }
                  });
                }
              }}
            >
              <Text
                style={{ alignSelf: "center", fontSize: 18, color: "#fff" }}
              >
                Vote Now
              </Text>
            </TouchableOpacity>
          </View>

          <Dialog
            visible={this.state.showModal}
            onTouchOutside={() => {
              this.setState({ showModal: false });
            }}
          >
            <DialogContent>
              <View style={{ justifyContent: "center" }}>
                <Text style={{ color: "blue", fontSize: 18 }}>
                  Oops! Invalid User
                </Text>
              </View>
            </DialogContent>
          </Dialog>

          <Dialog visible={this.state.showLoader}>
            <DialogContent>
              <View style={{ justifyContent: "center" }}>
                <ActivityIndicator style={{ alignSelf: "center" }} />
              </View>
            </DialogContent>
          </Dialog>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center"
  },
});
const mapStateToProps = (state) => ({
  //isValidUser: state.data_Reducer.isUserValid,
});

const mapDispatchToProps = (dispatch) => ({
  isUserValid: (mobile, callback) => dispatch(isUserValid(mobile, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
