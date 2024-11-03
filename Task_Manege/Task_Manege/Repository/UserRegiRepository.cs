using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Drawing.Imaging;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Task_Manege.IRepository;
using Task_Manege.Model;

namespace Task_Manege.Repository
{
  public class UserRegiRepository : IUserLogin
  {
    private readonly TaskContext _taskContext;
   

    public UserRegiRepository(TaskContext taskContext)
    {
      _taskContext = taskContext;
    }

    public async Task<UserLogin> AddUser(UserLogin userLogin)
    {
      var data = await _taskContext.UsersLogin.AddAsync(userLogin);
      await _taskContext.SaveChangesAsync();
      return data.Entity;
    }

    public async Task<UserLogin> LoginUser(string email)
    {
    
      var data  = await _taskContext.UsersLogin.FirstOrDefaultAsync(a => a.Email == email);

      if (data == null)
      {
        throw new Exception("User Not Found!");
      }

      return data;
    }

    
  }
}
