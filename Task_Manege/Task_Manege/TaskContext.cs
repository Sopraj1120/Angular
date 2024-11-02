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
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<User>()
        .HasOne(u => u.Address)
        .WithOne(a => a.User)
        .HasForeignKey<Address>(u => u.UserId);

      modelBuilder.Entity<User>()
        .HasMany(u=> u.Tasks)
        .WithOne(t => t.Users)
        .HasForeignKey(u => u.UserId);

      modelBuilder.Entity<TaskItem>()
        .HasMany(c => c.Checks)
        .WithOne(t => t.Task)
        .HasForeignKey(t => t.TaskId);
        
        

      base.OnModelCreating(modelBuilder);
    }
  }
}
