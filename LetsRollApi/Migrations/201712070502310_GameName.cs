namespace LetsRollApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class GameName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Games", "Name", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Games", "Name");
        }
    }
}
