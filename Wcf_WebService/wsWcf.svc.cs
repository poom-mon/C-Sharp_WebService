using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.ServiceModel.Activation;

namespace Wcf_WebService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.


    // NOTE: If you change the class name "Service" here, you must also update the reference to "Service" in Web.config and in the associated .svc file.
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]


    public class Service1 : IwsWcf
    {
        public List<MODEL.QueryModel> callDataXML()
        {
            return BAL.queryDataBAL.queryObj();
        }
        public string callDataJson()
        {
            return string.Format("You entered: {0}");
        }

        public string GetData()
        {
            return string.Format("You entered: {0}");
        }
         
    }
}
