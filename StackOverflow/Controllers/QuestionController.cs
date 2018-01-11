using HelperModal;
using Newtonsoft.Json;
using ServiceLayer.ServiceInterface;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace StackOverflow.Controllers
{
    public class QuestionController : Controller
    {
        private SISample _SISample;
        public QuestionController(SISample SISample)
        {
            _SISample = SISample;
        }
        // GET: Qustion
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult GetData()
        {
            return Json(new { list = _SISample.GetSampleData() }, JsonRequestBehavior.AllowGet);
        }

    }
}