/* function foo_1() {
    document.getElementById("rezult_1").innerHTML = "Работает интернет?";
    let x = confirm("Работает интернет?");
    if (x == true) {
        document.getElementById("rezult_1").innerHTML = "установлен ли шаблон курса";
        let x2 = confirm("установлен ли шаблон курса");
        if (x2 == true) {
            alert("бог в помощ");
            document.getElementById("rezult_1").innerHTML = "Не получается создать курс в Руководителе";
            return 0;
        }
        alert("установите шаблон ");
        document.getElementById("rezult_1").innerHTML = "Не получается создать курс в Руководителе";
        return 0;
    }
    alert("подключите интернет");
    document.getElementById("rezult_1").innerHTML = "Не получается создать курс в Руководителе";
    return 0;
} */
function foo_1() {
    let fo1_1 = confirm("Есть ли подключение к интернату ");
    if (fo1_1 == true) {
        let fo1_2 = confirm("Работает ли MOODLE");
        if (fo1_2 == true) {
            let fo1_4 = confirm("Работает ли руководитель ");
            if (fo1_4 == true) {
                alert("Проверьте в настройках разрешен ли доступ к веб-сервисам ")
                return 0;
            }
            alert("Перезапустите руководитель");
            return 0;
        }
        alert("Перезапустите Moodle");
        return 0;
    }
    alert("Включите интернет");
    return 0;
};
/* $( function() {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "ДА": function() {
          $( this ).dialog( "close" );
        },
        "НЕТ": function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } ); */

function foo_2() {
    let fo2_1 = confirm("Подключен ли Руководитель к Moodle My-class.php");
    if (fo2_1 == true) {
        let fo2_2 = confirm("Плагин в Moodle работает?");
        if (fo2_2 == false) {
            let fo2_4 = confirm("Подключен ли Руководитель к Moodle (My-class.php) ");
            
            
            if (fo2_4 == true) {
                alert("Обратитесь в тех поддержку")
                return 0;
            }
            alert("Проверьте подключение в файле My-class.php и проверьте запрос плагина к Moodle");
            return 0;
        }
        alert("Обратитесь в тех поддержку");
        return 0;
    }
    alert("Дайте в настройках доступ к внешним веб-сервисам");
    return 0;
};



function foo_3() {
    let fo3_1 = confirm("Правильно ли заполнялись поля в Руководителе");
    if (fo3_1 == true) {
        let fo3_2 = confirm("Плагин подключения не поврежден? (My-class.php)");
        if (fo3_2 == true) {
            let fo3_4 = confirm("Правильно ли собираются массив полей в файле workflow.madi.ru\www\modules\items\actions\items.php");
            if (fo3_4 == true) {
                alert("Проверьте плагин в Moodle (moodle\www\local\custom_service\externallib.php)")
                return 0;
            }
            alert("Обратитесь к разработчикам в вашем университете");
            return 0;
        }
        alert("Откатите до прошлой версии плагина");
        return 0;
    }
    alert("Проверьте и заполните поля");
    return 0;
};

function foo_4() {
    let fo4_1 = confirm("Работает ли плагин в Moodle");
    if (fo4_1 == true) {
        let fo4_2 = confirm("Подключен ли Руководитель к Moodle ");
        if (fo4_2 == false) {
            let fo4_4 = confirm("Отправляет ли Moodle ответ на запрос из Руководителя");
            if (fo4_4 == true) {
                alert("обратитесь за помощью к разработчикам")
                return 0;
            }
            alert("Ищите проблему в плагине Moodle");
            return 0;
        }
        alert("Обратитесь в тех поддержку");
        return 0;
    }
    alert("Переустановите плагин ");
    return 0;
};

function show() {
    let gooShow = document.getElementById('listShow');
    let chengC = document.getElementById('changeColor');
    if (document.getElementById('listShow').style.display=='none'){
        gooShow.style.display = 'block';
        chengC.style.backgroundColor = "rgb(130, 176, 207)";

    } else {
        gooShow.style.display = 'none';
        chengC.style.backgroundColor = "rgb(112, 112, 192)";
    }
}

function abotF() {
    let abotC = document.getElementById('abotId');
    let aboutText = document.getElementById('abotText');
    if (document.getElementById('abotText').style.display=='none'){
        aboutText.style.display = 'block';
        abotC.style.backgroundColor = "rgb(130, 176, 207)";
    }else {
        aboutText.style.display = 'none';
        abotC.style.backgroundColor = "rgb(112, 112, 192)";
    }
}

function actualityShow() {
    let actT = document.getElementById('actID');
    let actText = document.getElementById('actualityText');
    if (document.getElementById('actualityText').style.display=='none'){
        actText.style.display = 'block';
        actT.style.backgroundColor = "rgb(130, 176, 207)";
    }else {
        actText.style.display = 'none';
        actT.style.backgroundColor = "rgb(112, 112, 192)";
    }
}

function regShow() {
    let actT = document.getElementById('regID');
    let actText = document.getElementById('regOpen');
    if (document.getElementById('regOpen').style.display=='none'){
        actText.style.display = 'block';
        actT.style.backgroundColor = "rgb(130, 176, 207)";
    }else {
        actText.style.display = 'none';
        actT.style.backgroundColor = "rgb(112, 112, 192)";
    }
}
