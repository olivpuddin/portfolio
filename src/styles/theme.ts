import backgroundDark from "../assets/background-dark.png";
import backgroundLight from "../assets/background-light.png";

export const theme = {
  lightTheme: {
    background:
      "linear-gradient(0deg, rgba(179,171,206,1) 0%, rgba(206,249,242,1) 100%)",
    header: "#9452A5",
    body: "#9452A5",

    button: "#9452A5",
    button_text: "#CEF9F2",
    title: "#272727",
    text_light: "rgba(28, 29, 33, 1)",

    hover: "white",

    backgroundImage: backgroundLight.src,
  },

  darkTheme: {
    background:
      "linear-gradient(0deg, rgba(81,70,85,1) 0%, rgba(28,29,33,1) 100%)",
    header: "#E4B7E5",
    body: "#E4B7E5",

    button: "#E4B7E5",
    button_text: "rgba(28, 29, 33, 1)",
    title: "#272727",
    text_light: "#CEF9F2",

    hover: "#272727",
    backgroundImage: backgroundDark.src,
  },
};
