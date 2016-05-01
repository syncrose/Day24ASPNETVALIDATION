using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Day24AspnetValid.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Day24AspnetValid.API
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        ApplicationDbContext _db;

        public MoviesController(ApplicationDbContext db)
        {
            this._db = db;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            var movies = _db.Movies.ToList();
            return movies;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            if (ModelState.IsValid)
            {
                _db.Movies.Add(value);
                _db.SaveChanges();
                return Ok();
            }
            return HttpBadRequest(ModelState);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
