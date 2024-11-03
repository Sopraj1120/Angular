using Task_Manege.Model;

namespace Task_Manege.IRepository
{
  public interface IUserLogin
  {
    Task<UserLogin> AddUser(UserLogin userLogin);
    Task<UserLogin> LoginUser(string email);
  }
}
