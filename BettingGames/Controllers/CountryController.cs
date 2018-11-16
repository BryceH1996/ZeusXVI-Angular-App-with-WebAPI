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
    public class CountryController : Controller
    {

        private readonly AppDBContext _context;

        public CountryController(AppDBContext context)
        {
            _context = context;
        }


        // GET api/values
        [HttpGet]
        public async Task<List<Country>> GetAll()
        {
            var list = await _context.Countries.FromSql("[dbo].[SelectCountries]").ToListAsync();
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<Country> Get(int id)
        {
            var ID = new SqlParameter("@ID", id);
            return await _context.Countries.FromSql("SelectCountrybyID @ID", ID).FirstOrDefaultAsync();
        }

        // POST api/values
        [HttpPost]
        public async Task<Country> Post([FromBody] Country country)
        {
            var Name = new SqlParameter("@name", country.CountryName);
            var FID = new SqlParameter("@FID", country.SportID);

            var Added = await _context.Countries.FromSql("InsertCountry @name, @FID", Name, FID).FirstOrDefaultAsync();

            return Added;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<List<Country>> Put(int id, [FromBody] Country country)
        {
            var ID = new SqlParameter("@ID", id);
            var Name = new SqlParameter("@name", country.CountryName);

            var Edit = await _context.Countries.FromSql("UpdateCountry @ID, @name", ID, Name).ToListAsync();

            return Edit;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<List<Country>> Delete(int id)
        {
            Country country = await Get(id);
            var ID = new SqlParameter("@ID", country.ID);

            var Deleted = await _context.Countries.FromSql("DeleteCountry @ID", ID).ToListAsync();

            return Deleted;
        }
    }
}
