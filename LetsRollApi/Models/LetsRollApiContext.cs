using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace LetsRollApi.Models
{
    public class LetsRollApiContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public LetsRollApiContext() : base("name=LetsRollApiContext")
        {
            this.Database.Log = s => System.Diagnostics.Debug.WriteLine(s);
        }

        public System.Data.Entity.DbSet<LetsRollApi.Models.Publisher> Publishers { get; set; }

        public System.Data.Entity.DbSet<LetsRollApi.Models.Game> Games { get; set; }

        public System.Data.Entity.DbSet<LetsRollApi.Models.Session> Sessions { get; set; }

        public System.Data.Entity.DbSet<LetsRollApi.Models.Player> Players { get; set; }

        public System.Data.Entity.DbSet<LetsRollApi.Models.PlayerSession> PlayerSessions { get; set; }
    }


}
