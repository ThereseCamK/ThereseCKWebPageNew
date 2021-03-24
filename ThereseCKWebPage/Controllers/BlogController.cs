using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ThereseCKWebPage.Core.ApplicationService;
using ThereseCKWebPage.Core.DomainModel;
using ThereseCKWebPage.UserInterface.Model;

namespace ThereseCKWebPage.UserInterface.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly BlogService _blogService;

        public BlogController(BlogService blogService)
        {
            _blogService = blogService;
        }

        [HttpPost]
        public void Post(BlogViewModel blogView)
        {
            var addNew = new Blog(
                blogView.HeadLine,
                blogView.BlogContent,
                blogView.Picture,
                blogView.PublishedDate

                );
            _blogService.AddNewBlog(addNew);
        }

        [HttpGet]
        public ActionResult<BlogList> Get()
        {
            return _blogService.GetBlogs();
        }

    }
}
