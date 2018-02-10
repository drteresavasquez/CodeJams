$("#nameSubmit").click(function submitNames() {
    let nameString = $("#nameInput").val();
    let nameArray = nameString.split(",");
    let randomName = nameArray[Math.floor(Math.random() * nameArray.length)];
    $("#output").html(
        `<h3>${randomName}</h3>
    <button type="button" class="btn btn-success" id="back">Go Back</button>`
    )

    $("#back").click(function () {
        location.reload();
    })
})