using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BettingGames.Model
{
    public class BetType
    {
        public int id { get; set; }
        public string BetName { get; set; }
        [ForeignKey("Event")]
        public int EventID { get; set; }
        public string EventName { get; set; }
    }
}
