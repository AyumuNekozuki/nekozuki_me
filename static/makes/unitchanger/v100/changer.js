document.getElementById("change").onclick = function () {
    // ここに#buttonをクリックしたら発生させる処理を記述する

    var moto_num = document.getElementById("motonumber").value;
    var obj = document.getElementById("unit");
    var changeunit = obj.value;
    var result = 0;
    var place = obj.options[changeunit].text;
    
    if(changeunit == "1"){
        result = (moto_num / 0.00714);
        place = "サッカーコート"
    }
    if(changeunit == "2"){
        result = (moto_num / 0.039);
        place = "甲子園球場"
    }
    if(changeunit == "3"){
        result = (moto_num / 0.047);
    }
    if(changeunit == "4"){
        result = (moto_num / 619);
    }
    if(changeunit == "5"){
        result = (moto_num / 378000);
    }
    if(changeunit == "6"){
        result = (moto_num / 0.44);
    }
    document.getElementById("result-text").innerHTML = "<p>" +  moto_num + " km² は、<br>" + place + " <b>" + result + " 個分</b>です！" + "</p>" ;

};

