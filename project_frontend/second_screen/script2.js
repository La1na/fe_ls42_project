function goToLink() {
  window.location.href = "../first_screen/index.html";
}

const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),

    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w",
    type: "offline",
    attendees: 99,

    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),

    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),

    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),

    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",

    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),

    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 74,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),

    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&to=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];

const innerBtn = document.querySelectorAll("#menu_open");
innerBtn.forEach((item) => {
  item.addEventListener("click", () => {
    let text = item.nextElementSibling;
    text.classList.toggle("elem_open");
  });
});

const allEvents = document.querySelector(".content");
let arr = eventsStore;

eventCard();

function eventCard() {
  allEvents.innerHTML = "";
  arr.forEach((event) => {
    const eventCard = `
          <div class = "eventAll">
          <div class = "eventImg_container">
          <img src="${event.image}" alt="${
      event.title
    }" style="width: 100%; height: 100%;">
    </div>
          <div class = "text_event">
              <h2>${event.title}</h2>
              <p> ${event.date.toLocaleString()}</p>
              <p>${event.category} (${event.distance} km)</p>
              <p> ${event.attendees} attendees</p>
              </div>
          </div>
      `;
    allEvents.innerHTML += eventCard;
  });
}

const filteredType = eventsStore.filter();

function filteredCategory(filterType, filterValue) {
  // let filterValue="Hobbies and Passions";
  // let resArr;
  if (filterValue == "") {
    arr = eventsStore;
    document.querySelector(".filter_type").firstChild.innerText = "Any type";
    document.querySelector(".filter_category").firstChild.innerText =
      "Any category";
    document.querySelector(".filter_distance").firstChild.innerText =
      "Any distance";
    document.querySelector(".filter_date").firstChild.innerText = "Any date";
  } else if (filterType == "category") {
    arr = eventsStore.filter((item) => item.category === filterValue);
    document.querySelector(".filter_category").firstChild.innerText =
      filterValue;
  } else if (filterType == "distance") {
    arr = eventsStore.filter((item) => item.distance <= filterValue);
    document.querySelector(".filter_distance").firstChild.innerText =
      filterValue + ` km`;
  } else if (filterType == "type") {
    arr = eventsStore.filter((item) => item.type === filterValue);
    document.querySelector(".filter_type").firstChild.innerText = filterValue;
  } else if (filterType == "date") {
    // console.log(Date.UTC(Date.parse(filterValue)));
    // console.log(Date.UTC(filterValue));
    console.log(new Date(filterValue));
    // console.log(Date.parse(filterValue));
    console.log(eventsStore[1].date);

    arr = eventsStore.filter((item) => item.date.getTime() == new Date(filterValue).getTime());
    document.querySelector(".filter_date").firstChild.innerText = new Date(filterValue).toLocaleString();
  } else {
    arr = eventsStore;
  }

  // return resArr;
  eventCard();
}
