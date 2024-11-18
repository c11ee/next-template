import { postVisit } from "@/apis/content";
import { useEffect, useState } from "react";

/**
 * 监控用户访问时长
 */
const useMonitorUserAccessTime = () => {
  let [form, setForm] = useState({
    router: "",
    name: "",
    begin_time: "",
    leave_time: "",
  });

  const fn = () => {
    postVisit(form);
  };

  useEffect(()=>{

  },[])
  return;
};

export default useMonitorUserAccessTime;
