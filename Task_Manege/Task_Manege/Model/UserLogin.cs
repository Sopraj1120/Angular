namespace Task_Manege.Model
{
  public class UserLogin
  {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string HashPassword { get; set; }
    public string Email { get; set; }
   
  }
}