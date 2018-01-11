using Newtonsoft.Json;
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
    public class QustionController : Controller
    {
        // GET: Qustion
        public ActionResult Index()
        {
            return View();
        }
        //[HttpGet]
        //public async Task<ActionResult> Get()
        //{
        //    return Content(await GetStackOverflowQuestions());
        //}
        //private async Task<string> GetStackOverflowQuestions()
        //{
        //    string jsonString = "";
        //    using (HttpClient client = new HttpClient())

        //    {
        //        try
        //        {
        //            string _ContentType = "application/json";
        //            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue(_ContentType));

        //            HttpResponseMessage response = client.GetAsync("https://api.stackexchange.com/questions?page=1&pagesize=50&order=asc&sort=creation&filter=default&site=stackoverflow").Result;
        //            if (response.IsSuccessStatusCode)
        //            {
        //                var stateInfo = response.Content.ReadAsStringAsync().Result;
        //                //jsonString = JsonConvert.DeserializeObject<HMCustomerAccount>(stateInfo);
        //            }
        //            //HttpResponseMessage response = client.GetAsync(ConfigurationManager.AppSettings["APIURL"] + "?page=1&pagesize=50&order=asc&sort=creation&site=stackoverflow").Result;
        //            //if (response.IsSuccessStatusCode)
        //            //{
        //            //    jsonString = await response.Content.ReadAsStringAsync();
        //            //    //dynamic dynamicObject = JsonConvert.DeserializeObject(jsonString);
        //            //}
        //            return jsonString;
        //        }
        //        catch
        //        {
        //            return jsonString;
        //        }
        //    }
        //}
    }
}