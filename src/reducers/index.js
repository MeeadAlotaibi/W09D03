/// هذا الملف ينعمل by default 
/// اسويه اخر شي ،  بعد ما انشئ جميع الرديوسر 
/////////////////////////////////////////////////////////////////////////
 import { createStore, combineReducers } from "redux"; // استدعي ستور و كومبين لانه هو اللي راح يجمع لي جميع الريديوسر كـ اوبجكت يحتوون على اوبجكتس
import { composeWithDevTools } from "redux-devtools-extension"; // نسيت ايش عملها ؟ composeWithDevTools
import  sign from "./sign"; // نسيت ايش عملها ؟ composeWithDevTools
import tasks from "./tasks";
// المهم
/////////////////////////////////////////////////////////////////////////

const reducers = combineReducers({ sign, taskuser, admins });  
// كأنها اوبجكت تحتوي على كيز مثل هذا
// {
// signIn: {
//   token: "";
// },
// tasksReducer: {
//   tasks: ""
// }
// }

/////////////////////////////////////////////////////////////////////////
/// حتى الان لازم اسمها كذا ،، خااوه عنك مثل  ماقال محمد 
// ** في حالات خاصه قد يتغير االاسم
const store = () => {
  return createStore(reducers, composeWithDevTools()); // ترجع الرديوسر + هذا الشيء اللي نسيت ايش بيعمل 
};
export default store();