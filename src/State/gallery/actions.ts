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


export const PrepForPagination = (): {result: {}, divideIterations:number} => {
  const { gallery } = useSelector((state: State) => state);
  if(gallery.contents.length === 0) return {result:{}, divideIterations:0};
  const maxPerPage = 6;
  const divideIterations = Math.floor(gallery.contents.length / maxPerPage);

  /**
   * @tudo refactor the below 
   */

  let currantIndex = 0;
  let result:any = {}

  for(let a = 1; a <= divideIterations + 1; a++){
    result = {...result, [a]:[]}
  }

  for(let b = 1; b <= divideIterations + 1; b++){
    for(let c = 1; c <= 6; c++){
      result[b].push(gallery.contents[currantIndex] || {
        id: "N/A"
      });
      currantIndex++;
    }
  }
  debugger;
  return { result, divideIterations };
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