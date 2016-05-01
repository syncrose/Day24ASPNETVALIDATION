using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Day24AspnetValid.Models
{
    public class Movie
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="Bad request dummy")]
        public string Title { get; set; }
        [Range(1900, 3500, ErrorMessage ="Out of bounds")]
        public int Year { get; set; }
    }
}
