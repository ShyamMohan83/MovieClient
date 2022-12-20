export interface IMoviesModel {
    name: string,
    rating: number,
    releaseDate: string,
    productionHouse: string,
    poster: string,
    description: string,
    staring: []
}

export interface IMovie {
    success: boolean,
    data: IMoviesModel []
}