using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace LetsRollApi.Models
{
    public class Game
    {
        public int Id { get; set; }
        [Required]
        public int MinPlayers { get; set; }
        public int MaxPlayers { get; set; }
        public int PlayTime { get; set; }
        public int Age { get; set; }

        // Foreign Key
        public int PublisherId { get; set; }
        // Navigation property
        public Publisher Publisher { get; set; }
    }
}