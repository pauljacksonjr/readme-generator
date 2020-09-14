// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    # ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
    * [Questions] (#questions)
    * [Installation] (#installation)
    

    ## Installation
    ${data.installation}
  
  `;
  }
  
  module.exports = generateMarkdown;
  