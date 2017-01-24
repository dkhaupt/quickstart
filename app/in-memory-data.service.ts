import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'Narco'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Magma'},
            {id: 15, name: 'Celeritas'},
            {id: 16, name: 'Magneta'},
            {id: 17, name: 'Rubberman'},
            {id: 18, name: 'Dynama'},
            {id: 19, name: 'Dr. IQ'},
            {id: 20, name: 'Tornado'},
        ];
        return {heroes};
    }
}