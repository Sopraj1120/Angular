
using Microsoft.EntityFrameworkCore;
using Task_Manege.IRepository;
using Task_Manege.IService;
using Task_Manege.Model;
using Task_Manege.Repository;
using Task_Manege.Service;

namespace Task_Manege
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var builder = WebApplication.CreateBuilder(args);

      // Add services to the container.

      builder.Services.AddControllers().AddJsonOptions(option => {
        option.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
        option.JsonSerializerOptions.DefaultIgnoreCondition= System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull;
        });
      // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
      builder.Services.AddEndpointsApiExplorer();
      builder.Services.AddSwaggerGen();

      builder.Services.AddDbContext<TaskContext>(opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("Connection")));


      builder.Services.AddScoped<IUserLogin, UserRegiRepository>();
      builder.Services.AddScoped<IUserService, UserLoginService>();

      builder.Services.AddCors(options =>
      {
        options.AddPolicy("AllowAllOrigins",
            builder =>
            {
              builder.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();

            });
      });



      var app = builder.Build();

      // Configure the HTTP request pipeline.
      if (app.Environment.IsDevelopment())
      {

        app.UseSwagger();
        app.UseSwaggerUI();
      }

      app.UseCors("AllowAllOrigins");

      app.UseHttpsRedirection();

      app.UseAuthorization();


      app.MapControllers();



      app.Run();
    }
  }
}
