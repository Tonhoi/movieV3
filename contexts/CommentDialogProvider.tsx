import { useToggle } from "@/hooks";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebase-config";
import ConfirmDialog from "@/containers/PlayMovie/components/Comment/Components/ConfirmDialog";

export const ConfirmDialogContext = createContext<{
  on: boolean;
  toggle: (value?: any) => void;
  toggleOff: () => void;
  toggleOn: () => void;
  handleDeleteComment: () => void;
  setGetIdComment: Dispatch<SetStateAction<string>>;
}>({
  on: false,
  toggle: () => {},
  toggleOn: () => {},
  toggleOff: () => {},
  handleDeleteComment: () => {},
  setGetIdComment: () => {},
});

const CommentDialogProvider = ({ children }: { children: ReactNode }) => {
  const { on, toggle, toggleOff, toggleOn } = useToggle();

  const [getIdComment, setGetIdComment] = useState<string>("");

  const handleDeleteComment = async () => {
    if (getIdComment == "") return;

    const commentDocRef = doc(db, "comment", getIdComment);

    try {
      await deleteDoc(commentDocRef);
      toggleOff();
      toast.success("Xóa bình luận thành công!");
    } catch (error) {
      toast.error("Có lỗi xảy ra, hãy thử lại thao tác!");
    }
  };

  return (
    <ConfirmDialogContext.Provider
      value={{
        on,
        toggle,
        toggleOff,
        toggleOn,
        handleDeleteComment,
        setGetIdComment,
      }}
    >
      {children}
      <ToastContainer theme="colored" />
      <ConfirmDialog
        on={on}
        toggle={toggle}
        toggleOn={toggleOn}
        toggleOff={toggleOff}
        handleDeleteComment={handleDeleteComment}
        setGetIdComment={setGetIdComment}
      />
    </ConfirmDialogContext.Provider>
  );
};

export default CommentDialogProvider;
