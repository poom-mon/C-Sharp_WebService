<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="WcfService._default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
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
          $.ajax({
              type: "GET",
                contentType: "application/json; charset=utf-8",
                url: "Service.svc/GetData", 
                success: function (data) {
                    console.log($.parseJSON(data.d));
                },
                error: function (result) {
                    console.log(result);
                }
            });   
        }



        var Type;
        var Url;
        var Data;
        var ContentType;
        var DataType;
        var ProcessData;
        //Generic function to call AXMX/WCF  Service        
        function CallService() {
            $.ajax({
                type: Type, //GET or POST or PUT or DELETE verb
                url: Url, // Location of the service
                data: Data, //Data sent to server
                contentType: ContentType, // content type sent to server
                dataType: DataType, //Expected data format from server
                processdata: ProcessData, //True or False
                success: function (msg) {//On Successfull service call
                    ServiceSucceeded(msg);
                },
                error: ServiceFailed// When Service call fails
            });
        }

        function ServiceFailed(result) {
            alert('Service call failed: ' + result.status + '' + result.statusText);
            Type = null; Url = null; Data = null; ContentType = null; DataType = null; ProcessData = null;
        }

        function WCFJSON() { 
            Type = "POST";
            Url = "Service.svc/GetUser";
            Data = '{"Id": "1233"}';
            ContentType = "application/json; charset=utf-8";
            DataType = "json"; ProcessData = true;
            CallService();
        }

        function ServiceSucceeded(result) {

            if (DataType == "json") {

                resultObject = result.GetUserResult;

                for (i = 0; i < resultObject.length; i++) {
                    alert(resultObject[i]);
                }

            }

        }

        function ServiceFailed(xhr) {
            alert(xhr.responseText);
            if (xhr.responseText) {
                var err = xhr.responseText;
                if (err)
                    error(err);
                else
                    error({ Message: "Unknown server error." })
            }
            return;
        }

        $(document).ready(
             function () {
                 WCFJSON();
             }
         );
         
   </script>
</body>
</html>
