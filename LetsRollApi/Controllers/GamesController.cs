using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using LetsRollApi.Models;
using System.Web.Http.Cors;

namespace LetsRollApi.Controllers
{
    [EnableCors(origins: "http://localhost:8080", headers: "*", methods: "*")]
    public class GamesController : ApiController
    {
        private LetsRollApiContext db = new LetsRollApiContext();

        // GET: api/Games
        public IQueryable<GameDTO> GetGames()
        {
            var games = from g in db.Games
                        select new GameDTO()
                        {
                            Id = g.Id,
                            Name = g.Name,
                            PublisherName = g.Publisher.Name

                        };
            return games;
        }

        // GET: api/Games/5
        [ResponseType(typeof(GameDetailDTO))]
        public async Task<IHttpActionResult> GetGame(int id)
        {
            var game = await db.Games.Include(g => g.Publisher).Select(g => new GameDetailDTO()
            {
                Id = g.Id,
                Name = g.Name,
                MinPlayers = g.MinPlayers,
                MaxPlayers = g.MaxPlayers,
                PlayTime = g.PlayTime,
                Age = g.Age,
                PublisherName = g.Publisher.Name
            }).SingleOrDefaultAsync(b => b.Id == id);

            if (game == null)
            {
                return NotFound();
            }

            return Ok(game);
        }

        // PUT: api/Games/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutGame(int id, Game game)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != game.Id)
            {
                return BadRequest();
            }

            db.Entry(game).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Games
        [ResponseType(typeof(Game))]
        public async Task<IHttpActionResult> PostGame(Game game)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Games.Add(game);
            await db.SaveChangesAsync();

            db.Entry(game).Reference(x => x.Publisher).Load();

            var dto = new GameDetailDTO()
            {
                Id = game.Id,
                Name = game.Name,
                MinPlayers = game.MinPlayers,
                MaxPlayers = game.MaxPlayers,
                PlayTime = game.PlayTime,
                Age = game.Age,
                PublisherName = game.Publisher.Name
            };

            return CreatedAtRoute("DefaultApi", new { id = game.Id }, game);
        }

        // DELETE: api/Games/5
        [ResponseType(typeof(Game))]
        public async Task<IHttpActionResult> DeleteGame(int id)
        {
            Game game = await db.Games.FindAsync(id);
            if (game == null)
            {
                return NotFound();
            }

            db.Games.Remove(game);
            await db.SaveChangesAsync();

            return Ok(game);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GameExists(int id)
        {
            return db.Games.Count(e => e.Id == id) > 0;
        }
    }
}