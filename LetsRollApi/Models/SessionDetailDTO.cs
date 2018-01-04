using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LetsRollApi.Models
{
    public class SessionDetailDTO
    {
        public int Id { get; set; }
        public string Location { get; set; }
        public DateTime Date { get; set; }
        public string GameName { get; set; }
    }
}