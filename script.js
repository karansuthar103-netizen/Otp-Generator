const input = document.getElementById("input");
const result = document.getElementById("Result");
const btn = document.getElementById("btn");


function generateOTP(length) {
  let otp = '';
  const digits = '0123456789';

  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }

  return otp;
}

btn.addEventListener("click",()=>{
    const length = parseInt(input.value);

    // Validate input
    if (isNaN(length) || length <= 0) {
        alert('Please enter a valid OTP length');
        return;
    }

    // Generate and display OTP
    const otp = generateOTP(length);
    Result.value = otp;
})