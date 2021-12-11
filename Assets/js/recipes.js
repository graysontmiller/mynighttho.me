//API Key for Spoonuclar
var spoonKey = "6ad98c8c55ae4c2c9233218dc232d4ca";

var searchRecipes = function (userCuisine) {
    //call out to Spooncular to request cuisine using user input
    let recipeString = "https://api.spoonacular.com/recipes/complexSearch?cuisine=" + userCuisine + "&apiKey=" + spoonKey;

    //removes all previous search results
    $("#displayRecipes").children().remove();

    fetch(recipeString)
        .then(Response => Response.json()).then((data) => {
            //narrows down data to just bring back the results
            data = data.results;

            //should the results be an Array, this loops through all items and appends to UL
            if (Array.isArray(data)) {
                for (let recipe in data) {
                    console.log(data[recipe]);
                }
            } else {
                //if only one result, still appends with no loop
                console.log(data);
            }
        }).catch((err) => {
            console.log(err);
        });
};

var displayRecipe = function(recipeID){
    let recipeString = "https://api.spoonacular.com/recipes/" + recipeID + "/information?apiKey=" + spoonKey;

    fetch(recipeString)
    .then(Response => Response.json()).then((data) => {
        return data;
    }).catch((err) => {
        console.log(err);
    });
};

$(".option").on("click", function(){
    let myValue = $(this).val();
    searchRecipes(myValue);
    console.log(myValue);
});