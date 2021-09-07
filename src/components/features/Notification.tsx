import { makeStyles, Snackbar, Theme } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

type Severity = "success" | "info" | "warning" | "error" | undefined;

export type NotifyType = {
  isOpen: boolean;
  message: string;
  type: Severity;
};

interface NotificationProps {
  notify: NotifyType;
  setNotify: React.Dispatch<React.SetStateAction<NotifyType>>;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    top: theme.spacing(10),
    right: theme.spacing(23),
  },
}));

const Notification: React.FC<NotificationProps> = ({ notify, setNotify }) => {
  const classes = useStyles();

  const handleClose = (): void => {
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      className={classes.root}
      open={notify.isOpen}
      autoHideDuration={1500}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert severity={notify.type} onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
