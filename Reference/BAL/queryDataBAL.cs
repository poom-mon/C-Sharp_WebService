using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BAL
{
    public class queryDataBAL
    {
        public static List<MODEL.QueryModel> queryObj()
        {
            return DAL.queryDataDAL.queryObj();
        }
    }
}
