using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task_Manege.Model;

namespace Task_Manege.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UseloginController : ControllerBase
  {
    private readonly TaskContext _taskContext;

    public UseloginController(TaskContext taskContext)
    {
      _taskContext = taskContext;
    }

    [HttpPost("create_user")]

    public async Task<IActionResult> AddUser(UserRes userRes)
    {
      try
      {
        var data = new UserLogin
        {
          Id = Guid.NewGuid(),
          Name = userRes.name,
          Email = userRes.email,
          HashPassword = BCrypt.Net.BCrypt.HashPassword(userRes.password)
        };

        var customer = await _taskContext.AddAsync(data);

        var res = new UserRes
        {
          name = customer.Entity.Name,
          email = customer.Entity.Email,
          password = customer.Entity.HashPassword,
        };

        await _taskContext.SaveChangesAsync();
        return Ok(res);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    [HttpPost("login_user")]

    public async Task<IActionResult> LoginUser(string name, string password)
    {
      try
      {
        var data = await _taskContext.UsersLogin.FirstOrDefaultAsync(u => u.Name == name);

        if (data == null)
        {
          return Ok("User Not fount!.");
        }

        var IsLogin = BCrypt.Net.BCrypt.Verify(password, data.HashPassword);

        if (IsLogin)
        {
          return Ok("Login SuccessFully!");
        }

        return BadRequest("password Not Match!");



      }

      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
  }
}
