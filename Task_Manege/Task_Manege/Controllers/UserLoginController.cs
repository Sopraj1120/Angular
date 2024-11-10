using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Task_Manege.IService;
using Task_Manege.Model;

namespace Task_Manege.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserLoginController : ControllerBase
  {
    private readonly IUserService _userService;

    public UserLoginController(IUserService userService)
    {
      _userService = userService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> RegisterUser(UserRes user)
    {
      var data = await _userService.Register(user);

      return Ok(data);
    }

    [HttpPost("login")]

    public  async Task<IActionResult> LoginUser(loginuserDto loginuser)
    {
      var data = await _userService.Loginuser(loginuser);
      return Ok(data);
    }
  }
}
