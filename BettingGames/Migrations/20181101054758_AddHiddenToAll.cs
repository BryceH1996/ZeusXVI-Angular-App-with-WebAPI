using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace BettingGames.Migrations
{
    public partial class AddHiddenToAll : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isHidden",
                table: "Tournaments",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "isHidden",
                table: "Events",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "isHidden",
                table: "Countries",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isHidden",
                table: "Tournaments");

            migrationBuilder.DropColumn(
                name: "isHidden",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "isHidden",
                table: "Countries");
        }
    }
}
