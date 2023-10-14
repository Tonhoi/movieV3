import {
  Dialog as MuiDialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  styled,
  Divider,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface DialogProps {
  on: boolean;
  toggle: (value?: any) => void;
  toggleOff: () => void;
  toggleOn: () => void;
  handleDeleteComment: () => void;
  setGetIdComment: Dispatch<SetStateAction<string>>;
}

const ConfirmDialog = (props: DialogProps) => {
  const { on, toggleOff, handleDeleteComment } = props;

  const handleCloseDialog = () => {
    toggleOff();
  };

  return (
    <StyledMuiDialog
      open={on}
      onClose={handleCloseDialog}
      scroll={"body"}
      PaperProps={{
        sx: {
          minWidth: 600,
        },
      }}
    >
      <DialogTitle>
        <Typography variant="caption" className="dialog-title">
          Thông báo
        </Typography>
      </DialogTitle>
      <Divider />

      <DialogContent>
        <DialogContentText>
          <Typography variant="caption" className="dialog-content-text">
            Bạn có chắc chắn muốn xóa bình luận này?
          </Typography>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button
          autoFocus
          onClick={handleCloseDialog}
          className={"cancel-btn"}
          disableRipple
        >
          Hủy bỏ
        </Button>
        <Button
          variant="contained"
          autoFocus
          className="agree-btn"
          onClick={handleDeleteComment}
        >
          Đồng ý
        </Button>
      </DialogActions>
    </StyledMuiDialog>
  );
};

const StyledMuiDialog = styled(MuiDialog)(({ theme }) => {
  return {
    ["& .dialog-title"]: {
      fontSize: 21,
      fontWeight: 700,
    },

    ["& .dialog-content-text"]: {
      fontSize: 15,
      color: theme.palette.common.black,
    },

    ["& .cancel-btn"]: {
      ["&:hover"]: {
        backgroundColor: "transparent",
      },
    },

    ["& .agree-btn"]: {
      backgroundColor: "#1cc749",
    },
  };
});

export default ConfirmDialog;
