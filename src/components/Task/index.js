import React, { useState } from "react";
import { useSelector } from "react-redux";

/////////////////////////////////////////////////////////////////////////

const Task = (item, deleteTasks, userItem, deleteTask, updateTask) => {
  /// نستقبل البروبز
  const [update, setUpdate] = useState(false);

  const state = useSelector((state) => {
    return {
      sign: state.sign,
    };
  });

  /////////////////////////////////////////////////////////////////////////

  return (
    <div>
      {state.sign.role === "admin" ? ( // في البيانات اللي جابتها اليوز سلكتور إذا نوع اليوزر = ادمن ؟
        <>
          <li key={item._id}>
            {item.name}
            <button onClick={() => deleteTasks(item._id)}>delete</button>
          </li>
        </>
      ) : (
        /// اذا نوع اليوزر عادي ،،،؟
        <li key={userItem._id}>
          {userItem.name}
          {update && (
            <form
              onSubmit={(e) => {
                updateTask(e, userItem._id);
                setUpdate(false);
              }}
            >
              <input type="text" name="newTaskVal" />

              <input type="submit" value="Done" />
            </form>
          )}
          {!update && <button onClick={() => setUpdate(!update)}>edit</button>}
          <button onClick={() => deleteTask(userItem._id)}>delete</button>{" "}
          {/*نرسل الايدي تبع التاسك اللي ابغى اعمل لها ديليت */}
        </li>
      )}
    </div>
  );
};

export default Task;
