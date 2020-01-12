$(document).ready(() => {
    $("#add-burger").on("click", event => {
        event.preventDefault();
        var burger = {
            burger_name: $("#burger-name").val().trim()
        };
console.log(burger);
        $.ajax("/api/burger", {
            type: "POST",
            data: burger
        }).then(() => {
            location.reload();
        });

    });

    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var devouredBurger = {
            id: id
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(() => {
            console.log("burger devoured");
            location.reload();
        });
    });
});
