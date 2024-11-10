using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Task_Manege.IRepository;
using Task_Manege.IService;
using Task_Manege.Model;

namespace Task_Manege.Service
{
  public class UserLoginService : IUserService
  {
    private readonly IUserLogin _userLogin;
    private readonly IConfiguration _configuration;

    public UserLoginService(IUserLogin userLogin, IConfiguration configuration)
    {
      _userLogin = userLogin;
      _configuration = configuration;
    }

    public async Task<TokenModal> Register(UserRes userRes)
    {
      var user = new UserLogin
      {
        Name = userRes.name,
        Email = userRes.email,
        HashPassword = BCrypt.Net.BCrypt.HashPassword(userRes.password),
        Role = userRes.Role,
      };

      var data = await _userLogin.AddUser(user);
      

      return CreateToken();
    }

    public async Task<TokenModal> Loginuser(loginuserDto loginuser)
    {
      
      var user = await _userLogin.LoginUser(loginuser.email);

      if (user == null || !BCrypt.Net.BCrypt.Verify(loginuser.password, user.HashPassword))
      {
       
        return null;
      }


      return CreateToken();
    }



    private TokenModal CreateToken()
    {
      var key = _configuration["Jwt:Key"];
      var secKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key));

      var crediatial = new SigningCredentials(secKey, SecurityAlgorithms.HmacSha256);

      var token = new JwtSecurityToken(
        issuer: _configuration["Jwt:Issuer"],
        audience: _configuration["Jwt:Audience"],
        expires: DateTime.UtcNow.AddDays(1),
        signingCredentials: crediatial);

      var tokenStr = new JwtSecurityTokenHandler().WriteToken(token);

      var res = new TokenModal();

      res.Token = tokenStr;

      return res;
    }
  }
}
