using Microsoft.EntityFrameworkCore;
using Task_Manege.Model;

namespace Task_Manege
{
  public class TaskContext : DbContext
  {
    public TaskContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<TaskItem> Tasks { get; set; }
  }
}
