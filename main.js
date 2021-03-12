const getPhotos = () => {

    const div = document.querySelector('.wrapper-img');

    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(resp => resp.json())
        .then(resp => {
            resp.forEach((item, i) => {
                if (i < 10) {
                    const img = document.createElement('img');
                    img.src = item.url;
                    div.appendChild(img);
                } else {
                    return false;
                }
            });
        });
}


getPhotos();