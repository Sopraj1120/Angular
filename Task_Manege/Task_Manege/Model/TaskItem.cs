using System.ComponentModel.DataAnnotations;

namespace Task_Manege.Model
{
  public class TaskItem
  {
    [Key]
    public int Id { get; set; }
    [Required]
    public string Title { get; set; }

    public string Description { get; set; }
    public DateTime DueDate { get; set; }
    [Required]
    public string Priority { get; set; }

    public int? UserId {  get; set; }

    public User? Users { get; set; }

    public ICollection<CheckList>? Checks { get; set; }

  }
}
