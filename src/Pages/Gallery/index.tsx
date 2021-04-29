import React, { useEffect } from "react";
import { useStore } from "react-redux";
import { useParams } from "react-router";
import { Store } from "redux";
import {
  fetchGallery,
  GetGalleryState,
  ReceiveGalleryAction,
  ResetGalleryState,
} from "../../State/gallery/actions";

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
      <h1>
        <h1>Test</h1>
      </h1>
    </>
  );
};

export default Gallery;
