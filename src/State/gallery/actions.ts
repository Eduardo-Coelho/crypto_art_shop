import axios from 'axios';
import { useSelector } from 'react-redux';
import ENDPOINT_URL from '../../ENDPOINT_URL';
import { State } from '../reducers';
import { GalleryState } from './store';

export const REQUEST_GALLERY = 'request_gallery';
export const RECEIVE_GALLERY = 'receive_gallery';
export const RESET_GALLERY_STATE = 'reset_gallery_state';

export interface GalleryPayload {
  contents: Contents[];
}

export interface Contents {
  id: string,
  name: string;
  cdn: string;
  date: string;
  crypto: string;
}

export interface RequestGalleryAction {
  type: string;
  gallerySlug: string;
}

export interface ReceiveGalleryAction {
  type: string;
  gallerySlug: string;
  payload?: GalleryPayload;
}

export const requestGallery = (gallerySlug:string): RequestGalleryAction => ({
  type: REQUEST_GALLERY,
  gallerySlug,
});

export const receiveGallery = (gallerySlug:string, payload: GalleryPayload): ReceiveGalleryAction => ({
  type: RECEIVE_GALLERY,
  gallerySlug,
  payload,
});

export const  resetGalleryState= (): {type:string} => ({
  type: RESET_GALLERY_STATE,
});


export const ResetGalleryState = (store:any) => {
  store.dispatch(resetGalleryState());
}


export const GetGalleryState = (): GalleryState => {
  const { gallery } = useSelector((state: State) => state);
  return gallery;
}


export const PrepForPagination = (): {result: {}, pages:number} => {
  const { gallery } = useSelector((state: State) => state);
  if(gallery.contents.length === 0) return {result:{}, pages:0};
 
  const maxPerPage = 6;
  const pages = Math.floor(gallery.contents.length / maxPerPage);

  let currantIndex = 0;
  let result:any;

  for(let b = 1; b <= pages + 1; b++){
     result = {...result, [b]:[]};
    for(let c = 1; c <= maxPerPage; c++){
      if(!gallery.contents[currantIndex]) break;
      result[b].push(gallery.contents[currantIndex]);
      currantIndex++;
    }
  }
  return { result, pages };
}

  export const fetchGallery = (gallerySlug:string): any => async (
    dispatch: any,
  ): Promise<ReceiveGalleryAction | string> => {
    dispatch(requestGallery(gallerySlug));
  
    try {
      const { data } = await axios.get(`${ENDPOINT_URL.Gallery}`);
      return dispatch(receiveGallery(gallerySlug, data));
    } catch (err) {
      /** @todo Error handling. */
      return '';
    }
  };