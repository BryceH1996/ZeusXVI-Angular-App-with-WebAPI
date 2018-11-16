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
    public class BetTypeController : Controller
    {

        private readonly AppDBContext _context;

        public BetTypeController(AppDBContext context)
        {
            _context = context;
        }


        // GET api/values
        [HttpGet]
        public async Task<List<BetType>> GetAll()
        { 
            var list = await _context.BetTypes.FromSql("[dbo].[SelectBetType]").ToListAsync();
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<BetType> Get(int id)
        {
            var ID = new SqlParameter("@ID", id);
            var Bet = await _context.BetTypes.FromSql("SelectBetTypebyID @ID", ID).FirstOrDefaultAsync();
            return Bet;
        }

        // POST api/values
        [HttpPost]
        public async Task<BetType> Post([FromBody] BetType betType)
        {
            var Name = new SqlParameter("@name", betType.BetName);
            var EID = new SqlParameter("@EID", betType.EventID);

            var Added = await _context.BetTypes.FromSql("InsertBetType @name, @EID", Name, EID).FirstOrDefaultAsync();

            return Added;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<List<BetType>> Put(int id, [FromBody] BetType betType)
        {
            var ID = new SqlParameter("@ID", id);
            var Name = new SqlParameter("@name", betType.BetName);

            var Edit = await _context.BetTypes.FromSql("UpdateBetType @ID, @name", ID, Name).ToListAsync();

            return Edit;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<List<BetType>> Delete(int id)
        {
            BetType betType = await Get(id);
            var ID = new SqlParameter("@ID", betType.id);

            var Deleted = await _context.BetTypes.FromSql("DeleteBetType @ID", ID).ToListAsync();

            return Deleted;
        }
    }
}
