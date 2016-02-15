using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
    public class queryDataDAL
    {
        public static List<MODEL.QueryModel> queryObj()
        {
            List<MODEL.QueryModel> objQuery = new List<MODEL.QueryModel>(); 
            objQuery.Add(new MODEL.QueryModel { ID=  1, NAME=  "poom1", EMAIL="test@gmail.com"  , SYSTEM_NAME = "system1" });
            objQuery.Add(new MODEL.QueryModel { ID = 2, NAME = "poom2", EMAIL = "test@gmail.com", SYSTEM_NAME = "system2" });
            objQuery.Add(new MODEL.QueryModel { ID = 3, NAME = "poom3", EMAIL = "test@gmail.com", SYSTEM_NAME = "system3" });
            return objQuery;
        }
    }
}
