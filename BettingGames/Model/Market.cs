using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BettingGames.Model
{
    public class Market
    {
        public int id { get; set; }
        public decimal OddOne { get; set; }
        public decimal OddTwo { get; set; }
        public decimal Draw { get; set; }
        [ForeignKey("BetType")]
        public int BetID { get; set; }
        public string BetName { get; set; }
    }
}
