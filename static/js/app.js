// Populate dropdown menu

d3.json("/samples.json").then(function(data) {
    var idList = new Array()
    data.samples.forEach(function(sample) {
        idList.push(sample["id"])
    });
    var dropdownMenu = d3.select("#selDataset");
    for (var i=0; i < idList.length; i++) {
        dropdownMenu.append("option").text(idList[i])
    };
});

//Used to grab id from dropdown

d3.select("#selDataset").on("change", buildPlot);

function buildPlot() {

    var dropdownMenu = d3.select("#selDataset").node();

    var dataset = dropdownMenu.property("value");

    var test_subject = dataset;

    buildPlot(test_subject);
}

//Building horizontal bar chart

d3.json("/samples.json").then(function(data) {

    var dropdownMenu = d3.select("#selDataset").node();

    var dataset = dropdownMenu.property("value");

    var test_subject = dataset;

    // Grab values from the response json object to build the plots
    var sample_values = data.samples[test_subject].sample_values;
    console.log(sample_values); 

  });