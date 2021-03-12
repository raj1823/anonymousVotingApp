import { IS_VALID_USER, LENGTH } from "./constant";
import axios from "axios";

export const isUserValid = (mobile, callback) => async (dispatch) => {
  try {
    console.log("starting API CAll");

    axios
      .get("https://1584b5731e69.ngrok.io/api/customers")
      .then((response) => {
        console.log("res", Object.keys(response.data).length);
        let length = Object.keys(response.data).length;
        let validUser = true;

        Object.values(response.data).forEach((item) => {
          console.log("ITEM", item);

          if (item.mobile === mobile) {
            validUser = false;
          }
        });
        if (validUser) {
          dispatch({ type: LENGTH, data: length });
          callback && callback(true);
        } else callback && callback(false);

        console.log("valid USer", validUser);
      });
  } catch (error) {}
};

export const addVoter = (voterId, length) => async (dispatch) => {
  try {
    console.log("ID", voterId, length);

    axios
      .post("https://1584b5731e69.ngrok.io/api/addcustomer", {
        firstname: "anonymous",
        lastname: "anonymous",
        mobile: voterId,
        id: length + 1,
      })
      .then((response) => {
        console.log("resgg=====", response.data);

        if (response.status >= 200 && response.status <= 300) {
          console.log("VOTE SUCCESSFULLY PLACED");
        } else {
        }
      });
  } catch (error) {}
};

export const castVote = (id, voterId, length, callback) => async (dispatch) => {
  try {
    console.log("Polling Vote", id, length);

    axios
      .post("https://1584b5731e69.ngrok.io/api/castvote/" + id)
      .then((response) => {
        console.log("res", response.data, id);

        if (response.status >= 200 && response.status <= 300) {
          console.log("TRUE RESPONSE");
          dispatch(addVoter(voterId, length));
          //console.log("voterId",voterId)
          callback && callback(true);
        } else callback && callback(false);
      });
  } catch (error) {}
};
