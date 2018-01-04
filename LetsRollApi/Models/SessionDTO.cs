using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LetsRollApi.Models
{
    public class SessionDTO
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string GameName { get; set; }
    }
}