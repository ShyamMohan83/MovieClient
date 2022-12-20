import { Component } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { MoviesListService } from '../common/movies-list.service';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.css']
})
export class MoveListComponent {

  public errorMessage: string = '';
  public movies$ = this.moviesListService.movieList$.pipe(
    catchError( err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );
  constructor(private moviesListService: MoviesListService) { }
  
}
