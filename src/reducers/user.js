/// اول شيئ اسوي قلوبل ستيت و اعطيها قيم ابتدائية
const initState = {
  userTask: [], // قيمه ابتدائية نوعها ااراي فاضية 
  adminTask: [],
};
/////////////////////////////////////////////////////////////////////////
 // آيش تسمى هذه الفنكشن .. نسيت ؟ 
 // تاخذ ٢ ارقيومنت .. الاولى تاخذ القيم المبدائية للستيت ،،، الثاني تاخذ الاكشن 

const tasks = (state = initState, action) => {
  const { type, payload } = action; ///

  switch (type) {
    case "GET_TASKS": // في حالة القيت تاسك
      return payload; // الداتا  داخل البيلود
    case "POST_TASKS":
      const tasks = [...state.tasks, payload];
      return { tasks };
    case "PUT_TASKS":
      return {
        tasks: state.tasks.map((item) => {
          if (payload._id === item._id) {
            return { ...item, name: payload.name };
          } else {
            return item;
          }
        }),
      };
      case "DELETE_TASKS":
      return { tasks: state.tasks.filter((item) => item._id !== payload) };

    default: ///// قلنا انه اذا ماطبق احد هذه الكيسات ،، لازم يرجع شي اللي هو الستيت بالقيم البدائية

      return state;
    ///////////////////////////////////////////////

  }
};
export default tasks; 

/////////////////////////////////////////////////////////////////////////
export const getTasks = (data) => {
  return {
    type: "GET_TASKS",
    payload: { tasks: data },
  };
};
/////////////////////////////////////////////////////////////////////////
export const postTasks = (data) => {
  return {
    type: "POST_TASKS",
    payload: data,
  };
};
/////////////////////////////////////////////////////////////////////////
export const putTasks = (data) => {
  return {
    type: "PUT_TASKS",
    payload: data,
  };
};
/////////////////////////////////////////////////////////////////////////
export const deleteTasks = (data) => {
  return {
    type: "DELETE_TASKS",
    payload: data,
  };
};

/////////////////////////////////////////////////////////////////////////