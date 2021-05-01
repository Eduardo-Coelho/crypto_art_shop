import { Contents } from './actions';

export interface GalleryState {
  contents: Contents[];
  loading: boolean;
  gallerySlug: string;
}

