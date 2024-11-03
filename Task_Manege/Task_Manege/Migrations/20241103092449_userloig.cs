using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Task_Manege.Migrations
{
    /// <inheritdoc />
    public partial class userloig : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Role",
                table: "UsersLogin",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Role",
                table: "UsersLogin");
        }
    }
}
