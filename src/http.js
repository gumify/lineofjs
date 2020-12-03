export class Http {
    fetch(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);

            xhr.onerror = function(e) {
                reject(e);
            };

            xhr.send();
            console.log(xhr);

        });
    }
}

