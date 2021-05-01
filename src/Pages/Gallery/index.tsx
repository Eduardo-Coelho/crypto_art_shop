import React, { useEffect } from "react";
import { useStore } from "react-redux";
import { useParams } from "react-router";
import { Store } from "redux";
import {
  Contents,
  fetchGallery,
  GetGalleryState,
  ReceiveGalleryAction,
  ResetGalleryState,
} from "../../State/gallery/actions";
import { Grid } from "@material-ui/core";
import GalleryCard from "./components/gallery-card/gallery-card";

interface RouteParams {
  gallerySlug: string;
}

const fetchGalleryData = (
  store: Store,
  params: RouteParams
): Promise<ReceiveGalleryAction> =>
  store.dispatch(fetchGallery(params.gallerySlug));

const Gallery: React.FC = () => {
  const store = useStore();
  const params = useParams() as RouteParams;
  const gallery = GetGalleryState();

  console.log(gallery);

  useEffect(() => {
    fetchGalleryData(store, params);

    return () => {
      ResetGalleryState(store);
    };
  }, [store]);

  return (
    <>
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={6}>
            {!gallery.loading ? (
              <Grid container direction="row">
                {gallery.contents.map((item: Contents) => {
                  return (
                    <Grid item xs={4}>
                      <GalleryCard item={item} />
                    </Grid>
                  );
                })}
              </Grid>
            ) : (
              "loading..."
            )}
          </Grid>
          <Grid item md={3}>
            <h1>test2</h1>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Gallery;
