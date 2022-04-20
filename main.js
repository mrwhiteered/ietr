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
    let fo1_1 = confirm("Есть ли подключение к интернету?");
    if (fo1_1 == true) {
        let fo1_2 = confirm("Работает ли Руководитель");
        if (fo1_2 == true) {
            let fo1_4 = confirm("Шаблон создания курсов не удален? Перейдите в настройки шщаблонов курса и проверьте");
            if (fo1_4 == true) {
                alert("Обратитесь с данной проблемой к разработчикам")
                return 0;
            }
            alert("Верните сервер Руководителя на прошлую стабильную версию");
            return 0;
        }
        alert("Перезапустите сервер Руководитель");
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
    let fo2_1 = confirm("Подключен ли Руководитель к Moodle");
    if (fo2_1 == true) {
        let fo2_2 = confirm("Плагин в Moodle работает?");
        if (fo2_2 == false) {
            let fo2_4 = confirm("Подключен ли Руководитель к Moodle (My-class.php) ");
            
            
            if (fo2_4 == true) {
                alert("Обратитесь за помощью к разработчику")
                return 0;
            }
            alert("Проверьте подключение в файле My-class.php, проверьте правильный ли ip адресс написан в 30-й строке  данного файла");
            return 0;
        }
        alert("Обратитесь в тех поддержку");
        return 0;
    }
    alert("Дайте в настройках Moodle доступ к веб-сервисам. (Администрирование - Расширенные возможности - Включить Веб-сервисы). Галочка данного параметра должна быть активна.");
    return 0;
};



function foo_3() {
    let fo3_1 = confirm("Правильно ли заполнялись поля в Руководителе? Все поля с красными пометками должны быть заполнены, а также поля с Названием курса, описанием и категорией курса");
    if (fo3_1 == true) {
        let fo3_2 = confirm("Плагин подключения не поврежден? (My-class.php) - просмотрите в любой системе IDE данный файл, не выдает ли консоль ошибок и открывается ли этот Файл");
        if (fo3_2 == true) {
            let fo3_4 = confirm("Правильно ли собираются массив полей в файле workflow.madi.ru\www\modules\items\actions\items.php");
            if (fo3_4 == true) {
                alert("Плагин в Moodle активен? путь к плагину: (Администрирование - Плагины - Обзор плагинов - custom-service ) ")
                return 0;
            }
            alert("Обратитесь к разработчикам в вашем университете");
            return 0;
        }
        alert("Сделайте плагин активным. Параметр плагина (Доступность) - должен быть в позиции-Включен. Также обновите плагин до актуальной версии");
        return 0;
    }
    alert("Заполните поля правильно и проверьте помогло ли это");
    return 0;
};

function foo_4() {
    let fo4_1 = confirm("Работает ли плагин подключения к Руководителю в Moodle? (Администрирование - Плагины - custom-service) данный плагин должен быть включен");
    if (fo4_1 == true) {
        let fo4_2 = confirm("Подключен ли Руководитель к Moodle? Совпадает ли IP Moodle и IP прописанный в файле подключения Руководителя к Moodle - My-class.php ");
        if (fo4_2 == false) {
            let fo4_4 = confirm("Отправляет ли Moodle ответ на запрос из Руководителя (раскоментируйте в workflow.madi.ru\www\plugins\hello\classes\my_class.php 37-38 строки, при создании курса пришло сообщение об успешной отправке данных?)");
            if (fo4_4 == true) {
                alert("Проблема находится в файле workflow.madi.ru\www\modules\items\actions\items.php попробуйте найти в нем ошибку или обратитесь к разработчикам")
                return 0;
            }
            alert("Проблема находится в Moodle в лагине интеграции обратитесь с данной проблемой к разработчикам");
            return 0;
        }
        alert("Измените IP в My-class.php на верный и перезапустите систему");
        return 0;
    }
    alert("Переустановите плагин и првоерьте параметр (Доступность) он должен иметь значение - Включен");
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
