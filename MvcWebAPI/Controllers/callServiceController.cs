using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using System.Web.Script.Services;

namespace MvcWebAPI.Controllers
{
    public class callServiceController : ApiController
    {


        // GET api/callService/callWsXML
        [HttpGet] 
        public List<MODEL.QueryModel> callWsXML()
        {
            return BAL.queryDataBAL.queryObj();
        } 

        // GET api/callService/callWsJson
        [HttpGet]
        public string callWsJson()
        {
            List<MODEL.QueryModel> obj = BAL.queryDataBAL.queryObj();
            return JsonConvert.SerializeObject(obj, Formatting.Indented);  
        }


        /*** default api ************/ 
        // GET api/callService
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/callService/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/callService
        public void Post([FromBody]string value)
        {
        }

        // PUT api/callService/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/callService/5
        public void Delete(int id)
        {
        }
        /*** default api ************/
    }
}
