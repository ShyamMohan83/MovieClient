import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IMovie } from "./movies.model";
import {catchError, tap, map} from 'rxjs/operators';

@Injectable()
export class MoviesListService {
    public movieList$ = this.http.get<IMovie>('api/v1/movies')
    .pipe(
     tap ((data: IMovie) => console.log(data)),
     map ((item: IMovie) => {
        item.data.map(movie => movie.poster = 'https://dummyimage.com/600x400/000/fff');
        return item;
     }),
     catchError(this.handelError)
    );
    constructor(private http: HttpClient ) {}
   
    private handelError(err: HttpErrorResponse): Observable<never> {
        let errorMessage ='';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred ${err.error.message}`;
        } else {
            errorMessage = `Server return an error code ${err.status}, ${err.message}`;
        }
        return throwError(()=> errorMessage);
    }
}