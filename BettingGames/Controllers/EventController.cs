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
    public class EventController : Controller
    {

        private readonly AppDBContext _context;

        public EventController(AppDBContext context)
        {
            _context = context;
        }


        // GET api/values
        [HttpGet]
        public async Task<List<Event>> GetAll()
        { 
            var list = await _context.Events.FromSql("[dbo].[SelectEvents]").ToListAsync();
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<Event> Get(int id)
        {
            var ID = new SqlParameter("@ID", id);
            var evnt = await _context.Events.FromSql("SelectEventbyID @ID", ID).FirstOrDefaultAsync();
            return evnt;
        }

        // POST api/values
        [HttpPost]
        public async Task<Event> Post([FromBody] Event events)
        {
            var Name = new SqlParameter("@name", events.EventName);
            var SID = new SqlParameter("@SID", events.SportID);
            var CID = new SqlParameter("@CID", events.CountryID);
            var TID = new SqlParameter("@TID", events.TournamentID);
            var Date = new SqlParameter("@Date", events.Date);


            var Added = await _context.Events.FromSql("InsertEvent @name, @SID, @CID, @TID, @Date", Name, SID, CID, TID, Date).FirstOrDefaultAsync();

            return Added;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<List<Event>> Put(int id, [FromBody] Event events)
        {
            var ID = new SqlParameter("@ID", id);
            var Name = new SqlParameter("@name", events.EventName);

            var Edit = await _context.Events.FromSql("UpdateEvent @ID, @name", ID, Name).ToListAsync();

            return Edit;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<List<Event>> Delete(int id)
        {
            Event evnt = await Get(id);
            var ID = new SqlParameter("@ID", evnt.ID);

            var Deleted = await _context.Events.FromSql("DeleteEvent @ID", ID).ToListAsync();

            return Deleted;
        }
    }
}
