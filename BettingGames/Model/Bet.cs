using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BettingGames.Model
{
    public class Bet
    {
        public int id { get; set; }
        public decimal amount { get; set; }

        [ForeignKey("User")]
        public int UserID { get; set; }
        public string UserName { get; set; }

        [ForeignKey("Event")]
        public int EventID { get; set; }
        public string EventName { get; set; }

        public string BetName { get; set; }

        [ForeignKey("Market")]
        public int MarketID { get; set; }

    }
}
