import * as React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  SelectChangeEvent,
  Grid2,
  Button
} from "@mui/material";

export default function PersonalizeForm() {
  const [selectedCelebrity, setSelectedCelebrity] =
    React.useState("Barack Obama");

  const [selectedGenre, setSelectedGenre] = React.useState("Comedy");

  const handleCelebrityChange = (event: SelectChangeEvent) => {
    setSelectedCelebrity(event.target.value as string);
  };

  const handleGenreChange = (event: SelectChangeEvent) => {
    setSelectedGenre(event.target.value as string);
  };

  return (
    <Box sx={{ alignContent: "center" }}>
      <Grid2>
        <FormControl sx={{ margin: "12px 0 12px 0", width: "33%" }}>
          <InputLabel id="demo-simple-select-helper-label">
            Favourite Celebrity
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            label="Favourite Celebrity"
            id="demo-simple-select"
            value={selectedCelebrity}
            onChange={handleCelebrityChange}
          >
            <MenuItem value={"Barack Obama"}>Barack Obama</MenuItem>
            <MenuItem value={"Ellen De Generes"}> Ellen De Generes </MenuItem>
            <MenuItem value={"Dwayne the Rock Johnson"}>
              Dwayne the Rock Johnson
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ margin: "12px", width: "33%" }}>
          <InputLabel id="demo-simple-select-helper-label">
            Favourite Genre
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            label="Favourite Genre"
            id="demo-simple-select"
            value={selectedGenre}
            onChange={handleGenreChange}
          >
            <MenuItem value={"Comedy"}> Comedy </MenuItem>
            <MenuItem value={"Romance"}> Mystery </MenuItem>
            <MenuItem value={"Non-Fiction"}> Non-Fiction </MenuItem>
            <MenuItem value={"Self Help"}> Self Help </MenuItem>
          </Select>
        </FormControl>
        <Button sx={{ marginTop: "20px" }}>
          {" "}
          Generate New Recommendations{" "}
        </Button>
      </Grid2>
    </Box>
  );
}
