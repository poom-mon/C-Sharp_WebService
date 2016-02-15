<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="WebApp_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
            table, th, td {
           border: 1px solid black;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <br /><br />

            <select id="ddlSelect">
                 <option value="0">เลือก </option>
                 <option value="wsXml">Call webservice Xml </option>
                 <option value="wsJson">Call webservice Json </option>
            </select>
    <div> 
       Open web console >>>

    </div>
    </form> 
    <script src="../js/File/jquery.1.11.0.min.js" type="text/javascript"></script> 
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
      // fncXmlWs();
        function fncXmlWs() {
            var _url = "../Ws/WsApp.asmx/callXmlWebservice";
            return $.ajax({
                type: "POST",
                url: _url,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                //data: "{data:'" + JSON.stringify(data).replace(/'/g, "\\'\\'") + "'}",
                data: "",
                success: function (response) {
                    console.log(response.d);
                    // console.log("respone :",response.d);
                },
                error: function (xhr, status, msg) {
                    var error = eval("(" + xhr.responseText + ")");
                    console.log(error.Message);
                    result = null;
                }
            });
        }
       // fncJsonWs();
        function fncJsonWs() {
            var _url = "../Ws/WsApp.asmx/callJsonWebservice";
            return $.ajax({
                type: "POST",
                url: _url,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                //data: "{data:'" + JSON.stringify(data).replace(/'/g, "\\'\\'") + "'}",
                data: "",
                success: function (response) {
                    global_res = response.d;
                    console.log("respone :", response.d);
                },
                error: function (xhr, status, msg) {
                    var error = eval("(" + xhr.responseText + ")");
                    console.log(error.Message);
                    result = null;
                }
            });
        }
    </script>

</body> 
</html>
