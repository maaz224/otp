/* eslint-disable react/prop-types */
import React from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = React.useState(new Array(length).fill(""));
  const inputRef = React.useRef([]);
  React.useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  });
  const handleChange = (index, event) => {
    if (isNaN(event.target.value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);
  };
  const handleClick = (index) => {
    inputRef.current[index];
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            value={event.target.value}
            name="value"
            onChange={(event) => handleChange(index)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpinput"
          />
        );
      })}
    </div>
  );
};
export default OtpInput;
