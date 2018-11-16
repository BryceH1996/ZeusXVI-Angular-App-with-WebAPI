using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BettingGames
{
    public class Country
    {
        public int ID { get; set; }
        [Required]
        public string CountryName { get; set; }

        [Required]
        public bool isHidden { get; set; }

        [ForeignKey("Sport")]
        public int SportID { get; set; }
        public string SportName { get; set; }
    }
}
