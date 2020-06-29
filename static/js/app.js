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


//Used to grab id from dropdown

d3.select("#selDataset").on("change", buildPlot);

function buildPlot() {

    var dropdownMenu = d3.select("#selDataset");

    var dataset = dropdownMenu.property("value");

    updatePlotly(dataset);
}

var metadata = data.metadata;
var test = data.samples;

var demInfo = d3.select("#sample-metadata")
demInfo.append("p").text(`ID: ${idList[0]}`);
demInfo.append("p").text(`Ethnicity: ${metadata[0]["ethnicity"]}`);
demInfo.append("p").text(`Gender: ${metadata[0]["gender"]}`);
demInfo.append("p").text(`Age: ${metadata[0]["age"]}`);
demInfo.append("p").text(`Location: ${metadata[0]["location"]}`);
demInfo.append("p").text(`bbtype: ${metadata[0]["bbtype"]}`);
demInfo.append("p").text(`wfreq: ${metadata[0]["wfreq"]}`);

buildPlot()
function buildPlot() {
    var otuIds = test[0]["otu_ids"]
    slicedOtuIds = otuIds.slice(0, 10)
    var sampleValues = test[0]["sample_values"]
    slicedSampleValues = sampleValues.slice(0, 10)
    var trace1 = {
        x: slicedSampleValues,
        y: slicedOtuIds.toString(),
        type: "bar",
        orientation: "h"
    };
    var data = [trace1]
    Plotly.newPlot("bar", data);
    var trace2 = {
        x: otuIds,
        y: sampleValues,
        mode: "markers",
        marker: {
            size: sampleValues,
            color: otuIds
        }
    };
    var data = [trace2]
    Plotly.newPlot("bubble", data)
    };
});