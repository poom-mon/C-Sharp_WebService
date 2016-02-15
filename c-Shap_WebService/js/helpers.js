/// <reference path="alert/sweet-alert.js" />
/// <reference path="alert/sweet-alert.js" />

///////////////////////////////////////
/*
    Ajax call
    รับข้อมูลเป็น 
    webMethod : path http://
    data : object
*/
// datat array object
// async false
function AjaxPostObj(webMethod, data) { 
    try {
            var _tmp;
            $.ajax({
            async: false
            , type: "POST"
            , url: webMethod
            , contentType: "application/json; charset=utf-8"
            , dataType: "json"
            , data: "{data:'" + JSON.stringify(data).replace(/'/g, "\\'\\'") + "'}"
            , success: function (response) {
                 _tmp = response.d
            },
            error: function (xhr, status, msg) {
            var error = eval("(" + xhr.responseText + ")");
            console.log(error.Message);
            _tmp = null
        }
    });
       return _tmp;
    }
    catch (err) { }
}

//asys true ต่างคนต่างทำ
function AjaxPostAsyTrue(webMethod, data) {
        return $.ajax({
            async: true
            , type: "POST"
            , url: webMethod
            , contentType: "application/json; charset=utf-8"
            , dataType: "json"
            , data: "{data:'" + JSON.stringify(data).replace(/'/g, "\\'\\'") + "'}"
            , success: function (response) {
                _tmp = response.d
                console.log(_tmp);
            },
            error: function (xhr, status, msg) {
                var error = eval("(" + xhr.responseText + ")");
                console.log(error.Message);
                _tmp = null
            }
        });
} 
// datat array object
function AjaxLoader(webMethod, data, progressID) {
    try {
        $("#" + progressID).css("display", "");
        var _tmp;
        $.ajax({
            async: false
            , type: "POST"
            , url: webMethod
            , contentType: "application/json; charset=utf-8"
            , dataType: "json"
            , data: "{data:'" + JSON.stringify(data).replace(/'/g, "\\'\\'") + "'}"
            , beforeSend: function () {
                $("#divProgress").css("display", "");
            }
            , success: function (response) {
                _tmp = response.d
                $("#" + progressID).css("display", "none");
            }
            , error: function (xhr, status, msg) {
                var error = eval("(" + xhr.responseText + ")");
                console.log(error.Message);
                _tmp = null
            }
            });
            return _tmp;
        }
        catch (err) { }
  }

// datat array Data
function AjaxPostData(webMethod, data) {
    try {
        var _tmp;
        $.ajax({
            async: false
            , type: "POST"
            , url: webMethod
            , contentType: "application/json; charset=utf-8"
            , dataType: "json"
            , data: data
            , success: function (response) {
                _tmp = response.d
            },
            error: function (xhr, status, msg) {
                var error = eval("(" + xhr.responseText + ")");
                console.log(error.Message);
                _tmp = null
            }
        });
        return _tmp;
    }
    catch (err) { }
}

///********************//
//รับค่า ข้อมูลเป็น server เป็น data  
 
function callAjaxAsyFailObj(data, serviceURL, functionSuccess) {
        $.ajax({
            type: "POST",
            url: serviceURL,
            data: "{'data':" + JSON.stringify(data).replace(/'/g, "\\'\\'") + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data, status) {
            functionSuccess(data.d);
        },
        error: function (data) {
             console.log(data);
        }
    });
}

function callAjaxAsyFailData(data, serviceURL, functionSuccess) {
    $.ajax({
        type: "POST",
        url: serviceURL,
        data: JSON.stringify(data).replace(/'/g, "\\'\\'"),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, status) {
        functionSuccess(data.d);
        },
    error: function (data) {
        console.log(data);
    }
    });
}



/*
///// ฟังก์ชั้น submit from
//page_name : path ที่จะ submit
//param : object ที่จะส่งข้ามฟอร์ม
var param = [];
param.push(["payType", payType]);
param.push(["tid", tid]); 
formsubmit("../chaophaya/thankyou.aspx", param);  


.net สามารถใช้คำสั่งนี้เช็ค value ที่โยนมาได้
foreach (string key in Request.Form.Keys)
{
Response.Write(key + ": " + Request.Form[key] + "<br/>");
}
*/
function formsubmit(page_name, param) {
    var $form = $("<form/>").attr("id", "data_form").attr("action", page_name).attr("method", "post");
    $("body").append($form);
    for (i = 0; i < param.length; i++) {
        $form.append("<input name='" + param[i][0] + "' value= '" + param[i][1] + "'  type='hidden' />")
    }
    $form[0].submit();
}

/*
///// ฟังก์ชั้น ValidateEmail
//str : string ที่ส่งมาเช็ค
*/
function funcValidEmail(str) {
    var email_check = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
    if (email_check.test(str.replace(/^\s+|\s+$/g, '')) === false || str.length < 1) {
        return false;
    }
    else {
        return true;
    }
}
/*
///// ฟังก์ชั้น Validate mobile
//str : string ที่ส่งมาเช็ค
*/
function funcValidMobile(str) {
    var regex = /^0[6,8,9]{1}[0-9]{8}$/;
    if (regex.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

function funcValidTel(str) {
    var regex1 = /^02[0-9]{7}$/;
    var regex2 = /^0[3,4,5,7]{1}[2-9]{1}[0-9]{6}$/;
    if (regex1.test(str) || regex2.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

/*
///// ฟังก์ชั้น Validate รหัสบัตรประชาชน
//PersID : string รหัสบัตรประชาชน
*/
function fncCheckIDCard(PersID) {
    for (i = 0, sum = 0; i < 12; i++) {
        sum += parseFloat(PersID.charAt(i)) * (13 - i);
    }

    if ((11 - sum % 11) % 10 != parseFloat(PersID.charAt(12))) {
        return (false);
    }
    else {
        return (true);
    }
}

/*
///// ฟังก์ชั้น Validate รหัสบัตรประชาชน
//PersID : string รหัสบัตรประชาชน
*/
function GetQueryStringParams(sParam) {
    try {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return typeof sParameterName[1] !== "undefined" ? sParameterName[1] : "";
            }
        }
    }
    catch (err) { }
}

/*
///// ฟังก์ชั้น bind select html
//elemName : ชือ id  ex.$("#id)
//optionList : respone object 
*/

function SetOptionList(elemName, optionList) {
    try {
        $(elemName).append($('<option></option>').val('').html('กรุณาเลือกข้อมูล'));
        for (var i = 0; i < optionList.length; i++) {
            $(elemName).append($('<option></option>').val(optionList[i].val).html(optionList[i].text));
        }
    }
    catch (err) { }
}
function getDomain() {
    return "http://" + document.domain;
}

function SetOptionListDdl(elemName, text, value) {
    elemName.append("<option value='" + value + "'>" + text + "</option>");
}

/*
///// ฟังก์ชั้น set selection  select html
//elemName : ชือ id  ex.$("#id)
//valueSelect : respone object 
*/
function select_option(elemName, valueSelect) {
    $("#" + elemName + " option[value='" + valueSelect + "']").prop('selected', true);
}

function sortDropdownDesc(elemName) {
    try {
        $("#" + elemName).html($('#' + elemName + ' option').sort(function (x, y) {
            return $(x).text() > $(y).text() ? -1 : 1;
        }))
        $("#" + elemName).get(0).selectedIndex = 0;
    }
    catch (err) { }
}
function sortDropdownAsc(elemName) {
    try {
        $("#" + elemName).html($('#' + elemName + ' option').sort(function (x, y) {
            return $(x).text() < $(y).text() ? -1 : 1;
        }))
        $("#" + elemName).get(0).selectedIndex = 0;
    }
    catch (err) { }
}

///// ฟังก์ชั้น Validate mobile
//str : string ที่ส่งมาเช็ค

function funcValidMobile(str) {
    var regex = /^0[6,8,9]{1}[0-9]{8}$/;
    if (regex.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

///// ฟังก์ชั้น ValidateEmail
//str : string ที่ส่งมาเช็ค

function funcValidEmail(str) {
    var email_check = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
    if (email_check.test(str.replace(/^\s+|\s+$/g, '')) === false || str.length < 1) {
        return false;
    }
    else {
        return true;
    }
}


function fncNotThai(e, o) {
    var orgi_text = "ๅภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ๑๒๓๔ู฿๕๖๗๘๙๐ฎฑธํ๊ณฯญฐฅฤฆฏโฌ็๋ษศซฉฮฺ์ฒฬฦ";
    e = e || windows.event;
    var key = e.keyCode || e.which;
    var keyvalue = String.fromCharCode(key);

    if (orgi_text.indexOf(keyvalue) == -1 || key == 8) {
        return true;
    }
    else {
        return false;
    }
}


// เชคตัวเลขอย่างเดียว ex.
//<input  onkeypress=" return num_key(event);" maxlength="9" type="text">
function onlyNumber(evt) {
    try {
        var iKeyCode;
        var IsValid = false;

        if (window.event) // IE	
        {
            iKeyCode = evt.keyCode
        }
        else if (evt.which) // Netscape/Firefox/Opera
        {
            iKeyCode = evt.which
        }
        if (iKeyCode > 47 && iKeyCode < 58 || iKeyCode == 8 || iKeyCode == undefined) {
            return true;
        } else {
            return false;
        }
    }
    catch (err) { }
}


// เช็ค email
//<input  onkeypress=" return email_key(event);" maxlength="9" type="text">
function email_key(evt) {
    var iKeyCode;
    var IsValid = false;

    if (window.event) // IE
    {
        iKeyCode = evt.keyCode
    }
    else if (evt.which) // Netscape/Firefox/Opera
    {
        iKeyCode = evt.which
    }

    if (((iKeyCode > 64 && iKeyCode < 91) || (iKeyCode > 96 && iKeyCode < 123)) || (iKeyCode > 47 && iKeyCode < 58) || (iKeyCode == 64) || (iKeyCode == 95) || (iKeyCode == 13) || (iKeyCode == 45) || (iKeyCode == 46) || iKeyCode == 8 || iKeyCode == undefined) {
        return (true);
    }
    else {
        return (false);
    }
}
// add ตัวเลขให้เป็นเลขจำนวนเต็มมี comma    
// ex: 11,251
function commasAdd(val) {
    val = Math.round(val);
    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return val;
}
function commasAddFlot(val) {
    val = val.toFixed(2); //Math.round(val);
    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return val;
}
function fncMilionTh(data) {
    data = Math.round(data) / 1000000;
    return data.toString() + "ล้าน"
}

function num_key_and_th_key(e, o, addWarningText) {
    if (!e) var e = windows.event;

    var key = e.keyCode ? e.keyCode : e.which;
    if ((key >= 3585) || (key == 32) || (key >= 48 && key < 58) || (key == 32) || key == 8 || key == 9 || key == 0 || key == undefined) {
        if (typeof addWarningText == "undefined" || addWarningText == false || addWarningText == "") {
            $('span.change-lang ').remove();
        }
        return true;
    }
    else {
        if (typeof addWarningText == "undefined" || addWarningText == false || addWarningText == "") {
            $('span.change-lang ').remove(); $('#' + o).after("<span class='change-lang '>กรุณากรอกภาษาไทย</span");
        }
        return false;
    }
}
function validateVehicleNumber_FirstHalf(o) {
    var data = $.trim(o.val());
    var regexType1 = /^[1-9]{1}[ก-ฮ]{2}$/;
    var regexType2 = /^[ก-ฮ]{2}$/;

    if (regexType1.test(data) || regexType2.test(data)) {
        o.css('background-color', '#FFFFFF');
        return true;
    }
    else {
        o.css('background-color', '#FFFFCC')
        $('html, body').animate({ scrollTop: o.offset().top - 40 }, 360);
        return false;
    }
}


//เช็คเลขตัวถัง
function en_num_nosign_key(e) {
    e = e || windows.event;
    var key = e.keyCode || e.which;

    if (((key > 64 && key < 91) || (key > 96 && key < 123)) || (key > 47 && key < 58) || key == 8 || key == 9 || key == undefined) {
        return (true);
    }
    else {
        return (false);
    }
}

function fncNotThai(e, o) {
    var orgi_text = "ๅภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ๑๒๓๔ู฿๕๖๗๘๙๐ฎฑธํ๊ณฯญฐฅฤฆฏโฌ็๋ษศซฉฮฺ์ฒฬฦ";
    e = e || windows.event;
    var key = e.keyCode || e.which;
    var keyvalue = String.fromCharCode(key);

    if (orgi_text.indexOf(keyvalue) == -1 || key == 8) {
        // o.css('background-color', '#FFFFFF'); 
        return true;
    }
    else {
        //o.css('background-color', '#FFFFCC')
        //$('html, body').animate({ scrollTop: o.offset().top - 40 }, 360);
        return false;
    }
}

function fncNotThai(e) {
    var orgi_text = "ๅภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ๑๒๓๔ู฿๕๖๗๘๙๐ฎฑธํ๊ณฯญฐฅฤฆฏโฌ็๋ษศซฉฮฺ์ฒฬฦ";
    e = e || windows.event;
    var key = e.keyCode || e.which;
    var keyvalue = String.fromCharCode(key);
    if (orgi_text.indexOf(keyvalue) >= 0) {
        return false;
    }
    else {
        return true;
    }
}

function fncIsThai(e) {
    var orgi_text = "ๅภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ๑๒๓๔ู฿๕๖๗๘๙๐ฎฑธํ๊ณฯญฐฅฤฆฏโฌ็๋ษศซฉฮฺ์ฒฬฦ";
    e = e || windows.event;
    var key = e.keyCode || e.which;
    var keyvalue = String.fromCharCode(key);
    if (orgi_text.indexOf(keyvalue) >= 0 || key == 8) {
        return true;
    }
    else {
        return false;
    }
}

function fncIsThaiOrNumber(e) {
    var orgi_text = "ๅภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ๑๒๓๔ู฿๕๖๗๘๙๐ฎฑธํ๊ณฯญฐฅฤฆฏโฌ็๋ษศซฉฮฺ์ฒฬฦ";
    e = e || windows.event;
    var key = e.keyCode || e.which;
    var regexType1 = /^[1-9]+$/;
    var keyvalue = String.fromCharCode(key);
    if (orgi_text.indexOf(keyvalue) >= 0 || regexType1.test(keyvalue) || key == 8 || key == 32) {
        return true;
    }
    else {
        return false;
    }
}

function fncHomeNumber(e) {
    e = e || windows.event;
    var key = e.keyCode || e.which;
    var regexType1 = /^[1-9]+$/;
    var keyvalue = String.fromCharCode(key);
    if (regexType1.test(keyvalue) || keyvalue == "/" || keyvalue == "-" || key == 8) {
        return true;
    }
    else {
        return false;
    }
}
function fncKeyPressEn(e) {
    e = e || windows.event;
    var key = e.keyCode || e.which;
    var keyvalue = String.fromCharCode(key);
    var regexType1 = /^[A-Za-z1-9]+$/;
    if (regexType1.test(keyvalue))
        return true;
    else
        return false;
}


function fncCheckThai(data) {
    var regexType1 = /^[ก-ฮ]+$/;
    if (regexType1.test(data))
        return true;
    else
        return false;
}

function fncCheckEn(data) {
    var regexType1 = /^[A-Za-z.]+$/;
    if (regexType1.test(data))
        return true;
    else
        return false;
}

// เช็ค นามสกุล ของ file
function getFileExtension(filename) {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
}

function GetPageName() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var url = document.URL;
    return url.length > 500 ? url.substring(0, 500) : url;
}
function getObjVal(obj) {
    return $.trim(obj.val());
}
function convertInt(va) {
    return Math.round(va);
}

// Message
// var Msg = new Message();
// Msg.Primary("title","display ja",true,"primary ok");  

var Message = function (cssAlertpath, jsAlertPath) {
    checkLoadScriptSuccess(cssAlertpath, "css");
    checkLoadScriptSuccess(jsAlertPath, "js");

};
Message.prototype.Primary = function (title, textDisplay, stCancel, textButton, objId) {
    swal({
        title: title,
        text: textDisplay,
        type: "info",
        showCancelButton: stCancel,
        confirmButtonClass: 'btn-primary',
        confirmButtonText: textButton
    });
    if (objId !== false) {
        objId.focus();
        objId.css('background-color', '#FFFFCC');
    }
};

Message.prototype.Info = function (title, textDisplay, stCancel, textButton, objId) {
    swal({
        title: title,
        text: textDisplay,
        type: "info",
        showCancelButton: stCancel,
        confirmButtonClass: 'btn-info',
        confirmButtonText: textButton
    });
    if (objId !== false) {
        objId.css('background-color', '#FFFFFF');
        objId.focus();
    }
};
Message.prototype.Success = function (title, textDisplay, stCancel, textButton, objId) {
    swal({
        title: title,
        text: textDisplay,
        type: "success",
        showCancelButton: stCancel,
        confirmButtonClass: 'btn-success',
        confirmButtonText: textButton
    });
    if (objId !== false) {
        objId.css('background-color', '#FFFFFF');
        objId.focus();
    }
};
Message.prototype.Warning = function (title, textDisplay, stCancel, textButton, objId) {
    swal({
        title: title,
        text: textDisplay,
        type: "warning",
        showCancelButton: stCancel,
        confirmButtonClass: 'btn-warning',
        confirmButtonText: textButton
    });
    if (objId !== false) {
        objId.css('background-color', '#FFFFFF');
        objId.focus();
    }
};
Message.prototype.Danger = function (title, textDisplay, stCancel, textButton, objId) {
    swal({
        title: title,
        text: textDisplay,
        type: "error",
        showCancelButton: stCancel,
        confirmButtonClass: 'btn-danger',
        confirmButtonText: textButton
    });
    if (objId !== false) {
        objId.css('background-color', '#FFFFFF');
        objId.focus();
    }
};



var filesadded = ""
function checkLoadScriptSuccess(filename, filetype) {
    //example : 
    //checkLoadScriptSuccess("myscript.js", "js") 
    if (filesadded.indexOf("[" + filename + "]") == -1) {
        loadScript(filename, filetype)
        filesadded += "[" + filename + "]" //List of files added in the form "[filename1],[filename2],etc"
    }
    else
        alert("file already added!")
}
function loadScript(filename, filetype) {
    // loadScript("myscript.js", "js") //dynamically load and add this .js file
    // loadScript("mystyle.css", "css") ////
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype == "css") { //if filename is an external CSS file
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}