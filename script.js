function calculateGWA() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;

    let grades = [
        Number(document.getElementById("science").value),
        Number(document.getElementById("math").value),
        Number(document.getElementById("english").value),
        Number(document.getElementById("filipino").value),
        Number(document.getElementById("ict").value),
        Number(document.getElementById("pe").value)
    ];

    if (!fname || !lname || grades.includes(0)) {
        alert("Please complete all fields.");
        return;
    }

    let gwa = (grades.reduce((a, b) => a + b) / grades.length).toFixed(2);

    document.getElementById("result").innerHTML = `
        <p><strong>Name:</strong> ${fname} ${lname}</p>
        <p>Science: ${grades[0]}</p>
        <p>Math: ${grades[1]}</p>
        <p>English: ${grades[2]}</p>
        <p>Filipino: ${grades[3]}</p>
        <p>ICT: ${grades[4]}</p>
        <p>PE: ${grades[5]}</p>
    `;

    document.getElementById("gwa").innerHTML =
        `Your General Weighted Average is <strong>${gwa}</strong>`;
}


const clubs = {
    chess: {
        name: "Chess Club",
        description: "Sharpen your strategy skills and participate in friendly school tournaments.",
        meeting: "Every Tuesday, 3:35 – 5:35 PM",
        location: "Room 86",
        advisor: "Mr. Messi",
        members: 13,
        category: "Academic"
    },
    drama: {
        name: "Drama Club",
        description: "Explore acting, scriptwriting, and stage management through creative plays.",
        meeting: "Every Monday and Friday, 4:00 – 7:00 PM",
        location: "Theather Hall",
        advisor: "Mr. Ronaldo",
        members: 27,
        category: "Creative"
    },
    robotics: {
        name: "Robotics Club",
        description: "DBuild innovative robots and participate in tech challenges and exhibitions.",
        meeting: "Every Wednesday, 3:45 – 5:30 PM",
        location: "Computer Lab",
        advisor: "Mr. Neymar",
        members: 10,
        category: "Academic"
    },
    debate: {
        name: "Debate Club",
        description: "Hone your reasoning, research, and persuasive skills in structured debates.",
        meeting: "Every Thursday, 4:00 – 5:30 PM",
        location: "Room 969",
        advisor: "Mr. Yamal",
        members: 24,
        category: "Academic"
    },
    art: {
        name: "Art Club",
        description: "Express creativity through sketching, painting, and digital art projects.",
        meeting: "Every Friday, 3:00 – 5:00 PM",
        location: "Art Room",
        advisor: "Mr. Mbappe",
        members: 30,
        category: "Creative"
    }
};

function showClubInfo() {
    const selected = document.getElementById("club-select").value;
    const infoBox = document.getElementById("club-info");

    if (!selected) {
        infoBox.innerHTML = "<p>Please select a club.</p>";
        return;
    }

    const club = clubs[selected];

    infoBox.innerHTML = `
        <h3>${club.name}</h3>
        <p><strong>Description:</strong> ${club.description}</p>
        <p><strong>Meeting Time:</strong> ${club.meeting}</p>
        <p><strong>Location:</strong> ${club.location}</p>
        <p><strong>Advisor:</strong> ${club.advisor}</p>
        <p><strong>Number of Members:</strong> ${club.members}</p>
        <p><strong>Category:</strong> ${club.category}</p>
    `;
}