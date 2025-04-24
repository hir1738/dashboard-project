import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { User } from "../../types";

interface UserModalProps {
  open: boolean;
  onClose: () => void;
  users: User[];
  onSelectUser: (user: User) => void;
  currentUser: User;
}

const UserModal: React.FC<UserModalProps> = ({
  open,
  onClose,
  users,
  onSelectUser,
  currentUser,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select User</DialogTitle>
      <DialogContent>
        <List>
          {users.map((user) => (
            <ListItem key={user.id} disablePadding>
              <ListItemButton
                selected={user.id === currentUser.id}
                onClick={() => onSelectUser(user)}
              >
                <ListItemText primary={user.name} secondary={user.role} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;
