using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using BettingGames.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BettingGames.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {

        private readonly AppDBContext _context;

        public UserController(AppDBContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public async Task<List<User>> GetAll()

        {
            var list = await _context.Users.FromSql("[dbo].[SelectUser]").ToListAsync();
            return list;
        }

        // GET api/values/5
        [HttpGet("{username},{password}")]
        public async Task<User> Get(string username, string password)
        {

            password = SecurePass.Encode_Decode.Encrypt(password);

            var user = new SqlParameter("@user", username);
            var pass = new SqlParameter("@pass", password);

            var account = await _context.Users.FromSql("SelectUserByID @user, @pass", user, pass).FirstOrDefaultAsync();
            return account;
        }

        // POST api/values
        [HttpPost]
        public async Task<User> Post([FromBody]User user)
        {
            var Name = new SqlParameter("@name", user.UserName);
            var Pass = new SqlParameter("@Pass", SecurePass.Encode_Decode.Encrypt(user.Password));

            var list = await _context.Users.FromSql("[dbo].[SelectUser]").ToListAsync();

            foreach (var users in list)
            {
                if (users.UserName == user.UserName)
                {
                    throw new HttpListenerException(500);
                }
            }

            var Added = await _context.Users.FromSql("InsertUser @name, @Pass", Name, Pass).FirstOrDefaultAsync();

            return Added;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<List<User>> Put(int id, [FromBody]User user)
        {
            var ID = new SqlParameter("@ID", id);
            var Bal = new SqlParameter("@bal", user.Balance);
            
            var Edit = await _context.Users.FromSql("UpdateUser @ID, @bal", ID, Bal).ToListAsync();

            return Edit;
        }
    }
}
