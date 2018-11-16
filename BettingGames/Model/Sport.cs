using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BettingGames
{
    public class Sport
    {
        public int ID { get; set; }
        [Required]
        public string SportName { get; set; }
        [Required]
        public bool isHidden { get; set; }
    }
}
