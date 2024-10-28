using System.ComponentModel.DataAnnotations;

namespace Task_Manege.Model
{
  public class Address
  {
    [Key]
    public int Id { get; set; }
    public string Lane1 {  get; set; }
    public string? Lane2 { get; set; }

    public string? City { get; set; }
    public int? UserId { get; set; }
    public User? User { get; set; }

  }
}
