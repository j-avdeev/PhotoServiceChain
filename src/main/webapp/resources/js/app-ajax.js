function MessageBox() {
    return swal("Oops!", "Данная страница в разработке", "error");
}

function openDialog(error) {
    debugger;
    if (error > 0) {
        $("#dialog").dialog("open");
    }
}