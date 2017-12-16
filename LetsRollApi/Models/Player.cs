using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LetsRollApi.Models
{
    public class Player
    {   
        public int Id { get; set; }
        public string PlayerName { get; set; }

        // Foreign Key
        //public int UserId { get; set; }
        // Navigation property
        //public User User { get; set; }

    }
}