import Slider, { Settings } from "react-slick";
import { Box, styled, BoxProps } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { memo } from "react";

interface StyledWrapperProps extends BoxProps {
  variant: string;
}

const createSettings = (variant: string) => {
  if (variant == "simple") {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
  } else {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,

      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 650,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            dots: false,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            dots: false,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }
};

const SlickSlider = ({
  children,
  props,
  variant = "simple",
  refSlick,
  asNavFor,
}: {
  children: React.ReactNode;
  props?: Settings;
  variant?: "simple" | "multiple";
  refSlick?: any;
  asNavFor?: any;
}) => {
  return (
    <StyledWrapper variant={variant}>
      <Slider {...createSettings(variant)} ref={refSlick} asNavFor={asNavFor} {...props}>
        {children}
      </Slider>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Box, {
  shouldForwardProp: (propName) => {
    return propName !== "variant";
  },
})<StyledWrapperProps>(({ theme, variant }) => {
  return {
    "& .slick-slide": {
      padding: variant == "multiple" ? "0.6rem" : 0,
    },
    "& .MuiSvgIcon-root": {
      width: "45px",
      height: "45px",
      zIndex: 10,
      [theme.breakpoints.down("sm")]: {
        width: "30px",
        height: "30px",
      },
    },

    "& .slick-next": {
      top: "45%",
      right: -20,
      zIndex: 9,
    },

    ["& .slick-prev"]: {
      top: "45%",
      left: -20,
      zIndex: 9,
    },

    [theme.breakpoints.down("sm")]: {
      "& .slick-next": {
        right: -15,
      },

      ["& .slick-prev"]: {
        left: -15,
      },
    },

    "&  .slick-active button": {
      paddingTop: "3px !important",
    },
    "&  button::before": {
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderRadius: "10px !important",
      opacity: "1 !important",
    },
    "&  li": {
      margin: "0 !important",
    },

    "&  .slick-dots": {
      display: "flex !important",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.625rem",

      left: "50%",
      transform: "translateX(-50%)",

      "& li.slick-active button:before": {
        opacity: ".75",
        color: "transparent",
      },

      "& li": {
        width: "20px",
        height: "20px",
        padding: "0 0.5rem",
        position: "relative",

        "& button": {
          padding: 0,
          width: "15px",
          height: "15px",
        },
      },

      "& .slick-active button::before": {
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        opacity: "1 !important",
        fontSize: "0.7rem",
        borderRadius: "10px !important",
      },

      "& .slick-active": {
        borderRadius: "1rem !important",
      },

      "& button::before": {
        fontSize: "0.7rem",
        color: "transparent",

        width: "12px",
        height: "12px",
        lineHeight: "15px",

        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
    },
  };
});

export default memo(SlickSlider);
