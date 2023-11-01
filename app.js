console.log("Let's get this party started!");

async function getGif(searchTerm) {
    const result = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchTerm,
            api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
    });
    const gif = result.data.data[0].images.original.url;
    return gif;
}

async function addGif() {
    const searchTerm = $('input').val();
    const gif = await getGif(searchTerm);
    $('body').append(`<img src="${gif}">`);
    $('img').css('width', '250px').css('height', '250px').css('margin', '10px');
    $('input').val('');
}

$('form').on('submit', function (e) {
    e.preventDefault();
    addGif();
});

$('form').on('reset', function () {
    $('img').remove();
});
