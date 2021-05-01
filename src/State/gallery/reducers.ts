import { ReceiveGalleryAction, RECEIVE_GALLERY, REQUEST_GALLERY, RESET_GALLERY_STATE } from './actions';
import { GalleryState } from './store';


const DEFAULT_STATE: GalleryState = {
  loading: true,
  contents:[],
  gallerySlug: '',
};

const gallery = (state = DEFAULT_STATE, action: ReceiveGalleryAction):any => {
  switch (action.type) {
    case RECEIVE_GALLERY:
      return { ...action.payload, loading: false };
    case REQUEST_GALLERY:
      return { ...state, gallerySlug: action.gallerySlug, loading: true};
    case RESET_GALLERY_STATE:
      return {
        loading: true,
        contents: []
      };
    default:
      return state;
  }

}

export default gallery;
