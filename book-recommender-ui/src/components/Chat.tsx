import * as React from "react";
import {
  TextField,
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
  Button,
  Grid2 as Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const drawerWidth = 360;
export default function ChatDrawer() {
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Typography variant="h6" alignSelf={"center"} marginTop="12px"> Chat box placeholder </Typography>
        <Grid
          sx={{
            position: "absolute",
            bottom: 0,
            margin: "12px",
          }}
          container
          spacing={2}
        >
          <TextField sx={{width: '250px'}}placeholder="Enter text to chat" />
          <Button sx = {{alignSelf: "right"}}>
            <SendIcon />
          </Button>
        </Grid>
      </Drawer>
    </Box>
  );
}
