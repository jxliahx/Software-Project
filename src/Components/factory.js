
// set up
function Editor(username)
{
    this.username = username;
    this.type = "Editor";
}

// set up
function Viewer(username)
{
    this.username = username;
    this.type = "Viewer";
}

// create user factory; username and role
function UserFactory()
{
    this.create = (username, type) => {
        switch(type)
        {
            case 1:
                return new Editor(username);
                break;
            case 2:
                return new Viewer(username);
                break;
        }
    }
}

// do function
function setUser()
{
    // console log for now; set user's role
    console.log("Test for " + this.username + " who is a(n) " + this.type)
}

// set up
function EditorProject(projectName, username)
{
    this.projectName = projectName;
    this.type = "EditorProject";
    this.username = username;
}

// set up
function ViewerProject(projectName, username)
{
    this.projectName = projectName;
    this.type = "ViewerProject";
    this.username = username;
}

// create project factory; project name, username, user role
function ProjectFactory()
{
    this.create = (projectName, type, username) => {
        switch (type)
        {
        case 1:
            return new EditorProject(projectName, username);
            break;
        case 2:
            return new ViewerProject(projectName, username);
            break;
        }
    }
}

// do function
function newProject()
{
    // console log for now; create new project
    console.log(this.username + " is a(n) " + this.type + " who is a part of " + this.projectName)
}

// create factory, users array holds data for now
const userFactory = new UserFactory()
const users = []

// create factory, projects array holds data for now
const projectFactory = new ProjectFactory();
const projects = []

// pull users from database; temp test users for now
users.push(userFactory.create("User1", 1))
users.push(userFactory.create("User2", 2))

// console log for now; set user role
users.forEach( u => {
    setUser.call(u)
})

// create projects
projects.push(projectFactory.create("ProjectName1", 1, "Username1"))
projects.push(projectFactory.create("ProjectName2", 2, "Username2"))

// console log for now; create projects
projects.forEach( p => {
    newProject.call(p)
})