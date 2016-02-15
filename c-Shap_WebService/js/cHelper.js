


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
        data:  JSON.stringify(data).replace(/'/g, "\\'\\'") ,
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



function commasAdd(txt) {
    try {
        var val = txt.toString().replace(/,/g, '');
        if (val.indexOf('.') != -1) {
            var valBeforeDecimalPoint = getValueBeforeDecimalPoint(val);
            var valAfterDecimalPoint = getValueAfterDecimalPoint(val);
            txt = valBeforeDecimalPoint.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.' + valAfterDecimalPoint;
        }
        else {
            txt = val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return txt;
    } catch (err) {
        console.log("Error  : " + err.message);
        return "0";
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

function SetOptionListDdl(elemName, text, value) {
    elemName.append("<option value='" + value + "'>" + text + "</option>");
}



// เชคตัวเลขอย่างเดียว ex.
//<input  onkeypress=" return num_key(event);" maxlength="9" type="text">
function num_key(evt) {
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
 

 
 // function submit form
/*.net สามารถใช้คำสั่งนี้เช็ค value ที่โยนมาได้
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
function validMobile(str) {
    var regex = /^0[6,8,9]{1}[0-9]{8}$/;
    return regex.test(str);
}
function validEmail(str) {
    var email_check = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
    if (email_check.test(str.replace(/^\s+|\s+$/g, '')) === false || str.length < 1) {
        return false;
    } else {
        return true;
    }
}

function nonSpecialKey(e) {
    var b = true;
    var sp = '|,\":<>[]{}`\';!@#$%^&*()_/';
    e = e || windows.event;
    var key = e.keyCode || e.which;
    var keyval = String.fromCharCode(key);
    if (sp.indexOf(keyval) > -1) {
        b = false;
    }

    return b;
}