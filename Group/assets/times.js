var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    //takes URL and adds 
        url += '?' + $.param({
          'api-key': "2302b351f0dd4f6490a9a8d730692b47",
          'q': "headline",
          'fq': "byline"
        });

        $.ajax({
          url: url,
          method: 'GET',
        }).done(function(result) {
            console.log(result);
            console.log(url);
            // This is where our parameters will go
            var results = result.response.docs;
            console.log("below is results")
            console.log(results);

            for (var i = 0; i < results.length; i++) {
                var well = $("<div>").addClass("well")

                var aTitle = $("<h1>");
                aTitle.text(results[i].headline.main);
                // console.log(aTitle);

                var byLine = $("<p>");
                byLine.text(results[i].byline.original);
                // console.log(byLine);

                well.append(aTitle);
                well.append(byLine);

                $("#well").append(well);
            };
            // user enter parameters
            // by clicking search button user initailizes the search
            // click on search button and uses NYtimes API to find results
            $("#search").on("click", function(well) {
                console.log("#search");
            });

            $("#results").on("click", function(clear) {
                console.log("#results");
            });







        }).fail(function(err) {
            throw err;
        });