const covidGlobal = "https://covidapi.info/api/v1/global";

function getCovidData() {
    
    $.getJSON(covidGlobal, function (data) {

        let date = moment(`${data.date}`).format('MMMM Do YYYY')
        $("#date").html("Global Stats as of: " + date)

        let confirmed = numeral(`${data.result.confirmed}`).format('0,0') 
        $("#confirmed").html(confirmed + " Confirmed Cases")

        let deaths = numeral(`${data.result.deaths}`).format('0,0')
        $("#deaths").html(deaths + " Deaths")

        let recovered = numeral(`${data.result.recovered}`).format('0,0')
        $("#recovered").html(recovered + " Recovered")
    });   
}