using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace Day24AspnetValid.Models
{
    public class SampleData
    {
        public static void Initialize(IServiceProvider sp)
        {
            var db = sp.GetService<ApplicationDbContext>();

            if (!db.Movies.Any())
            {
                var Movies = new Movie[]
                {
                    new Movie {Title = "Spectre", Year = 2015 },
                    new Movie {Title = "Interstellar", Year = 2015},
                    new Movie {Title = "Aliens", Year = 1991 }
                };
                db.Movies.AddRange(Movies);
                db.SaveChanges();
            }
        }
    }
}
