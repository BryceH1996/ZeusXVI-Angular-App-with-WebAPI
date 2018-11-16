using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BettingGames
{
    public class Tournament
    {
        public int ID { get; set; }

        [Required]
        public string TournamentName { get; set; }

        [Required]
        public bool isHidden { get; set; }

        [ForeignKey("Sport")]
        public int SportID { get; set; }

        [ForeignKey("Country")]
        public int CountryID { get; set; }

        public string SportName { get; set; }
        public string CountryName { get; set; }
    }
}
