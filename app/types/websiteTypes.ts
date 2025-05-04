export interface movieType {
  id: number;
  vote_average: number;
  poster_path: string;
  release_date: string;
  overview: string;
  title: string;
  genre_ids: number[];
  vote_count: number;
  popularity: number;
  original_language: string;
  backdrop_path: string;
}

export interface ShowType {
  id: number;
  first_air_date: string;
  genre_ids: number[];
  origin_country: string[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
  media_type: string;
  name: string;
  title: string;
  release_date: string;
}
