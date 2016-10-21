<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<script>

    $.ajax({
        url: "https://api.weatherunlocked.com/api/snowreport/{333003}?app_id={29dc7594}&app_key={31101fc1138162bc2abcaafb656c4534}",
        type: "GET",
        success: function (parsedResponse, statusText, jqXhr) {

            console.log(parsedResponse);

        },
        error: function (error) {

            console.log(error);
        }
    });

</script>


//
api/snowreport/{333003}?app_id={"29dc7594"}&app_key={"31101fc1138162bc2abcaafb656c4534"};
console.log
//
