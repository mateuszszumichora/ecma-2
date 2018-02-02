function httpGet(url) {
    return new Promise(
        function (resolve, reject) {
            const request = new XMLHttpRequest();
            request.onload = function () {
                if (this.status === 200) {
                    resolve(this.response); // Sukces
                } else {
                    reject(new Error(this.statusText)); // Dostaliśmy odpowiedź, ale jest to np 404
                }
            };
            request.onerror = function () {
                reject(new Error(
                   `XMLHttpRequest Error: ${this.statusText}`));
            };
            request.open('GET', url);
            request.send();
        });
}