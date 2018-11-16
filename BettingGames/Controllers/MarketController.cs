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
    public class MarketController : Controller
    {

        private readonly AppDBContext _context;

        public MarketController(AppDBContext context)
        {
            _context = context;
        }


        // GET api/values
        [HttpGet]
        public async Task<List<Market>> GetAll()
        { 
            var list = await _context.Markets.FromSql("[dbo].[SelectMarkets]").ToListAsync();
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<Market> Get(int id)
        {
            var ID = new SqlParameter("@ID", id);
            return await _context.Markets.FromSql("SelectMarketbyID @ID", ID).FirstOrDefaultAsync();
        }

        // POST api/values
        [HttpPost]
        public async Task<Market> Post([FromBody] Market market)
        {
            var OddOne = new SqlParameter("@OddOne", market.OddOne);
            var OddTwo = new SqlParameter("@OddTwo", market.OddTwo);
            var Draw = new SqlParameter("@Draw", market.Draw);
            var BID = new SqlParameter("@BID", market.BetID);


            var Added = await _context.Markets.FromSql("InsertMarket  @OddOne, @OddTwo, @Draw, @BID",  OddOne, OddTwo, Draw, BID).FirstOrDefaultAsync();

            return Added;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<List<Market>> Put(int id, [FromBody] Market market)
        {
            var ID = new SqlParameter("@ID", id);
            var OddOne = new SqlParameter("@OddOne", market.OddOne);
            var OddTwo = new SqlParameter("@OddTwo", market.OddTwo);
            var Draw = new SqlParameter("@Draw", market.Draw);

            var Edit = await _context.Markets.FromSql("UpdateMarket @ID, @OddOne, @OddTwo, @Draw", ID, OddOne, OddTwo, Draw).ToListAsync();

            return Edit;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<List<Market>> Delete(int id)
        {
            Market market = await Get(id);
            var ID = new SqlParameter("@ID", market.id);

            var Deleted = await _context.Markets.FromSql("DeleteMarket @ID", ID).ToListAsync();

            return Deleted;
        }
    }
}
