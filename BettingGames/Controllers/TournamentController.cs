using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BettingGames.Controllers
{
    [Route("api/[controller]")]
    public class TournamentController : Controller
    {

        private readonly AppDBContext _context;

        public TournamentController(AppDBContext context)
        {
            _context = context;
        }


        // GET api/values
        [HttpGet]
        public async Task<List<Tournament>> GetAll()
        { 
            var list = await _context.Tournaments.FromSql("[dbo].[SelectTournaments]").ToListAsync();
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<Tournament> Get(int id)
        {
            var ID = new SqlParameter("@ID", id);
            return await _context.Tournaments.FromSql("SelectTournamentbyID @ID", ID).FirstOrDefaultAsync();
        }

        // POST api/values
        [HttpPost]
        public async Task<Tournament> Post([FromBody] Tournament tournament)
        {
            var Name = new SqlParameter("@name", tournament.TournamentName);
            var SID = new SqlParameter("@SID", tournament.SportID);
            var CID = new SqlParameter("@CID", tournament.CountryID);

            var Added = await _context.Tournaments.FromSql("InsertTournament @name, @SID, @CID", Name, SID, CID).FirstOrDefaultAsync();

            return Added;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<List<Tournament>> Put(int id, [FromBody] Tournament tournament)
        {
            var ID = new SqlParameter("@ID", id);
            var Name = new SqlParameter("@name", tournament.TournamentName);

            var Edit = await _context.Tournaments.FromSql("UpdateTournament @ID, @name", ID, Name).ToListAsync();

            return Edit;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<List<Tournament>> Delete(int id)
        {
            Tournament tournament = await Get(id);
            var ID = new SqlParameter("@ID", tournament.ID);

            var Deleted = await _context.Tournaments.FromSql("DeleteTournament @ID", ID).ToListAsync();

            return Deleted;
        }
    }
}
