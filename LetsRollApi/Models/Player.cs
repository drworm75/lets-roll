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
        public int Score { get; set; }
        public bool Win { get; set; }

        // Foreign Key
        public int SessionId { get; set; }
        // Navigation property
        public Session Session { get; set; }

        // Foreign Key
        //public int UserId { get; set; }
        // Navigation property
        //public User User { get; set; }

    }
}