class HttpBase {
    async basePOST(url, config){
        try {
            // options, encabezados y otras configuraciones para el llamado
            const options = {
                method: 'POST',
                headers: this.headersConfig(config.headers),
                body: JSON.stringify(config.params)
            };
            let query = await this.callHttp(url, options)
            const data = await query.json();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async baseGET(url, config){
        try {
            const options = {
                method: 'GET',
                headers: this.headersConfig(config.headers)
            };
            let query = await this.callHttp(url, options)
            const data = await query.json();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    headersConfig(customHeaders){
        const defaultHeaders = {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }

        const headersConfigObject = Object.assign(defaultHeaders, customHeaders);
        let headers = new Headers(headersConfigObject);
        return headers;
    }

    callHttp(url, options){
        let promise = new Promise( (resolve, reject) => {
            fetch(url, options)
            .then( response => resolve(response) )
            .catch( error => reject(error) )
        } );
        return promise;
    }

}

export default new HttpBase;