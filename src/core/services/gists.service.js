import axios from 'axios';

export class GistsService {
    constructor() {
        this.apiUrl = 'https://api.github.com'
    }

    static _instance;

    static get instance() {
        if (!GistsService._instance) {
            GistsService._instance = new GistsService();
        }
        return GistsService._instance;
    }

    getGistsData(since, per_page, page) {
        return new Promise(resolve => {
            return axios.get(`${this.apiUrl}/gists/public`, {
                params: {
                    since,
                    per_page,
                    page,
                }
            }).then(response => resolve(response.data.map(element => ({
                    avatar_url: element.owner.avatar_url,
                    fileName: Object.keys(element.files)[0]
                }),
            )));
        })
    }
}