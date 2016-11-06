import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Repository } from './repository';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RepositoriesService {
    private headers = new Headers({
        'Content-Type': 'application/json'
    });
    constructor(private http: Http) { }
    handleError(error: any): Promise<any> {
        console.error(error, this);

        return Promise.reject(error.message || error);
    }
    getUserRepositories(user: string): Promise<Repository[]> {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get('https://api.github.com/users/' + user + '/repos?sort=download&per_page=1000', this.headers)
            .toPromise()
            .then(response => response.json() as Repository[])
            .catch(() => {
                //noinspection TypeScriptUnresolvedFunction
                return this.http.get('/app/repositories.mock.json', this.headers)
                    .toPromise()
                    .then(response => response.json() as Repository[])
                    .catch(this.handleError)
            });
    }
}
