export const checkValidData = (email,password)=>{
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    const isValidEmail =pattern.test(email);
    const passwordPattern= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const isPasswordValid= passwordPattern.test(password);
    if(!isValidEmail){
        return "Email Id is not valid"
    }
    if(!isPasswordValid){
        return "Password is not valid"
    }
}