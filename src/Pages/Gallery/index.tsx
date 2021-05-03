import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { useParams } from "react-router";
import { Store } from "redux";
import {
  Contents,
  fetchGallery,
  PrepForPagination,
  ReceiveGalleryAction,
  ResetGalleryState,
} from "../../State/gallery/actions";
import { Grid, Typography } from "@material-ui/core";
import GalleryCard from "./components/gallery-card/gallery-card";
import Pagination from "@material-ui/lab/Pagination";

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
  const gallery: any = PrepForPagination();

  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
            {gallery.divideIterations ? (
              <Grid container direction="row">
                {gallery.result[page].map((item: Contents, index: number) => {
                  return (
                    <Grid key={`${item.id}-${index}`} item xs={4}>
                      <GalleryCard item={item} />
                    </Grid>
                  );
                })}
                <Pagination
                  count={gallery.divideIterations + 1}
                  page={page}
                  onChange={handleChange}
                />
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
