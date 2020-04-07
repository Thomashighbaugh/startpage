var $ = function (id) {
  return document.getElementById(id);
};
var help =
  "<ul> \
    <li><b>!g</b> = Search Google</li> \
    <li><b>!i</b> = Search Google Images</li> \
    <li><b>!m</b> = Search IMDb</li> \
    <li><b>!u</b> = Search Urban Dictionary</li> \
    <li><b>!w</b> = Search Wikipedia</li> \
    <li><b>!y</b> = Search YouTube</li> \
</ul>";
var search = [
  // Search engines
  ["", "https://www.duckduckgo.com/?q="], // Google (Default)
  ["!g", "https://www.google.com/#q="], // Google
  ["!i", "https://www.google.com/search?tbm=isch&q="], // Google Images
  ["!m", "http://www.imdb.com/find?q="], // IMDb
  ["!u", "http://www.urbandictionary.com/define.php?term="], // Urban Dictionary
  ["!w", "http://en.wikipedia.org/w/index.php?search="], // Wikipedia
  ["!y", "https://www.youtube.com/results?search_query="], // YouTube
];
var menu = [
  // Menu titles
  "Linux", // mnu_1
  "Education", // mnu_2
  "Security", // mnu_3
  "Development", // mnu_4
  "Cloud", // mnu_5
];
var showFavicon = true; // Enable/Disable Link Favicons (img)
var showPreview = true; // Enable/Disable Link Hover Preview (iframe)
// Link setup (separate with ["", "", ""],)
// Format: ["Name", "URL", "Custom Favicon"],
var links = [
  // Linux -           mnu_1
  ["Arch Linux Wiki", "http://wiki.archlinux.org", ""],
  ["Arch User Repository Linux", "http://aur.archlinux.org", ""],
  ["Unixporn", "http://reddit.com/r/unixporn", ""],
  ["Wallhaven", "http://alpha.wallhaven.cc", ""],
  ["Bitnami", "https//bitnami.com", ""],
  ["Electron Apps", "hhtps://electronjs.org/apps", ""],
  ["AppImage Hub", "https://appimage.github.io/", ""],
  ["Pling", "https://pling.com", ""],

  ["", "", ""],
  // Education -          mnu_2
  ["BashFAQ", "http://mywiki.wooledge.org/BashFAQ", ""],
  ["C FAQ", "http://c-faq.com/", ""],
  ["FreeCodeCamp", "https://www.freecodecamp.org/", ""],
  ["Udemy", "https://www.udemy.com/", ""],
  ["Python", "https://docs.python.org/", ""],
  ["PerlFAQ", "http://www.perl.com/perl/faq", ""],
  ["Rust Book", "https://doc.rust-lang.org/book/index.html", ""],
  ["Learn Docker", "https://hackr.io/tutorials/learn-docker", ""],
  ["The Odin Project", "https://www.theodinproject.com/courses", ""],
  ["Scrimba", "https://scrimba.com", ""],
  ["Ops School", "http://www.opsschool.org", ""],
  ["Dev Hints", "https://devhints.io", ""],

  ["", "", ""],
  // Security -  mnu_3
  ["Rapid7", "https://community.rapid7.com/", ""],
  ["OffensiveSecurity", "http://www.offensive-security.com/", ""],
  ["OpenSec", "http://opensecuritytraining.info/Training.html", ""],
  ["ExploitDatabase", "https://www.exploit-db.com/", ""],
  ["SecLists", "http://seclists.org/", ""],
  ["PentesterLab", "https://pentesterlab.com/bootcamp", ""],
  ["PTES", "http://www.pentest-standard.org/index.php/Main_Page", ""],
  ["Exploit", "https://exploit-exercises.com/", ""],
  ["Cryptopal", "http://cryptopals.com/", ""],
  ["CryptoPuzzle", "https://potatopla.net/crypto/", ""],
  ["SmashTheStack", "http://smashthestack.org/", ""],
  ["Vulnub", "https://www.vulnhub.com/", ""],
  ["Metasploitable", "http://192.168.58.26", ""],
  ["WeChall", "https://www.wechall.net/", ""],
  ["RingZer0", "https://ringzer0team.com/", ""],
  ["Root-Me", "http://root-me.org/", ""],
  ["HackTheBox", "https://www.hackthebox.eu/", ""],
  ["Pwnable", "http://pwnable.kr/", ""],
  ["", "", ""],

  // Development  -  mnu_4
  ["Bitbucket", "https://bitbucket.org", ""],
  ["Github", "https://github.com/", ""],
  ["Gitlab", "https://gitlab.com/", ""],
  ["Probot", "https://probot.github.io/apps/", ""],
  ["Bit", "https://bit.dev", ""],
  ["Code My UI", "https://codemyui.com", ""],
  ["Carbon", "https://carbon.now.sh", ""],
  ["Sassimate Animations", "https://georgeevans1995.github.io/Sassimate/", ""],
  ["CodePen", "https://codepen.io", ""],
  ["CodeSandbox", "https://codesandbox.io", ""],
  ["JSFiddle", "https://jsfiddle.net", ""],
  ["SASS Meister", "https://sassmeister.com", ""],
  ["Get Awesomeness Lists", "https://getawesomeness.herokuapp.com/", ""][
    ("", "", "")
  ],
  // Cloud -          mnu_5

  [
    "AWS Control Panel",
    "https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fhomepage&forceMobileApp=0&code_challenge=8TpPxW0x7nv1ehNdxCbEPgAv-5IHVDxZ8CvDcTtLs_Q&code_challenge_method=SHA-256",
    "",
  ],
  ["Digital Ocean Sign On", "https://cloud.digitalocean.com/login", ""],
  [
    "Dropbox",
    "https://www.dropbox.com",
    "https://cf.dropboxstatic.com/static/images/favicon-vflk5FiAC.ico",
  ],
  [
    "Books",
    "http://gen.lib.rus.ec/search.php?req=topicid85&open=0&column=topic",
    "",
  ],
  ["PCloud", "http://www.pcloud.com/", ""],
];
var i,
  ss = "";
function init() {
  for (i = 0; i < search.length; i++) if (search[i][0] == "") ss = search[i][1];
  if (ss == "") alert("Error: Missing default search engine!");
  $("help").innerHTML = help;
  if (localStorage.getItem("note") != null)
    if (localStorage.getItem("note").length != 0) toggleNote();
  build();
  if (showPreview) preview(0, 0);
  $("q").value = "";
  $("q").focus();
}
function build() {
  // Build menu
  $("mnu").innerHTML = "";
  for (i = 0; i < menu.length; i++) {
    // Menu titles
    $("mnu").innerHTML +=
      "<li><label>" +
      menu[i] +
      '</label>\n<ul id="mnu_' +
      (i + 1) +
      '"></ul></li>';
  }
  var m = 1,
    skip = false;
  for (i = 0; i < links.length; i++) {
    // Menu links
    if (links[i][0] == "" && links[i][1] == "") skip = true;
    if (!skip) {
      var prev = "",
        printimg = "";
      if (showFavicon) {
        var favicon;
        if (links[i][2] != "") favicon = links[i][2];
        else favicon = getFavicon(links[i][1]);
        printimg =
          '<img id="img_' +
          i +
          '" src="' +
          favicon +
          '"' +
          " onload=\"this.style.visibility='inherit';\" /> ";
      }
      if (showPreview) {
        prev =
          ' onmouseover="javascript:preview(1,this.href);" onmouseout="javascript:preview(0,0);"';
      }
      $("mnu_" + m).innerHTML +=
        '<li><a href="' +
        links[i][1] +
        '"target="_black"' +
        prev +
        ">" +
        printimg +
        links[i][0] +
        "</a></li>";
    } else {
      skip = false;
      m++;
    }
  }
}
/*
    Optional patch for using "!i" before the search query: http://pastebin.com/Lw24tQ81
*/
function handleQuery(e, q) {
  // Handle search query
  var key = e.keyCode || e.which;
  if (key == 13) {
    // Enter
    var x = q.lastIndexOf("!");
    if (x != -1 && x >= q.length - 2) {
      for (i = 0; i < search.length; i++) {
        if (search[i][0] == q.substr(x)) {
          // Find "*!i"
          window.location = search[i][1] + q.substr(0, x).replace(/&/g, "%26");
          return true;
        }
      }
      // Invalid "!i", use default
      window.location = ss + q.substr(0, x).replace(/&/g, "%26");
    } else {
      // "!i" where not specified, use default
      window.location = ss + q.replace(/&/g, "%26");
    }
  }
}
function getFavicon(url) {
  var l = document.createElement("a");
  l.href = url;
  return l.protocol + "//" + l.hostname + "/favicon.ico";
}
function toggleNote() {
  if ($("note") == null) {
    $("help").innerHTML =
      "<textarea id='note' spellcheck='false' placeholder='Store temporary note...'></textarea>";
    if (localStorage.getItem("note") != null)
      $("note").value = localStorage.getItem("note");
    $("note").addEventListener("change", function () {
      localStorage.setItem("note", $("note").value);
    });
    $("plus").value = "-";
    $("note").focus();
  } else {
    $("help").innerHTML = help;
    $("plus").value = "+";
    $("q").focus();
  }
}
var pT;
function preview(c, x) {
  clearTimeout(pT);
  switch (c) {
    case 0: // mouseout
      $("overlay").style.opacity = 1;
      pT = setTimeout(function () {
        $("preview").src = "about:blank";
      }, 500);
      break;
    case 1: // mouseover
      pT = setTimeout(function () {
        $("preview").src = x;
      }, 100);
      break;
    default:
      // load
      if ($("preview").src != "about:blank") $("overlay").style.opacity = 0.75;
  }
}
