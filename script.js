function upDate(previewPic) {
  
    console.log("Hover Event actived!");

    console.log("Alt text:", previewPic.alt);
    console.log("Source URL:", previewPic.src);

  
    document.getElementById("image").innerHTML = previewPic.alt;

  
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  
    document.getElementById("image").style.backgroundImage = "url('')";

  
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

function addTabImage(){
    console.log("On triggered");                       // kiểm tra onload có chạy

    const cards = document.getElementsByClassName("preview"); // lấy danh sách phần tử
    console.log(cards.length);                             // phải ra đúng số lượng

    for (let i = 0; i < cards.length; i++) {               // đi qua từng phần tử
        cards[i].setAttribute("tabindex", "0");              // thêm tabindex
        console.log("Added tabindex to item " + (i + 1));    // báo từng lần
    }
}