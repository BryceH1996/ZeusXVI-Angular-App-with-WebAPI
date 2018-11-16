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
    public class SportController : Controller
    {

        private readonly AppDBContext _context;

        public SportController(AppDBContext context)
        {
            _context = context;
        }


        // GET api/values
        [HttpGet]
        public async Task<List<Sport>> GetAll()
        {
            var list = await _context.Sports.FromSql("[dbo].[SelectSports]").ToListAsync();
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<Sport> Get(int id)
        {
            var ID = new SqlParameter("@ID", id);
            return await _context.Sports.FromSql("SelectSportbyID @ID", ID).FirstOrDefaultAsync();
        }

        // POST api/values
        [HttpPost]
        public async Task<Sport> Post([FromBody]Sport sport)
        {
            var Name = new SqlParameter("@name", sport.SportName);
            var Added = await _context.Sports.FromSql("InsertSport @name", Name).FirstOrDefaultAsync();

            return Added;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<List<Sport>> Put(int id, [FromBody]Sport sport)
        {
            var ID = new SqlParameter("@ID", id);
            var Name = new SqlParameter("@name", sport.SportName);

            var Edit = await _context.Sports.FromSql("UpdateSport @ID, @name", ID, Name).ToListAsync();

            return Edit;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<List<Sport>> Delete(int id)
        {
            Sport sport = await Get(id);
            var ID = new SqlParameter("@ID", sport.ID);

            var Deleted = await _context.Sports.FromSql("DeleteSport @ID", ID).ToListAsync();

            return Deleted;
        }
    }
}
