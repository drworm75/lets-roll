using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;


namespace LetsRollApi.Models
{
    public class Session
    {
        public int Id { get; set; }
        [Required]
        public string Location { get; set; }
        public DateTime Date { get; set; }

        //Foreign Key
        public int GameId { get; set; }
        //Navigation Property
        public Game Game { get; set; }

        //Foreign Key
        //public int UserId { get; set; }
        //Navigation Property
        //public User User { get; set; }


    }
}