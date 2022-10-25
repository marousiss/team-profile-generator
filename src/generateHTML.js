function generateScript(data) {

    let generatedScript = `
    let rowEl = document.querySelector('.row');
    rowEl.innerHTML = '';`

    for (let i = 0; i < data.length; i++) {
        const { name, id, email, role, otherInfo } = data[i];
        const employeeInfo = createTeamCardAgain(name, id, email, role, otherInfo, i);
        generatedScript += employeeInfo;
    }

    return generatedScript;
}

function buildElement(role, otherInfo, i) {
    const infoEl = 'infoEl' + i;
    const githubLinkEl = 'githubLinkEl' + i;

    if (role === "Manager") {
        return `${infoEl}.textContent = "Office Number: " + "${otherInfo}";`;
    }

    if (role === "Engineer") {
        const gitlink = `https://github.com/${otherInfo}`;
        return `
        ${githubLinkEl}.setAttribute("href", "${gitlink}");
        ${githubLinkEl}.setAttribute("target", "_blank");
        ${githubLinkEl}.textContent = "GitHub: " + "${otherInfo}";
        ${infoEl}.appendChild(${githubLinkEl});
        `;
    }

    if (role === "Intern") {
        return `${infoEl}.textContent = "School: " + "${otherInfo}";`;
    }
}

function createTeamCardAgain(name, id, email, role, otherInfo, i) {
    
    const emailLink = "mailto:" + email;

    const employeeEl = "employeeEl" + i;
    const cardEl = 'cardEl' + i;
    const cardHeaderEl = 'cardHeaderEl' + i;
    const nameEl = 'nameEl' + i;
    const roleEl = 'roleEl' + i;
    const cardBodyEl = 'cardBodyEl' + i;
    const listEl = 'listEl' + i;
    const idEl = 'idEl' + i;
    const emailEl = 'emailEl' + i;
    const infoEl = 'infoEl' + i;
    const emailLinkEl = 'emailLinkEl' + i;
    const githubLinkEl = 'githubLinkEl' + i;

    return `
    ${employeeEl} = document.createElement('div');
    ${cardEl} = document.createElement('div');
    ${cardHeaderEl} = document.createElement("div");
    ${nameEl} = document.createElement("h4");
    ${roleEl} = document.createElement("h4");
    ${cardBodyEl} = document.createElement("div");
    ${listEl} = document.createElement("ul");
    ${idEl} = document.createElement("li");
    ${emailEl} = document.createElement("li");
    ${infoEl} = document.createElement("li");
    ${emailLinkEl} = document.createElement("a");
    ${githubLinkEl} = document.createElement("a");

    ${employeeEl}.classList.add("col", "my-col");
    ${cardEl}.classList.add("card", "text-left");
    ${cardHeaderEl}.classList.add("card-header");
    ${cardBodyEl}.classList.add("card-body");
    ${listEl}.classList.add("list-group");
    ${idEl}.classList.add("list-group-item");
    ${emailEl}.classList.add("list-group-item");
    ${infoEl}.classList.add("list-group-item");

    ${nameEl}.textContent = '${name}';
    ${roleEl}.textContent = '${role}';

    ${idEl}.textContent = 'ID: ${id}';
    ${emailLinkEl}.setAttribute("href", "${emailLink}");
    ${emailLinkEl}.textContent = 'Email: ${email}';

    ${buildElement(role, otherInfo, i)};

    ${cardHeaderEl}.appendChild(${nameEl});
    ${cardHeaderEl}.appendChild(${roleEl});

    ${listEl}.appendChild(${idEl});
    ${emailEl}.appendChild(${emailLinkEl});
    ${listEl}.appendChild(${emailEl});
    ${listEl}.appendChild(${infoEl});
    ${cardBodyEl}.appendChild(${listEl});
    
    ${cardEl}.appendChild(${cardHeaderEl});
    ${cardEl}.appendChild(${cardBodyEl});

    ${employeeEl}.appendChild(${cardEl});
    rowEl.appendChild(${employeeEl});
    `
}

function generateHtml(teamData) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <style>
        .my-col {
            margin-bottom: 10px;

        }
        .my-card {
            margin-bottom: 5px;
        }
    </style>
    <title>Team Profile</title>

</head>

<body class="container-fluid">
    
    <header class="container-fluid jumbotron">
        <h1 class="display-3 text-center">My Team</h1>
    </header>
    <main class="container-fluid text-center">
        <div class="row row-cols-3 align-items-center justify-content-center">

        </div>
    </main>
    <script>
        ${generateScript(teamData)}
    </script>
</body>

</html>
`;
    
}

module.exports = generateHtml;