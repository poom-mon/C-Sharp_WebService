using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services; 
using System.Web.Script.Services;
using Newtonsoft.Json;

/// <summary>
/// Summary description for WsApp
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
// opent tag for call Ajax 
[System.Web.Script.Services.ScriptService]
public class WsApp : System.Web.Services.WebService {

    public WsApp () { 
        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    } 
    [WebMethod]  
    public List<MODEL.QueryModel> callXmlWebservice() {
        return BAL.queryDataBAL.queryObj();
    }
    [WebMethod]
   // [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)] 
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string callJsonWebservice()
    {   
        //using system.web.Extension 
        //add reference Newtonsoft.Json
        //using Newtonsoft.Json  
        List<MODEL.QueryModel> obj = BAL.queryDataBAL.queryObj();
        return JsonConvert.SerializeObject(obj, Formatting.Indented); 
    }  
     

      
    
}
