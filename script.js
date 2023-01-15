var subHeading = document.getElementById("subheading");
subHeading.innerText = `Currently, We have ${countries_data.length} countries`;

const graphTitle = document.getElementById("graphTitle");

const sortedData = countries_data.sort(function (a, b) {
    return b.population - a.population
})

let totalPopulation = 0;
for (let i = 0; i < countries_data.length; i++) {
    totalPopulation += countries_data[i].population;
}
// console.log(totalPopulation);

const graphDiv = document.getElementById("graph");
function buttonOneClicked() {
    graphDiv.innerHTML = " ";
    graphTitle.innerText = "10 most populated countries in the world";


    for (let i = 0; i < 10; i++) {

        var oneDiv = document.createElement("div");
        oneDiv.classList.add("oneDiv");
        // flex div 1

        const languageName = document.createElement("p");
        languageName.innerText = sortedData[i].name;
        languageName.style.width = "30%";

        oneDiv.appendChild(languageName);

        // flex div 1

        // flex div 2
        const percentDiv = document.createElement("div");
        const percentageDiv = document.createElement("div");

        const percentage = (sortedData[i].population / totalPopulation) * 100;
        percentageDiv.style.width = `${percentage}%`;
        percentageDiv.style.height = "100%";
        percentageDiv.style.backgroundColor = "orange";
        percentageDiv.innerText = percentage.toFixed(2) + "%";

        percentDiv.appendChild(percentageDiv);
        percentDiv.style.width = "50%";

        oneDiv.appendChild(percentDiv);
        // flex div 2


        // flex div 3

        const population = document.createElement("p");
        population.innerText = sortedData[i].population;
        population.style.width = "20%";

        oneDiv.appendChild(population);

        // flex div 3

        oneDiv.classList.add("flex");
        oneDiv.classList.add("container");

        graphDiv.appendChild(oneDiv);

    }

}

function buttonTwoClicked() {
    graphDiv.innerHTML = " ";
    graphTitle.innerText = "10 most spoken languages in the world";

    const languagesArray = [];

    for(let i = 0;i < countries_data.length;i++){
        languagesArray.push(countries_data[i].languages);
    }
    
    
    const flattedLanguagesArray = languagesArray.flat();

    const languageCount = {};



    flattedLanguagesArray.map((ele)=>{

        languageCount[ele] = 1+(languageCount[ele] || 0);
    })

    const objArray = Object.entries(languageCount);
    const sortedArray = objArray.sort((a,b)=>{
        return b[1] - a[1];
    });
    
    
    for(let i = 0;i < 10;i++){
        const topTenvaluesFromSortedArray = sortedArray[i];


        var oneDiv = document.createElement("div");
        oneDiv.classList.add("oneDiv");
        // flex div 1

        const languageName = document.createElement("p");
        languageName.innerText = topTenvaluesFromSortedArray[0];
        languageName.style.width = "30%";

        oneDiv.appendChild(languageName);

        // flex div 1

        // flex div 2
        const percentDiv = document.createElement("div");
        const percentageDiv = document.createElement("div");

        const percentage = (topTenvaluesFromSortedArray[1] / sortedArray.length) * 100;
        percentageDiv.style.width = `${percentage}%`;
        percentageDiv.style.height = "100%";
        percentageDiv.style.backgroundColor = "orange";
        percentageDiv.innerText = percentage.toFixed(2) + "%";

        percentDiv.appendChild(percentageDiv);
        percentDiv.style.width = "50%";

        oneDiv.appendChild(percentDiv);
        // flex div 2


        // flex div 3

        const languageCount = document.createElement("p");
        languageCount.innerText = topTenvaluesFromSortedArray[1];
        languageCount.style.width = "20%";

        oneDiv.appendChild(languageCount);

        // flex div 3

        oneDiv.classList.add("flex");
        oneDiv.classList.add("container");

        graphDiv.appendChild(oneDiv);

        console.log(topTenvaluesFromSortedArray);
    }

}