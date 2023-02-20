import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { NavBar } from "./components/navBar";
import { Publication } from "./components/publications";
import { Stories } from "./components/stories";
import { getPhotos } from "./services/photos";
import { Button, Flex, Screen, Typography } from "./styles";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
  const PHOTOS_PER_PAGE = 8;

  const [theme, setTheme] = useState("dark");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [photosPerPage, setPhotosPerPage] = useState(PHOTOS_PER_PAGE);

  const releaseLoading = () => setIsLoading(false);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handlePhotosPerPage = async () => {
    setPhotosPerPage(photosPerPage + PHOTOS_PER_PAGE);
  };

  async function fetchPhotos() {
    setIsLoading(true);
    const data = await getPhotos(photosPerPage, releaseLoading);
    setPhotos(data);
  }

  useEffect(() => {
    fetchPhotos();
  }, [photosPerPage]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Screen>
        <NavBar themeToggler={themeToggler} theme={theme}></NavBar>

        <Flex gap="2px">
          <Header />
          <Stories photos={photos} />
          <Publication photos={photos} />

          {isLoading ? (
            <ReactLoading
              type="spinningBubbles"
              color={theme.textPrimary}
              height={40}
              width={40}
            />
          ) : (
            <Button onClick={handlePhotosPerPage} style={{ marginTop: "10px" }}>
              <Typography>Ver mais</Typography>
            </Button>
          )}
        </Flex>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
