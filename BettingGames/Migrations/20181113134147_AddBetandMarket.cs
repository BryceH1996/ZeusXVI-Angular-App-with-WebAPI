using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace BettingGames.Migrations
{
    public partial class AddBetandMarket : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CountryName",
                table: "Tournaments",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SportName",
                table: "Tournaments",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CountryName",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SportName",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TournamentName",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SportName",
                table: "Countries",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "BetTypes",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BetName = table.Column<string>(nullable: true),
                    EventID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BetTypes", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Markets",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BetID = table.Column<int>(nullable: false),
                    MarketName = table.Column<string>(nullable: true),
                    Odds = table.Column<decimal>(nullable: false),
                    Stake = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Markets", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BetTypes");

            migrationBuilder.DropTable(
                name: "Markets");

            migrationBuilder.DropColumn(
                name: "CountryName",
                table: "Tournaments");

            migrationBuilder.DropColumn(
                name: "SportName",
                table: "Tournaments");

            migrationBuilder.DropColumn(
                name: "CountryName",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "SportName",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "TournamentName",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "SportName",
                table: "Countries");
        }
    }
}
