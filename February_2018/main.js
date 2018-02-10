/* 
2/10/2018 
*/

//Get the names from the User
//Randomly select name
//Present selected name to User

// function load(){
//     $("#output").html(
//     ` <div class="form-group">
//     <label for="exampleFormControlTextarea1">Example textarea</label>
//     <textarea class="form-control" id="nameInput" rows="3"></textarea>
// </div>
// <button type="button" class="btn btn-success" id="nameSubmit">Submit</button>`
// )
// }

$("#nameSubmit").click(function submitNames(){
let nameString = $("#nameInput").val();
let nameArray = nameString.split(",");
let randomName = nameArray[Math.floor(Math.random()*nameArray.length)];
$("#output").html(
    `<h3>${randomName}</h3>
    <button type="button" class="btn btn-success" id="back">Go Back</button>`
)

$("#back").click(function (){
    location.reload();
})
})

// load()


// trinity, remle, gabrielle, olivia