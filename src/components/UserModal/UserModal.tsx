import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  Typography,
  Box,
  IconButton,
  Divider,
  useTheme
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
  const theme = useTheme();

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          borderRadius: 0,
          overflow: 'hidden'
        }
      }}
    >
      <DialogTitle sx={{ 
        py: 2, 
        bgcolor: 'primary.main', 
        color: 'primary.contrastText',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Typography variant="h6" fontWeight={600}>Select User</Typography>
        <IconButton 
          onClick={onClose} 
          size="small" 
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ p: 0 }}>
        <List sx={{ py: 0 }}>
          {users.map((user, index) => (
            <React.Fragment key={user.id}>
              <ListItem disablePadding>
                <ListItemButton
                  selected={user.id === currentUser.id}
                  onClick={() => onSelectUser(user)}
                  sx={{
                    py: 2,
                    '&.Mui-selected': {
                      backgroundColor: theme.palette.primary.light + '20',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.light + '30',
                      }
                    }
                  }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ 
                      bgcolor: user.id === currentUser.id ? 'primary.main' : 'grey.400'
                    }}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary={
                      <Typography fontWeight={user.id === currentUser.id ? 600 : 400}>
                        {user.name}
                      </Typography>
                    } 
                    secondary={user.role} 
                  />
                  {user.id === currentUser.id && (
                    <CheckCircleIcon color="primary" sx={{ ml: 1 }} />
                  )}
                </ListItemButton>
              </ListItem>
              {index < users.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;
