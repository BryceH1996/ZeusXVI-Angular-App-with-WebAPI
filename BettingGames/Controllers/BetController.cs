using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using BettingGames.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BettingGames.Controllers
{
    [Route("api/[controller]")]
    public class BetController : Controller
    {

        private readonly AppDBContext _context;

        public BetController(AppDBContext context)
        {
            _context = context;
        }


        // GET api/values
        [HttpGet]
        public async Task<List<Bet>> GetAll()
        { 
            var list = await _context.Bets.FromSql("[dbo].[SelectBet]").ToListAsync();
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<Bet> Get(int id)
        {
            var ID = new SqlParameter("@ID", id);
            return await _context.Bets.FromSql("SelectBetbyID @ID", ID).FirstOrDefaultAsync();
        }

        // POST api/values
        [HttpPost]
        public async Task<Bet> Post([FromBody] Bet bet)
        {
            var amount = new SqlParameter("@amount", bet.amount);
            var UID = new SqlParameter("@UID", bet.UserID);
            var EID = new SqlParameter("@EID", bet.EventID);
            var MID = new SqlParameter("@MID", bet.MarketID);

            var Added = await _context.Bets.FromSql("InsertBet @amount, @UID, @EID ,@MID", amount, UID, EID, MID).FirstOrDefaultAsync();

            return Added;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<List<Bet>> Put(int id, [FromBody] Bet bet)
        {
            var ID = new SqlParameter("@ID", id);
            var amount = new SqlParameter("@amount", bet.amount);

            var Edit = await _context.Bets.FromSql("UpdateBet @ID, @amount", ID, amount).ToListAsync();

            return Edit;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<List<Bet>> Delete(int id)
        {
            Bet bet = await Get(id);
            var ID = new SqlParameter("@ID", bet.id);

            var Deleted = await _context.Bets.FromSql("DeleteBet @ID", ID).ToListAsync();

            return Deleted;
        }
    }
}
