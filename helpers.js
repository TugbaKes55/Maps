var carIcon = L.icon({
    iconUrl: "car.png",
    iconSize: [50, 60],
  });
  var homeIcon = L.icon({
    iconUrl: "home-marker.png",
    iconSize: [50, 60],
  });
  var jobIcon = L.icon({
    iconUrl: "job.png",
    iconSize: [50, 60],
  });
  var visitIcon = L.icon({
    iconUrl: "visit.png",
    iconSize: [50, 60],
  });
  
  export const detecIcon = (type) => {
    switch (type) {
      case "park":
        return carIcon;
      case "home":
        return homeIcon;
      case "job":
        return jobIcon;
      case "goto":
        return visitIcon;
    }
  };
  //* Gönderilen veriye göre localStorage günceller
  export const setStorage = (data) => {
    //* veriyi locala göndermek için stringe çevirdik
    const strData = JSON.stringify(data);
    //* local storage güncelledik
    localStorage.setItem("notes", strData);
  };