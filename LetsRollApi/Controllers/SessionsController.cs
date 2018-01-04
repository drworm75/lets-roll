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
    public class SessionsController : ApiController
    {
        private LetsRollApiContext db = new LetsRollApiContext();

        // GET: api/Sessions
        public IQueryable<SessionDTO> GetSessions()
        {
            var sessions = from s in db.Sessions
                        select new SessionDTO()
                        {
                            Id = s.Id,
                            Date = s.Date,
                            GameName = s.Game.Name
                        };

            return sessions;
        }

        // GET: api/Sessions/5
        [ResponseType(typeof(SessionDetailDTO))]
        public async Task<IHttpActionResult> GetSession(int id)
        {
            var session = await db.Sessions.Include(s => s.Game).Select(s =>
                new SessionDetailDTO()
                {
                    Id = s.Id,
                    Date = s.Date,
                    Location = s.Location,
                    GameName = s.Game.Name,
                }).SingleOrDefaultAsync(g => g.Id == id);
            if (session == null)
            {
                return NotFound();
            }

            return Ok(session);
        }

        // PUT: api/Sessions/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSession(int id, Session session)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != session.Id)
            {
                return BadRequest();
            }

            db.Entry(session).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SessionExists(id))
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

        // POST: api/Sessions
        [ResponseType(typeof(Session))]
        public async Task<IHttpActionResult> PostSession(Session session)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Sessions.Add(session);
            await db.SaveChangesAsync();

            db.Entry(session).Reference(x => x.Game).Load();

            var dto = new SessionDTO()
            {
                Id = session.Id,
                Date = session.Date,
                GameName = session.Game.Name
            };

            return CreatedAtRoute("DefaultApi", new { id = session.Id }, session);
        }

        // DELETE: api/Sessions/5
        [ResponseType(typeof(Session))]
        public async Task<IHttpActionResult> DeleteSession(int id)
        {
            Session session = await db.Sessions.FindAsync(id);
            if (session == null)
            {
                return NotFound();
            }

            db.Sessions.Remove(session);
            await db.SaveChangesAsync();

            return Ok(session);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SessionExists(int id)
        {
            return db.Sessions.Count(e => e.Id == id) > 0;
        }
    }
}