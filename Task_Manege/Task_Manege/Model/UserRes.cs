using System.Diagnostics.Contracts;

namespace Task_Manege.Model
{
  public class UserRes
  {
    public string name { get; set; }
    public string email { get; set; }
    public string password { get; set; }

    public string ConfrimPassword { get; set; }
 
    public Role Role { get; set; }

  }
}
