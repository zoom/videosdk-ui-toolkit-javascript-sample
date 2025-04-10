const uitoolkit = window.UIToolkit;
var sessionContainer = document.getElementById("sessionContainer");
var authEndpoint = "http://localhost:4000";
var config = {
  videoSDKJWT: "",
  sessionName: "test",
  userName: "JavaScript",
  sessionPasscode: "123",
  featuresOptions: {
    virtualBackground: {
      enable: true,
      virtualBackgrounds: [
        {
          url: "https://images.unsplash.com/photo-1715490187538-30a365fa05bd?q=80&w=1945&auto=format&fit=crop",
        },
      ],
    },
  },
};
var role = 1;

window.getVideoSDKJWT = getVideoSDKJWT;

function getVideoSDKJWT() {
  document.getElementById("join-flow").style.display = "none";

  fetch(authEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionName: config.sessionName,
      role: role,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.signature) {
        console.log(data.signature);
        config.videoSDKJWT = data.signature;
        joinSession();
      } else {
        console.log(data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function joinSession() {
  uitoolkit.joinSession(sessionContainer, config);

  uitoolkit.onSessionClosed(sessionClosed);
  uitoolkit.onSessionDestroyed(sessionDestroyed);
}

var sessionClosed = () => {
  console.log("session closed");
  document.getElementById("join-flow").style.display = "block";
};

var sessionDestroyed = () => {
  console.log("session destroyed");
  uitoolkit.destroy();
};
