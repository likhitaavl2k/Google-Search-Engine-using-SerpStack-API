$("#form").submit(function(e){
    e.preventDefault()

    var query = $("#search").val()

    var YOUR_ACCESS_KEY = '6677ab9048d12a5126accc53211b5f4a'
    
    let result = ''

    var url = 'http://api.serpstack.com/search?access_key='+YOUR_ACCESS_KEY+'&query=' + query

    function gotData(data){
        console.log(data);
    }
    $.get(url,function(data){

        $("#result").html('')

        console.log(data);

        data.organic_results.forEach(res => {
            result =  `
                <h1>${res.title}</h1><br>
                <a href="${res.url}" target='_blank'>${res.url}</a>
                <p>${res.snippet}</p>
            `
            $("#result").append(result)
        })
    })
})