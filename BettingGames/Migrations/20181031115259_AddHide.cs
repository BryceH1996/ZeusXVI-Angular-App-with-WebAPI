using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace BettingGames.Migrations
{
    public partial class AddHide : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Countries_Sports_SportID",
                table: "Countries");

            migrationBuilder.DropForeignKey(
                name: "FK_Events_Tournaments_TournamentID",
                table: "Events");

            migrationBuilder.DropForeignKey(
                name: "FK_Tournaments_Countries_CountryID",
                table: "Tournaments");

            migrationBuilder.DropIndex(
                name: "IX_Tournaments_CountryID",
                table: "Tournaments");

            migrationBuilder.DropIndex(
                name: "IX_Events_TournamentID",
                table: "Events");

            migrationBuilder.DropIndex(
                name: "IX_Countries_SportID",
                table: "Countries");

            migrationBuilder.AddColumn<bool>(
                name: "isHidden",
                table: "Sports",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isHidden",
                table: "Sports");

            migrationBuilder.CreateIndex(
                name: "IX_Tournaments_CountryID",
                table: "Tournaments",
                column: "CountryID");

            migrationBuilder.CreateIndex(
                name: "IX_Events_TournamentID",
                table: "Events",
                column: "TournamentID");

            migrationBuilder.CreateIndex(
                name: "IX_Countries_SportID",
                table: "Countries",
                column: "SportID");

            migrationBuilder.AddForeignKey(
                name: "FK_Countries_Sports_SportID",
                table: "Countries",
                column: "SportID",
                principalTable: "Sports",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Tournaments_TournamentID",
                table: "Events",
                column: "TournamentID",
                principalTable: "Tournaments",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tournaments_Countries_CountryID",
                table: "Tournaments",
                column: "CountryID",
                principalTable: "Countries",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
