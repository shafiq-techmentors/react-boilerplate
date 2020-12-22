import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import AttachmentOutlinedIcon from "@material-ui/icons/AttachmentOutlined";
import RadioButtonCheckedOutlinedIcon from "@material-ui/icons/RadioButtonCheckedOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import LineStyleOutlinedIcon from "@material-ui/icons/LineStyleOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { useStyles } from "./Styles";

const ListItems = () => {
  const classes = useStyles();
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <TextFieldsIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Text Field" className={classes.leftBarItems} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ArrowDropDownCircleOutlinedIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Dropdown" className={classes.leftBarItems} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AttachmentOutlinedIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="File" className={classes.leftBarItems} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <RadioButtonCheckedOutlinedIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Options" className={classes.leftBarItems} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CheckBoxOutlinedIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Checkboxes" className={classes.leftBarItems} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <LineStyleOutlinedIcon color="secondary" />
        </ListItemIcon>
        <ListItemText
          primary="Multiline Text"
          className={classes.leftBarItems}
        />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <ExitToAppOutlinedIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Buttons" className={classes.leftBarItems} />
      </ListItem>
    </div>
  );
};

export default ListItems;
