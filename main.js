menu_list_array = ["Veg Margherita Pizza", "Veg Pizza", "Non-Veg Piza", "Cheese Pizza", "Small Pizza", "Medium Pizza", "Large Pizza"];

function getmenu() {
    var htmldata;
    htmldata = "<ol class = 'menulist'  >";
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + "<li>" + menu_list_array[i] + "</li>";
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML =
        htmldata;

}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.sort();
    htmldata = "<section class='cards'>"
    for (var i = 0; i < menu_list_array.length; i++) {

        htmldata = htmldata + '<div  style = "padding:10px; margin:20px; width:400px; background-color:red; "class="card"> <img style = "width:50px; height:50px;" src="images/pizzaImg.png"/>&nbsp;&nbsp;' + menu_list_array[i] + "</div>";
    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;


}

function add_top() {
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}