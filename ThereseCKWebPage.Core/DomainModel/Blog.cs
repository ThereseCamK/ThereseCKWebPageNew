using System;
using System.Collections.Generic;
using System.Text;

namespace ThereseCKWebPage.Core.DomainModel
{
    public class Blog
    {
        public string HeadLine { get; set; }
        public string BlogContent { get; set; }
        public object Picture { get; set; }
        public DateTime PublishedDate { get; set; }

        public Blog()
        {

        }

        public Blog(string headLine, string blogContent, object picture, DateTime publishedDate)
        {
            HeadLine = headLine;
            BlogContent = blogContent;
            Picture = picture;
            PublishedDate = publishedDate;
        }
    }
}
