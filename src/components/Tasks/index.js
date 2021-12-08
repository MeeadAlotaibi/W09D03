import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Pages from "../Pages";
import Task from "../Task";
import { logout } from "../../reducers/sign";
import axios from "axios";
import { getTasks, postTasks, putTasks, deleteTasks } from "../../reducers/user";

///////////////////////////////////////////////////////////////////

const Tasks = () => {
  const dispatch = useDispatch(); // هذي اللي راح تغير ع الداتا

  useEffect(() => {
    getUserTasks();
  }, []); // تنفذ مره وحده بس

  ///////////////////////////////////////////////////////////////////
  const state = useSelector((state) => {
    //تروح تجيب لي الداتا من القلوبل الستيت من
    return {
      sign: state.sign, //روح جيب لي البيانات من رديوسر الساين
      tasks: state.tasks.userTask, //روح جيب لي البيانات من رديوسر التاسك
    };
  });

  ///////////////////////// Add Task //////////////////////////////////////////

  const addTask = async (e) => {
    try {
      //   let name = e.target.newTaskVal.value;
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/createTask`,
        { name: e.target.newTaskVal.value },
        {
          headers: { Authorization: `Bearer ${state.sign.token}` }, // نرسل توكن للهيدرز
        }
      );
      dispatch((res.data));
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////////// Get Tasks ////////////////////////////////////////

  
  const getTasks = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/`, {
        headers: { Authorization: `Bearer ${state.sign.token}` }, // نرسل توكن للهيدرز
      });
      dispatch(({ userTask: res.data }));
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////////// Update Task////////////////////////////////////////
  const updateTask = async (e, id) => {
    try {
      let name = e.target.newTaskVal.value;

      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/updateTask/${id}`,
        { name },
        {
          headers: { Authorization: `Bearer ${state.sign.token}` }, // نرسل توكن للهيدرز
        }
      );
      // console.log(res.data);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  //////////////////////////// Delete Task ///////////////////////////////////////
  const deleteTask = async (id) => {
    try {
      // console.log(id);
      const res = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/deleteTask/${id}`,
        {
          headers: { Authorization: `Bearer ${state.sign.token}` },
        }
      );
      // console.log(res.data);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  //////////////////////////// log Out ///////////////////////////////////////
  const logOut = () => {
    dispatch(logout({ user: "", token: "" })); //التغيير اللي سوته: ترجع الستيت سترنق فاضي 
  };
  return (
    <div>
      {state.sign.token ? ( /// اذا فيه توكن ريديوسر الساين
        <>
          <form
            onSubmit={(e) => {
              addTask(e); // نفّذ فنكشن ادد تاسك
            }}
          >
            <input type="text" name="newTaskVal" />

            <input type="submit" value="Add" />
          </form>
          <ul>
            {state.tasks.map(
              (
                item // يعمل لوب على التاسكات
              ) => (
                <Task
                /// نرسلها ك بروبز للكمبونننت تشايلد
                  key={item._id}
                  userItem={item} 
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                />
              )
            )}
          </ul>
          <Link to="/">
            <button onClick={logOut}>log out</button> {/*تنفذ فنكشن لوق اوت  */}
          </Link>
        </>
      ) : (
        <Pages /> //يودينا لصفحة اللبيج
      )}
    </div>
  );
}

export default Tasks
