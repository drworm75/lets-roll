namespace LetsRollApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class databasesetup : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Games",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        MinPlayers = c.Int(nullable: false),
                        MaxPlayers = c.Int(nullable: false),
                        PlayTime = c.Int(nullable: false),
                        Age = c.Int(nullable: false),
                        PublisherId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Publishers", t => t.PublisherId, cascadeDelete: true)
                .Index(t => t.PublisherId);
            
            CreateTable(
                "dbo.Publishers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Players",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PlayerName = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.PlayerSessions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Score = c.Int(nullable: false),
                        Win = c.Boolean(nullable: false),
                        PlayerId = c.Int(nullable: false),
                        SessionId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Players", t => t.PlayerId, cascadeDelete: true)
                .ForeignKey("dbo.Sessions", t => t.SessionId, cascadeDelete: true)
                .Index(t => t.PlayerId)
                .Index(t => t.SessionId);
            
            CreateTable(
                "dbo.Sessions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Location = c.String(nullable: false),
                        Date = c.DateTime(nullable: false),
                        GameId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Games", t => t.GameId, cascadeDelete: true)
                .Index(t => t.GameId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PlayerSessions", "SessionId", "dbo.Sessions");
            DropForeignKey("dbo.Sessions", "GameId", "dbo.Games");
            DropForeignKey("dbo.PlayerSessions", "PlayerId", "dbo.Players");
            DropForeignKey("dbo.Games", "PublisherId", "dbo.Publishers");
            DropIndex("dbo.Sessions", new[] { "GameId" });
            DropIndex("dbo.PlayerSessions", new[] { "SessionId" });
            DropIndex("dbo.PlayerSessions", new[] { "PlayerId" });
            DropIndex("dbo.Games", new[] { "PublisherId" });
            DropTable("dbo.Sessions");
            DropTable("dbo.PlayerSessions");
            DropTable("dbo.Players");
            DropTable("dbo.Publishers");
            DropTable("dbo.Games");
        }
    }
}
