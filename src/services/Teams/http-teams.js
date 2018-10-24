import { API_BASE, HTTP_TEAM } from './../config';
import HttpBase from './../http-base';

class HttpTeam {
    async getTeams(){
        try {
            const url = `${API_BASE}${ HTTP_TEAM.getTeams }`
            const data = await HttpBase.baseGET(url, {});
            return data;
        } catch (err) {
            console.log(err);
        }

    }

    async getTeamById(id){
        try {
            const url = `${API_BASE}${ HTTP_TEAM.getTeam }${id}` 
            console.log(url);
            const data = await HttpBase.baseGET(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpTeam;