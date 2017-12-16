namespace LetsRollApi.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using LetsRollApi.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<LetsRollApi.Models.LetsRollApiContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(LetsRollApi.Models.LetsRollApiContext context)
        {
            // protected override void Seed(BookService.Models.BookServiceContext context)

            context.Sessions.AddOrUpdate(x => x.Id,
                new Session()
                {
                    Id = 1,
                    Location = "Game Point",
                    Date = new DateTime(2017, 11, 28),
                    GameId = 1
                }
            );

            context.Players.AddOrUpdate(x => x.Id,
                new Player()
                {
                    Id = 1,
                    PlayerName = "Dwayne",
                },
                new Player()
                {
                    Id = 2,
                    PlayerName = "Brooke",
                },
                new Player()
                {
                    Id = 3,
                    PlayerName = "Reece",
                }

            );

            context.PlayerSessions.AddOrUpdate(x => x.Id,
                new PlayerSession()
                {
                    Id = 1,
                    Score = 10,
                    Win = true,
                    PlayerId = 1,
                    SessionId = 1
                },
                new PlayerSession()
                {
                    Id = 2,
                    Score = 8,
                    Win = false,
                    PlayerId = 2,
                    SessionId = 1
                },
                new PlayerSession()
                {
                    Id = 3,
                    Score = 6,
                    Win = false,
                    PlayerId = 3,
                    SessionId = 1
                }
            );


            context.Publishers.AddOrUpdate(x => x.Id,
                new Publisher() { Id = 1, Name = "Mayfair Games" },
                new Publisher() { Id = 2, Name = "Rio Grande Games" },
                new Publisher() { Id = 3, Name = "Fantasy Flight Games" }
                );

            context.Games.AddOrUpdate(x => x.Id,
                new Game()
                {
                    Id = 1,
                    Name = "Settlers of Catan",
                    MinPlayers = 3,
                    MaxPlayers = 4,
                    PlayTime = 90,
                    Age = 12,
                    PublisherId = 1
                },
                new Game()
                {
                    Id = 2,
                    Name = "Carcassonne",
                    MinPlayers = 2,
                    MaxPlayers = 5,
                    PlayTime = 60,
                    Age = 10,
                    PublisherId = 2
                },
                new Game()
                {
                    Id = 3,
                    Name = "Battlestar Galactica",
                    MinPlayers = 3,
                    MaxPlayers = 6,
                    PlayTime = 240,
                    Age = 14,
                    PublisherId = 3
                }
            );
        }
        //  This method will be called after migrating to the latest version.

        //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
        //  to avoid creating duplicate seed data. E.g.
        //
        //    context.People.AddOrUpdate(
        //      p => p.FullName,
        //      new Person { FullName = "Andrew Peters" },
        //      new Person { FullName = "Brice Lambson" },
        //      new Person { FullName = "Rowan Miller" }
        //    );
        //
    }
}

