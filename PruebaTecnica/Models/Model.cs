using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PruebaTecnica.Models
{
    public class MyDBContext : DbContext
    {
        public MyDBContext(DbContextOptions<MyDBContext> options) : base(options)
        {

        }
        public DbSet<User> User { get; set; }
        public DbSet<TypeIdentification> TypeIdentification { get; set; }
    }

    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public string TypeIdentification { get; set; }
        public string Identification { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }

    public class TypeIdentification
    {
        public int Id { get; set; }
        public string Description { get; set; }
    }
}
