using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PruebaTecnica.Models.ViewModels
{
    public class MessageViewModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public string TypeIdentification { get; set; }
        public string Identification { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string User { get; set; }
    }
}
