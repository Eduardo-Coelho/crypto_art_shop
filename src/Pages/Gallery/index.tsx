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
} from "../../state/gallery-state/actions";
import { Grid } from "@material-ui/core";
import GalleryCard from "./components/gallery-card/gallery-card";
import Pagination from "@material-ui/lab/Pagination";
import GallerySort from "./components/gallery-sort/gallery-sort";
import GallerySearch from "./components/gallery-search/gallery-search";

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
  const gallery: {
    result: any;
    pages: number;
  } = PrepForPagination();

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
      <div className="margin-top-5">
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item md={6}>
            {gallery.pages ? (
              <Grid
                container
                direction="column-reverse"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid className="margin-top-1" item xs={4}>
                  <Pagination
                    count={gallery.pages + 1}
                    page={page}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid container direction="row" alignItems="center">
                  {gallery.result[page].map((item: Contents, index: number) => {
                    return (
                      <Grid key={`${item.id}-${index}`} item xs={4}>
                        <GalleryCard item={item} />
                      </Grid>
                    );
                  })}
                </Grid>

                <Grid className="margin-top-1" item xs>
                  <GallerySearch />
                </Grid>
              </Grid>
            ) : (
              "loading..."
            )}
          </Grid>
          <Grid item xs={2}>
            <GallerySort />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Gallery;
