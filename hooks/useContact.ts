import { getContact } from "@/apis/content";
import { useEffect, useState } from "react";

/**
 * 公共内容
 */
const useContact = () => {
  const { data } = getContact();
  const [contact, setContact] = useState<Contact>();

  useEffect(() => {
    if (data) {
      setContact(data.data.contact);
    }
  }, [data]);
  return {
    data: contact,
  };
};

export default useContact;
