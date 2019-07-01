var bookmarks = (function() {
  var all = [
      {
          display: "icon",
          letter: "DEV",
          icon: {
              name: "dev",
              prefix: "fab",
              label: "Dev.to"
          },
          name: "Dev.to",
          url: "https://dev.to/",
          accent: {
              override: false,
              color: {
                  r: null,
                  g: null,
                  b: null
              }
          },
          timeStamp: 1560635049
      },
    {
      display: "icon",
      letter: "DEV",
      icon: {
        name: "code",
        prefix: "fas",
        label: "Code"
      },
      name: "Devdocs",
      url: "http://devdocs.io/",
      accent: {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      },
      timeStamp: 1560635049
    },
    {
      display: "icon",
      letter: "GL",
      icon: {
        name: "gitlab",
        prefix: "fab",
        label: "GitLab"
      },
      name: "GitLab",
      url: "https://gitlab.com/users/sign_in",
      accent: {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      },
      timeStamp: 1560635049
    },
    {
      display: "icon",
      letter: "GIT",
      icon: {
        name: "github",
        prefix: "fab",
        label: "GitHub"
      },
      name: "Github",
      url: "https://github.com/",
      accent: {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      },
      timeStamp: 1560635049
    },
    {
      display: "icon",
      letter: "DR",
      icon: {
        name: "dribbble",
        prefix: "fab",
        label: "Dribbble"
      },
      name: "Dribble",
      url: "https://dribbble.com/",
      accent: {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      },
      timeStamp: 1560635049
    },
    {
      display: "icon",
      letter: "DW",
      icon: {
        name: "linux",
        prefix: "fab",
        label: "Distrowatch"
      },
      name: "Distrowatch",
      url: "https://distrowatch.com",
      accent: {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      },
      timeStamp: 1560635049
    },
    {
      display: "icon",
      letter: "DB",
      icon: {
        name: "dropbox",
        prefix: "fab",
        label: "dropbox"
      },
      name: "Drive",
      url: "dropbox.com",
      accent: {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      },
      timeStamp: 1560635049
    },
    {
      display: "icon",
      letter: "PC",
      icon: {
        name: "mixcloud",
        prefix: "fab",
        label: "P-Cloud"
      },
      name: "P-Cloud",
      url: "https://pcloud.com/",
      accent: {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      },
      timeStamp: 1560635049
    },
    {
      display: "icon",
      letter: "DR",
      icon: {
        name: "google-drive",
        prefix: "fab",
        label: "google-drive"
      },
      name: "Google Drive",
      url: "drive.google.com",
      accent: {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      },
      timeStamp: 1560635049
    },
    {
      display: "icon",
      letter: "AC",
      icon: {
        name: "amazon",
        prefix: "fab",
        label: "amazon"
      },
      name: "Amazon Drive",
      url: "https://www.amazon.com/clouddrive",
      accent: {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      },
      timeStamp: 1560635049
    },
    {
      display: "icon",
      letter: "DO",
      icon: {
        name: "digital-ocean",
        prefix: "fab",
        label: "Digital Ocean"
      },
      name: "Digital Ocean",
      url: "https://digitalocean.com/",
      accent: {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      },
      timeStamp: 1560635049
    },
    {
      display: "icon",
      letter: "R",
      icon: {
        name: "reddit-alien",
        prefix: "fab",
        label: "reddit Alien"
      },
      name: "Reddit",
      url: "https://reddit.com/",
      accent: {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      },
      timeStamp: 1560635049
    },
    {
      display: "icon",
      letter: "YT",
      icon: {
        name: "youtube",
        prefix: "fab",
        label: "YouTube"
      },
      name: "YouTube",
      url: "https://youtube.com/",
      accent: {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      },
      timeStamp: 1560635049
    },

  ];

  var get = function(data) {
    var _singleBookmark = function() {
      var found = false;
      for (var i = 0; i < all.length; i++) {
        if (all[i].timeStamp === data.timeStamp) {
          found = all[i];
        }
      }
      return found;
    };
    var _allBookmarks = function() {
      var action = {
        none: function(array) {
          return helper.sortObject(array, "timeStamp");
        },
        name: function(array) {
          return helper.sortObject(array, "name");
        },
        letter: function(array) {
          return helper.sortObject(array, "letter");
        },
        icon: function(array) {
          return helper.sortObject(array, "icon.name");
        }
      };
      return action[state.get().link.sort](all);
    };
    if (data && typeof data.timeStamp == "number") {
      return _singleBookmark();
    } else {
      return _allBookmarks();
    }
  };

  var restore = function(data) {
    if ("bookmarks" in data) {
      all = data.bookmarks;
    }
  };

  var add = function(data) {
    all.push(data);
  };

  var edit = function(data) {
    for (var i = 0; i < all.length; i++) {
      if (all[i].timeStamp === data.timeStamp) {
        all[i] = data;
      }
    }
  };

  var remove = function(data) {
    for (var i = 0; i < all.length; i++) {
      if (all[i].timeStamp === data.timeStamp) {
        all.splice(all.indexOf(all[i]), 1);
      }
    }
  };

  var init = function() {
    if (data.load()) {
      restore(data.load());
    }
  };

  // exposed methods
  return {
    all: all,
    init: init,
    get: get,
    add: add,
    edit: edit,
    remove: remove,
    restore: restore
  };
})();
