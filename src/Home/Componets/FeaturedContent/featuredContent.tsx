import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../Reducers";
import Carousel from "../../../Shared/Carousel/carousel";
import Container from "@material-ui/core/Container";

const FeaturedContent: React.FC = () => {
  const homeState = useSelector((state: State) => state.Home);
  return (
    <>
      {homeState.loading ? (
        <h1> HeadLine Loading... </h1>
      ) : (
        <div>
          <Container maxWidth="md">
            <Carousel item={homeState.featuredArt} type={"FeaturedContent"} />
          </Container>
        </div>
      )}
    </>
  );
};

export default FeaturedContent;
