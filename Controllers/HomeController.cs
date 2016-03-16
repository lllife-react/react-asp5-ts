using Microsoft.AspNet.Mvc;
using System;

namespace ReactDotNet.Controllers {
    public class HomeController : Controller
    {
        public ActionResult Index() {
            return View();
        }

        public ActionResult Hello() {
            return View();
        }
    }
}