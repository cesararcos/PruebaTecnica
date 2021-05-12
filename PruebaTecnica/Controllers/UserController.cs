using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PruebaTecnica.Models.Response;
using PruebaTecnica.Models.ViewModels;

namespace PruebaTecnica.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private Models.MyDBContext db;

        public UserController(Models.MyDBContext context)
        {
            db = context;
        }

        [HttpPost("[action]")]
        public MyResponse Add([FromBody]MessageViewModel model)
        {
            MyResponse oR = new MyResponse();
            //var result = db.User.Where(c => c.FirstName == "Cesar" & c.SurName == "Arcos").FirstOrDefault();

            try
            {
                Models.User oMessage = new Models.User();
                oMessage.FirstName = model.FirstName;
                oMessage.SurName = model.SurName;
                oMessage.Identification = model.Identification;
                oMessage.Password = model.Password;
                oMessage.Email = model.Email;
                db.User.Add(oMessage);
                db.SaveChanges();
                oR.Success = 1;
            }
            catch (Exception ex)
            {
                oR.Success = 0;
                oR.Message = ex.Message;
            }
            return oR;
        }

        [HttpPost("[action]")]
        public MyResponse Login([FromBody]MessageViewModel model)
        {
            MyResponse oR = new MyResponse();

            try
            {
                var result = db.User.Where(c => c.Identification == model.User & c.Password == model.Password).FirstOrDefault();

                if (result != null)
                {
                    oR.Success = 1;
                }
                else
                {
                    oR.Success = 0;
                }
                
                
            }
            catch (Exception ex)
            {
                oR.Success = 0;
                oR.Message = ex.Message;
            }
            return oR;
        }
    }
}