<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Wcf_WebService._default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
     <div> 
        <br />
        <br /> 
        <select id="ddlSelect">
                <option value="0">เลือก </option>
                <option value="wsXml">Call webservice Xml </option>
                <option value="wsJson">Call webservice Json </option>
        </select>
        <div> 
       Open web console >>>

    </div>
    </div> 
    </form>
  <%--  <script src="js/jquery-1.7.1.min.js" type="text/javascript"></script> --%>
    <script src="js/jquery.1.11.0.min.js" type="text/javascript"></script>
    <script>
     
     $("#ddlSelect").on("change", function () {
        console.log($(this).val());
        var call = $(this).val();
        if (call == "wsXml") {
            fncXmlWs();
        }
        else if (call == "wsJson") {
            fncJsonWs();
        }
    });
    function fncXmlWs() {
       /* $.ajax({
            type: "POST",
            url: "wsWcf.svc/GetData",
            data: "{}", //Data sent to server
            contentType: "application/json; charset=utf-8", // content type sent to server
            dataType: "json", //Expected data format from server
            processdata: true, //True or False
            success: function (msg) {//On Successfull service call
                ServiceSucceeded(msg);
            },
           error: function (xhr, status, msg) {
               var error = eval("(" + xhr.responseText + ")");
               console.log(error.Message);
               result = null;
           }
        });*/

       //var obj = $.postJSON("wsWcf.svc/GetData", "{}", function (msg) {
       //    console.log("msg",msg);
        //});


        // not complete
        $.ajax({
            type: "POST",
            url: "wsWcf.svc/GetData",
            data: "",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            processData: true,
            success: function (msg) {
                msg = $.parseJSON(msg);
                console.log(msg);
            },
            error: function (err) {
                console.log(err);
            }
        });

    }
    function fncJsonWs() {

    }

    $.postJSON = function (url, data, callback) {
        return jQuery.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'type': 'POST',
            'url': url,
            'data': JSON.stringify(data),
            'dataType': 'json',
            'success': callback
        });
    };
     
   </script>
</body>
</html>
