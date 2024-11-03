using Task_Manege.Model;

namespace Task_Manege.IService
{
  public interface IUserService
  {
    Task<TokenModal> Register(UserRes userRes);
    Task<TokenModal> Loginuser(string email, string password);
  }
}
