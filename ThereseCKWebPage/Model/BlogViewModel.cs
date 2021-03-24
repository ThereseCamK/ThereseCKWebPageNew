using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThereseCKWebPage.UserInterface.Model
{
    public class BlogViewModel
    {
        public string BlogContent { get; set; }

        public string HeadLine { get; set; }
        public object Picture { get; set; }
        public DateTime PublishedDate { get; set; }
    }
}
