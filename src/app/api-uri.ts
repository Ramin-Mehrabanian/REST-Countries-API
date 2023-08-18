import { environment } from 'src/environments/environment';

export const APIURI = {
    region: {
        getCountries: `${environment.origin}v3.1/all`,
        getRegion: `${environment.origin}v3.1/region/`,
        name: `${environment.origin}v3.1/name/`,
        getdetails: `${environment.origin}v3.1/alpha/`
    }
}