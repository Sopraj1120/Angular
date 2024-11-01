using System.ComponentModel.DataAnnotations;

namespace Task_Manege.Model
{
  public class User
  {
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string mobile { get; set; }
   public Address? Address { get; set; }
   

    public ICollection<TaskItem>? Tasks { get; set; }
  }
}
