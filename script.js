/* ------------------- Javascript ------------------- */

    // Get the modal
    var myModal_1 = document.getElementsByClassName('myModal')[0];
    var myModal_2 = document.getElementsByClassName('myModal')[1];
    var myModal_3 = document.getElementsByClassName('myModal')[2];
    var myModal_4 = document.getElementsByClassName('myModal')[3];

    // Get the button that opens the modal
    var myBtn_1 = document.getElementsByClassName("myBtn")[0];
    var myBtn_2 = document.getElementsByClassName("myBtn")[1];
    var myBtn_3 = document.getElementsByClassName("myBtn")[2];
    var myBtn_4 = document.getElementsByClassName("myBtn")[3];

    // Get the <span> element that closes the modal
    var close_btn_1 = document.getElementsByClassName("close")[0];
    var close_btn_2 = document.getElementsByClassName("close")[1];
    var close_btn_3 = document.getElementsByClassName("close")[2];
    var close_btn_4 = document.getElementsByClassName("close")[3];

    // When the user clicks the button, open the modal
    myBtn_1.onclick = function() {
        myModal_1.style.display = "block";
    }
    myBtn_2.onclick = function() {
        myModal_2.style.display = "block";
    }
    myBtn_3.onclick = function() {
        myModal_3.style.display = "block";
    }
    myBtn_4.onclick = function() {
        myModal_4.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    close_btn_1.onclick = function() {
        myModal_1.style.display = "none";
    }
    close_btn_2.onclick = function() {
        myModal_2.style.display = "none";
    }
    close_btn_3.onclick = function() {
        myModal_3.style.display = "none";
    }
    close_btn_4.onclick = function() {
        myModal_4.style.display = "none";
    }