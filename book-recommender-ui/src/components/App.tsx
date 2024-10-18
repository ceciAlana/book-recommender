import * as React from "react";
import {
  Drawer,
  Container,
  Button,
  Card,
  Grid2 as Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import PersonalizeForm from "./PersonalizeForm";
import PersonalizerList from "./PersonalizerList";
import ChatDrawer from "./Chat";
import PastBooksList from "./PastBooks";

const drawerWidth = 360;

export default function App() {
  const [isDrawerOpen, setisDrawerOpen] = React.useState(false);

  const toggleDrawer = (isOpen: boolean) => () => {
    setisDrawerOpen(isOpen);
  };

  return (
    <Container>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4" noWrap component="div">
            Book Recommender
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: "120px" }}>
        <PersonalizeForm />
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
          <Typography variant="h6" sx={{margin: '16px 0 0 24px'}}>GenAI Generated Recommendations</Typography>
            <PersonalizerList />{" "}
          </Card>
        </Box>
        <Button onClick={toggleDrawer(true)} sx={{ marginTop: "12px" }}>
          Reset
        </Button>
      </Container>

      <Container sx={{ marginTop: "80px" }}>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined" sx={{ backgroundColor: "#eeeeee" }}>
            <Typography variant="h6" sx={{margin: '16px 0 0 24px'}}>Past Book List</Typography>
            <PastBooksList />
          </Card>
        </Box>
      </Container>
      <ChatDrawer />
    </Container>
  );
}
