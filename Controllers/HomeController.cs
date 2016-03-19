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

        public ActionResult Composing() {
            return View();
        }
        public ActionResult Todo() {
            return View();
        }
    }
}