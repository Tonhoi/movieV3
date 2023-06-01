import SlickSlider from "@/compositions/Slick/SlickSlider";
import { Box } from "@mui/material";
import Slider from "react-slick";

const Home = () => {
  return (
    <Box>
      <SlickSlider variant="simple">
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </SlickSlider>
    </Box>
  );
};

export default Home;
