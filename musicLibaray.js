class Libaray {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    if (playlist instanceof Playlist) {
      this.playlists.push(playlist);
    }
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  addTrack(track) {
    if (track instanceof Track) {
      this.tracks.push(track);
    }
  }

  overallRating() {
    let sum = 0;
    this.tracks.forEach(elm => {
      sum += elm.rating;
    });
    return sum / this.tracks.length;
  }

  totalDuration() {
    let duration = 0;
    this.tracks.forEach(elm => {
      duration += elm.length;
    });
    return duration;
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

const track1 = new Track("POWER", 1, 180);
const track2 = new Track("I love it", 3, 200);
const playlist1 = new Playlist("Kanye Songs");
const libaray1 = new Libaray("Hip-hop", "Saul");
playlist1.addTrack(track1);
playlist1.addTrack(track2);
libaray1.addPlaylist(playlist1);

console.log("Track 1: ", track1);
console.log("Playlist 1: ", playlist1);
console.log("Libaray 1: ", libaray1);
console.log("Overall Rating: ", playlist1.overallRating());
console.log("Total Duration : ", playlist1.totalDuration());
