let projectComitments = model.pagesContent.projectPage;
getProjectData();
async function addProjectInput() {
    const title = model.pagesContent.projectInput.title;
    const description = model.pagesContent.projectInput.description;
    const link = model.pagesContent.projectInput.link;

    model.pagesContent.projectPage.push({
        title: `${title}`,
        description: `${description} `,
        link: `${link}`,

    })
    addProjectToPage();
}
async function addProjectToPage() {
  
    const projectObject = {
        title: model.pagesContent.projectInput.title,
        description: model.pagesContent.projectInput.description,
        link: model.pagesContent.projectInput.link,

    };
    const response = await axios.post('/api/projects',  projectObject );
  
    projectComitments = response.data;
    await getProjectData();

}

async function getProjectData() {
  
    const response = await axios.get('/api/projects');
    projectComitments = response.data;
    console.table(projectComitments);

    model.pagesContent.projectPage = response.data.projects;

    addProjects(); //er til admin siden
    projectView(); //er til den hoved siden
   
}