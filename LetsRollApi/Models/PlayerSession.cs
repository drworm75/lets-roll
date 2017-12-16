using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LetsRollApi.Models
{
    public class PlayerSession
    {
        public int Id { get; set; }
        public int Score { get; set; }
        public bool Win { get; set; }

        // Foreign Key
        public int PlayerId { get; set; }
        // Navigation Property
        public Player Player { get; set; }

        // Foreign Key
        public int SessionId { get; set; }
        // Navigation Property
        public Session Session { get; set; }
    }
}