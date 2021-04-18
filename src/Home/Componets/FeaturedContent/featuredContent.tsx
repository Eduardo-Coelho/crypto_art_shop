import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../Reducers";
import Carousel from "../../../Shared/Carousel/carousel";
import Container from "@material-ui/core/Container";
import "./featuredContent.css";
import { Grid } from "@material-ui/core";

const FeaturedContent: React.FC = () => {
  const { Home } = useSelector((state: State) => state);
  return (
    <>
      {Home.loading ? (
        <h1> Featured Loading... </h1>
      ) : (
        <div>
          <Container className="featured-container" maxWidth="lg">
            <h1 className="center-text"> Featured Art </h1>
            <hr />
            <Carousel
              key="FeaturedContent"
              item={Home.featuredArt}
              type={"FeaturedContent"}
            />
            <Grid container direction="row">
              <Grid item xs={3}>
                <div className="text-item">
                  <h2>Test 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores perspiciatis deserunt magni, eos ipsam mollitia
                    molestias maiores, voluptates tempore sunt quos itaque
                    delectus quas aperiam natus nesciunt, corrupti beatae
                    fugiat.
                  </p>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="text-item">
                  <h2>Test 2</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur iusto perferendis perspiciatis sunt blanditiis,
                    nostrum ducimus iste, culpa, repudiandae exercitationem
                    molestias cumque quasi qui eveniet accusantium eos amet nisi
                    in.
                  </p>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="text-item">
                  <h2>Test 3</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore doloremque aperiam nisi alias maxime vitae, facere
                    repellat laborum obcaecati quam error ab quos eveniet
                    distinctio sed explicabo aspernatur dicta tenetur.
                  </p>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="text-item">
                  <h2>Test 4</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore doloremque aperiam nisi alias maxime vitae, facere
                    repellat laborum obcaecati quam error ab quos eveniet
                    distinctio sed explicabo aspernatur dicta tenetur.
                  </p>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
};

export default FeaturedContent;
