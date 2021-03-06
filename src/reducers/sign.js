// : هذه الستيت بمثابة اليوز ستيت
//const [role , setRole]= useState("")
const initState = {
  // لازم تكون اوبجكت
  role: "",
  token: "",
};
/////////////////////////////////////////////////////////////////////////

/// نسوي السيكشنات
// تاخذ ٢ ارقيومنت .. الاولى تاخذ القيم المبدائية للستيت ،،، الثاني تاخذ الاكشن
const sign = (state = initState, action) => {
  const { type, payload } = action; // الاكشن تحتوي على التايب و البيلود

  switch (type) {


    case "LOGIN": //  ،،حال كانت دخول
      const { role, token } = payload; // نرسل له  البيلود يحتوي على الرول و التوكن،  اللي راح تتغير
      localStorage.setItem("token", token); // خزن التوكن في اللوكال ستورج
      return { role, token }; // دستركشر لانها اصلا في الستيت ،، اوبجكت ابيه يرجعهم و يعبيهم بالستيت

    ///////////////////

    case "LOGOUT": 
      localStorage.clear(); /// يطلع من اللوكال ستورج
      return payload;

    ///////////////////

    default:
      // عشان اذا سوا ريفريش مايطلع
      let tokenStorage = localStorage.getItem("token");
      let roleStorage = localStorage.getItem("role");
      if (tokenStorage && roleStorage)
        return { token: tokenStorage, role: roleStorage };
      return state; /// ماطابق شي ر جع لي القيم المبدئية
  }
};
export default sign;

  /////////////////////////////////////////////////////////////////////////

  /// في حالة اللوق إن ،،، نصدّر التايب و البيلود
  export const login = (data) => {
    return {
      type: "LOGIN", // التايب تحتوي عل الكيس تبع اللوق ان
      payload: data, // البيلود يحتوي على الداتا،، الداتا اللي هي رول و توكن
    };
  };

  /////////////////////////////////////////////////////////////////////////

  /// في حالة اللوق آوت ،،، نصدّر التايب و البيلود

  export const logout = (data) => {
    return {
      type: "LOGOUT", // التايب تحتوي عل الكيس تبع اللوق ان
      payload: data, // البيلود يحتوي على الداتا،، الداتا اللي هي رول و توكن
    };
  };


/////////////////////////////////////////////////////////////////////////
