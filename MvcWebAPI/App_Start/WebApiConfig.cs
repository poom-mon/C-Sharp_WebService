using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Routing;
using System.Net.Http;

namespace MvcWebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //); 
            config.Routes.MapHttpRoute(
                   name: "ApiById",
                   routeTemplate: "api/{controller}/{id}",
                   defaults: new { id = RouteParameter.Optional },
                   constraints: new { id = @"^[0-9]+$" }
               );

            config.Routes.MapHttpRoute(
                name: "ApiByName",
                routeTemplate: "api/{controller}/{action}/{name}",
                defaults: new { name = RouteParameter.Optional },
                constraints: new { name = @"^[a-z]+$" }
            );

            // config.Routes.MapHttpRoute(
            //    name: "ApiByAction",
            //    routeTemplate: "api/{controller}/{action}",
            //    defaults: new { action = "Get" },
            //    constraints: new { name = @"^[a-z]+$" }
            //);

            config.Routes.MapHttpRoute(
                name: "ApiByAction",
                routeTemplate: "api/{controller}/{action}",
                defaults: new { action = "Get" }
            );

            config.Routes.MapHttpRoute(
                name: "ApiByAction2",
                routeTemplate: "api/{controller}/{action}",
                defaults: new { action = "Post" }
            );


            config.Routes.MapHttpRoute(
               name: "ApiByActionPut",
               routeTemplate: "api/{controller}/{action}",
               defaults: new { id = RouteParameter.Optional, action = "Put" },
                constraints: new { httpMethod = new HttpMethodConstraint(HttpMethod.Put) }
           );
             
        }
    }
}
