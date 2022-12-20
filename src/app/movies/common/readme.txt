import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesListService } from '../common/movies-list.service';
import { IMoviesModel } from '../common/movies.model';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.css']
})
export class MoveListComponent implements OnInit, OnDestroy {

  public movieList: IMoviesModel [] = [];
  public httpError = '';
  private movieListSubscription !: Subscription;
  constructor(private moviesListService: MoviesListService) { }

  ngOnInit(): void {
    this.getMovieList();
  }

  private getMovieList() {
    this.movieListSubscription = this.moviesListService.getMovieList().subscribe
    (
      {
        next : data => this.movieList = data,
        error: err => this.httpError = err
      }
    );
  }

  ngOnDestroy() {
    this.movieListSubscription.unsubscribe();
  }
}


 <div class="col-md-4">
                    
                </div>
              

                <div class="col-md-4" formControlName="address">
                    <div class="form-group">
                        <label for="house">House Name</label>
                        <input type="test" id="house" formControlName="house"
                        class="form-control"
                        placeholder="House Name"/>
                    </div>
                    <div class="form-group">
                        <label for="street">Street</label>
                        <input type="test" id="street" formControlName="street"
                        class="form-control"
                        placeholder="Street Name"/>
                    </div>
                    <div class="form-group">
                        <label for="landmark">Landmark</label>
                        <input type="test" id="street" formControlName="landmark"
                        class="form-control"
                        placeholder="Landmark"/>
                    </div>
                    <div class="form-group">
                        <label for="state">State</label>
                        <input type="test" id="state" formControlName="state"
                        class="form-control"
                        placeholder="State"/>
                    </div>
                    <div class="form-group">
                        <label for="pin">Pin</label>
                        <input type="test" id="pin" formControlName="pin"
                        class="form-control"
                        placeholder="Pin code"/>
                    </div>

                    <div class="form-group">
                        <label for="country">Country</label>
                        <input type="test" id="country" formControlName="country"
                        class="form-control"
                        placeholder="Country Name"/>
                    </div>
                </div>