namespace LetsRollApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PlayerSessions : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Players", "SessionId", "dbo.Sessions");
            DropIndex("dbo.Players", new[] { "SessionId" });
            DropColumn("dbo.Players", "Score");
            DropColumn("dbo.Players", "Win");
            DropColumn("dbo.Players", "SessionId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Players", "SessionId", c => c.Int(nullable: false));
            AddColumn("dbo.Players", "Win", c => c.Boolean(nullable: false));
            AddColumn("dbo.Players", "Score", c => c.Int(nullable: false));
            CreateIndex("dbo.Players", "SessionId");
            AddForeignKey("dbo.Players", "SessionId", "dbo.Sessions", "Id", cascadeDelete: true);
        }
    }
}
