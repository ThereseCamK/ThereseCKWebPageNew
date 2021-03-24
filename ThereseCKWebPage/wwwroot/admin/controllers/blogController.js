let blogComitments = model.pagesContent.blogPage;
getBlogData();
async function addNewBlog() {
    const headLine = model.pagesContent.blogInput.headLine;
    const blogContent = model.pagesContent.blogInput.content;
    const picture = model.pagesContent.blogInput.picture;
    const publishedDate = model.pagesContent.blogInput.date;

    model.pagesContent.blogPage.push({
        HeadLine: `${headLine}`,
        BlogContent: `${blogContent}`,
        Picture: `${picture}`,
        PublisedDate: `${publishedDate}`
    })
    addBlog();

}
async function addBlog() {
  
    const blogObj = {

        headLine: model.pagesContent.blogInput.headLine,
        blogContent: model.pagesContent.blogInput.content,
        picture: model.pagesContent.blogInput.picture,
        publishedDate: model.pagesContent.blogInput.date,

    };
    const response = await axios.post('/api/blog', blogObj);
    //blogComitments.push({ response });
    blogComitments = response.data;
    //console.log(blogComitments);
    await getBlogData();
   

}
async function getBlogData() {
 
    const response = await axios.get('/api/blog');
    blogComitments = response.data;
    console.table(blogComitments);

    model.pagesContent.blogPage = response.data.blogs;

    addBlogCommitment(); //til admin siden
    blogPage(); //til hovedsiden

}