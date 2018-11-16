using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BettingGames.Model
{
    public class User
    {
        public int id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public decimal Balance { get; set; }

    }
}
