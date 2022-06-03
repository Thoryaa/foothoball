const express = require('express');
const app = express();
//to support styling
app.use(express.static('assests'));
//to support ejs file
app.set("view engine", "ejs");
const port = process.env.PORT || 4000;
//to open and connect in server
app.listen(port, () => {
    console.log("you are on the server^_^  [" + port + "]");
});
//
let navDesk = {}
let match = {
    title: 'Górnik Zabrze',
    office: 'offical site',
    en: "en",
    desk_nav_menu: ["news", "club", "teams", "matches", "tickets", "fans", "shop"],
    text_cont: ["miliks's special visit", "miliks's special club", "miliks's special "],
    button_text: ["club", "send", "visit"],
    img_slide: ["img/1648548613230.png", "img/1.png", "img/2.png"],
    svgs: ['"./facebook.ejs"', '"./twitter.ejs"', '"./google.ejs"', '"./youtube.ejs"'],
    match_club_title: ["ekstralasa", "polish cup", "ekstralasa"],
    match_tail: ["26.03.2016", "3.04.2016", "3.04.2016"],
    match_ht: ["ZABRZE city stadium", "polish army stadium", "municipal stdium in wroclaw"],
    group_one: ["Górnik Zabrze", "legia warszawa", "Śląsk Wrocław"],
    group_two: ["plast guwice", "Górnik Zabrze", "Górnik Zabrze"],
    group_one_icon: ["star", "", ""],
    group_two_icon: [" ", "star", "star"],
    num1: ["5", " ", " "],
    num2: ["2",
        " ",
        " "
    ],
    special: [":", "vs", "vs"],
    svg_group1: ['elgandia.ejs', 'legal.ejs', 'legal.ejs'],
    svg_group2: ['<%-include("./svg/gorSvg.ejs")%>', '<%-include("./gorSvg.ejs")%>', '<%-include("./includes/gorSvg.ejs")%>'],
    sonseat: "sea son stats",
    ekstra: "eksttrakiasa",
    toptext: "top goalscorer",
    src_img: "img/1.png",
    texn1: [30, 48],
    texn2: [12, 8],
    texn: 6,
    tex: "plegue position",
    tex2: ["patches played", "goals"],
    tex3: ["win", "loses"],

    roman: "roman gergel",
    ten: 10,
    goals: "goals",
    bodymatch: ["he's becoming the player i think can be", "he's becoming the player i think can be", "he's becoming the player i think can be"],
    iconmatch: ["print", "documents-outline", "camera-outline"],
    matchdate: ["25 04 2016", "25 04 2016", "25 04 2016"],

};
//render to home page
app.get("/", (req, res) => {
    res.render("home", { match: match })
});