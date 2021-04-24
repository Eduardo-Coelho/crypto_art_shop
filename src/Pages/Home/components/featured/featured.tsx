import React, { useState } from "react";
import Carousel from "../../../../Shared/carousel/carousel";
import Container from "@material-ui/core/Container";
import "./featured.scss";
import { Grid } from "@material-ui/core";

const FeaturedContent: React.FC<any> = ({ featuredArt }) => {
  return (
    <>
      <div>
        <Container className="featured-container" maxWidth="md">
          <h3 className="center-text"> Featured Art </h3>
          <Carousel item={featuredArt} type={"FeaturedContent"} />
          <Grid container direction="row">
            <Grid item xs={3}>
              <div className="text-item">
                <h2>Test 1</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores perspiciatis deserunt magni, eos ipsam mollitia
                  molestias maiores, voluptates tempore sunt quos itaque
                  delectus quas aperiam natus nesciunt, corrupti beatae fugiat.
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
    </>
  );
};

export default FeaturedContent;
