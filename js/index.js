$(".agregar").on("click", (event) => {
  event.preventDefault();
  var addedText = $("#newText").val();
  $(".Lista").append(`
    <li class="lis">
        <p class="itemShop">${addedText}</p>
        <br />
        <button class="checar"> Check </button>
        <button class="del"> Delete </button>
    </li>
    `);
});


$(".Lista").on("click",".checar",function() {
    $(this).parent().toggleClass("chec")
})

$(".Lista").on("click",".del",function() {
    $(this).parent().remove()
})