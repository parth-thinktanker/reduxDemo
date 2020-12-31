import AsyncStorage from "@react-native-community/async-storage"
import { ADD_USER } from "../constants/user"

export const register = (name, email, password) => { 
return (dispatch) => {
  try {

    // AsyncStorage.setItem("name",name)
    // AsyncStorage.setItem("email",email)
    // AsyncStorage.setItem("password",password)

    dispatch({
      type: ADD_USER,
      payload: {
        name: name,
        email: email,
        password: password
      }
    })


  } catch (error) {

  }}
}

// export const VerifyOTP = (
//   mobile_no,
//   OTP,
//   OTPData,
//   navigation,
//   password,
//   token,
//   redirectTo
// ) => {
//   return (dispatch) => {
//     dispatch({
//       type: AUTH_LOADING,
//     });
//     try {
//       var FormData = require("form-data");
//       var data = new FormData();
//       data.append("mobile_number", mobile_no);
//       data.append("uniq_code", OTPData.data.uniq_code);
//       data.append("entered_otp", OTP);
//       //console.log("OTPData.data.uniq_code",OTPData.data.uniq_code)
//       // console.log("data", data);
//       var config = {
//         method: "post",
//         url: `${BASE_URL}/verify-otp`,
//         data: data,
//       };

//       axios(config)
//         .then(function (response) {
//           let data = response.data;
//           if (data.success) {
//             if (redirectTo === "clubwest") {
//               AsyncStorage.setItem("@clubpoints_db", JSON.stringify(data));
//               // console.log("data in authAction", data);
//               navigation.navigate("Clubwest", { data: data });
//             } else {
//               navigation.navigate("RegisterForm", { data: data });
//             }

//             dispatch({
//               type: VERIFY_OTP_SUCCESS,
//               payload: {
//                 message: data.message,
//                 type: "VerifyOtp_Success",
//               },
//             });
//           } else {
//             userAlert("Failed", data.message);
//             dispatch({
//               type: VERIFY_OTP_FAILED,
//               payload: {
//                 message: data.message,
//                 type: "VerifyOtp_ERROR",
//               },
//             });
//           }
//         })
//         .catch(function (error) {
//           // console.log(error);
//           userAlert("Error", "Something went wrong please try again later.");
//           dispatch({
//             type: VERIFY_OTP_FAILED,
//             payload: {
//               message: error,
//               type: "VerifyOtp_ERROR",
//             },
//           });
//         });
//     } catch (error) {
//       // console.log("error", error);
//       userAlert("Error", "Something went wrong please try again later.");

//       dispatch({
//         type: VERIFY_OTP_FAILED,
//         payload: {
//           message: error,
//           type: "VerifyOtp_ERROR",
//         },
//       });
//     }
//   };
// };

// export const getUserAccessToken = (email, password, navigation) => {
//   return (dispatch) => {
//     dispatch({
//       type: AUTH_LOADING,
//     });
//     try {
//       CreateCustomerAccessToken(email, password)
//         .then(async (res) => {
//           // console.log("res", res);
//           if (res != "UserNotFound") {
//             try {
//               await AsyncStorage.setItem(DATABASE.TOKEN, JSON.stringify(res));
//               // dispatch(userInfo());
//               // dispatch(UserLogin(email, password, res));
//             } catch (e) {
//               // saving error
//               console.log("NOT ABLE TO STORE ACCESS TOKEN IN DB.", e);
//             }
//             // dispatch(UserLogin(email, password, res)); // REMOVE THIS BCZ REMOVED VERIFICATION FUNCTIONALITY
//             await dispatch(userInformation(password));
//             dispatch({
//               type: VERIFY_OTP_SUCCESS,
//               //  payload: userData,
//             });
//             navigation.navigate("Profile");
//           } else {
//             userAlert("Oops", "User does not exist with this credentials.");
//             dispatch({
//               type: LOGIN_FAILED,
//               payload: {
//                 message: "User not exist with this Email Id.",
//                 type: LOGIN_FAILED,
//               },
//             });
//           }
//         })
//         .catch((err) => {
//           console.log("err", err);
//           userAlert("Oops", "Something went wrong please try again later.");
//           dispatch({
//             type: LOGIN_FAILED,
//             payload: {
//               message: "Something went wrong please try again later.",
//               type: LOGIN_FAILED,
//             },
//           });
//         });
//     } catch (error) {
//       console.log("error", error);
//       userAlert("Oops", "Something went wrong please try again later.");
//       dispatch({
//         type: LOGIN_FAILED,
//         payload: {
//           message: "Something went wrong please try again later.",
//           type: LOGIN_FAILED,
//         },
//       });
//     }
//   };
// };