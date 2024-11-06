import React from "react";
import OtpInput from "./otpInput";

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [isOTP, setisOTP] = React.useState(false);

  const handleChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("invalid phone number");
      return;
    }

    setisOTP(true);
  };
  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };

  return (
    <div className="background">
      {!isOTP ? (
        <form onSubmit={handleSubmit} className="phonenumber">
          <input
            className="phonenumber"
            type="text"
            value={phoneNumber}
            onChange={handleChange}
            name="phone"
            placeholder="Enter Your Phone Number"
          ></input>
          <br></br>
          <br></br>
          <button
            style={{ color: "white" }}
            className="inputbutton"
            type="submit"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p> Enter OTP sent to {phoneNumber}</p>
          <br></br>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};
export default PhoneNumber;
