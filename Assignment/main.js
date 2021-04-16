$(document).ready(() => {
    $('#input').on('submit', (e) => {
      let inputText = $('#inputText').val();
      getResult(inputText);
      e.preventDefault();
    });
  });

  
  function getResult(inputText){
    axios.get('http://www.omdbapi.com/?i=tt3896198&{OMDB_API_KEY}&s='+ inputText)
      .then((response) => {
        console.log(response);
        
        const searchResult = response.data.Search;
        let resultHTML = '';
        $.each(searchResult, (_, result) => {
          resultHTML += `
            <div class="col-3 mb-4">
              <div class="text-center">
                <img src="${result.Poster}">
                <h4>${result.Title}</h4>
                <p>Year: ${result.Year}</p>
                <p>Type: ${result.Type}</p>
              </div>
            </div>
          `;
        });
  
        $('#result').html(resultHTML);
      })
      .catch((err) => {
        console.log(err);
      });
  }


    $('#fetch-btn').click(() =>{ 
    getResult(inputText);
    });