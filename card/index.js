const data = [
  {
    title: "苏格拉底",
    cover: "./images/socrates.jpeg",
    content:
      "苏格拉底（Socrates），公元前469—公元前399年，古希腊著名的思想家、哲学家、教育家、公民陪审员。苏格拉底和他的学生柏拉图，及柏拉图的学生亚里士多德，并称为「古希腊三贤」，被后人广泛认为是西方哲学的奠基者。",
  },
  {
    title: "释迦牟尼",
    cover: "./images/shakyamuni.jpeg",
    content:
      "释迦牟尼，原名乔达摩·悉达多，佛教的创始人，公元前五百余年释迦牟尼出生于北印度迦毗罗卫国，是国主净饭王的太子。成道后，被世人尊称为“释迦牟尼”，意思为“释迦族的贤哲”。",
  },
  {
    title: "孔子",
    cover: "./images/confucius.jpeg",
    content:
      "孔子生于公元前551年9月28日，名丘，字仲尼，春秋末期鲁国陬邑人（今山东曲阜），祖籍宋国栗邑（今河南夏邑）。孔子是中国古代著名思想家、教育家，他开创了私人讲学的先河，倡导仁、义、礼、智、信，是儒家学派创始人。",
  },
  {
    title: "耶稣",
    cover: "./images/jesus.jpeg",
    content:
      "耶稣（约公元前4年—约公元33年）出生于伯利恒 （今巴勒斯坦中部城市） 是基督教里的核心人物，三十岁左右时开始传道，根据《圣经》记载， 三十三岁左右时在总督本丢.彼拉多执政时受难、为了全人类的罪被钉死在十字架上，第三天复活、并向门徒显现四十天后升天后预言他必要在世界穷尽的审判之日在荣光中降临，建立荣耀的天国，给「善」带来最后的胜利。",
  },
  {
    title: "柏拉图",
    cover: "./images/plato.jpeg",
    content:
      "柏拉图（Plato，Πλ τeων， 公元前427年—公元前347年），古希腊伟大的哲学家，也是全部西方哲学乃至整个西方文化最伟大的哲学家和思想家之一。",
  },
  {
    title: "圣·奥勒留·奥古斯丁",
    cover: "./images/augustinus.jpeg",
    content:
      "圣·奥勒留·奥古斯丁（Saint Aurelius Augustinus，亦作希坡的奥古斯丁 Augustinus Hipponensis，天主教译“圣思定”、“圣奥斯定”、“圣奥古斯丁”，公元354年11月13日－公元430年8月28日），古罗马帝国时期天主教思想家，欧洲中世纪基督教神学、教父哲学的重要代表人物。",
  },
  {
    title: "伊曼努尔·康德",
    cover: "./images/kant.jpeg",
    content:
      "伊曼努尔·康德（德文：Immanuel Kant，公元1724年4月22日—公元1804年2月12日，享年80岁），出生和逝世于德国柯尼斯堡，德国人，作家、哲学家，德国古典哲学创始人，其学说深深影响近代西方哲学，并开启了德国古典哲学和康德主义等诸多流派。",
  },
  {
    title: "阿那克西曼德",
    cover: "./images/anaximander.jpeg",
    content:
      "阿那克西曼德（约前610年－约前546年），米利都人，古希腊哲学家。为泰勒斯与阿那克西美尼之间承上启下的自然哲学家。在西方，他与锡罗斯的斐瑞居德斯被认为是最早的散文作者，他还是最早的哲学作者，他的《论自然》是最早用希腊文写作的散文和哲学著作。",
  },
  {
    title: "赫拉克利特",
    cover: "./images/heraclitus.jpeg",
    content:
      "赫拉克利特（前540年－前480年），古希腊哲学家、爱非斯派的创始人。生于以弗所一个贵族家庭，相传生性犹豫，被称为“哭的哲学人”。",
  },
  {
    title: "巴门尼德",
    cover: "./images/plotinus.jpeg",
    content:
      "巴门尼德(约公元前515年~前5世纪中叶以后)是一位诞生在爱利亚(南部意大利沿岸的希腊城市)的古希腊哲学家。他是前苏格拉底哲学家中最有代表性的人物之一。他是爱利亚派的实际创始人和主要代表者。",
  },
];

function createAction() {
  const fragment = document.createDocumentFragment();

  const voteUpbuttonEl = document.createElement("button");
  voteUpbuttonEl.classList.add("voteUpButton");
  voteUpbuttonEl.textContent = "赞同";
  fragment.append(voteUpbuttonEl);

  const commentButtonEl = document.createElement("button");
  commentButtonEl.classList.add("commentButton");
  commentButtonEl.textContent = "评论";
  fragment.append(commentButtonEl);

  return fragment;
}

function render() {
  const fragment = document.createDocumentFragment();

  data.forEach((item) => {
    const itemEl = document.createElement("div");
    itemEl.classList.add("item");

    const titleEl = document.createElement("h2");
    titleEl.classList.add("title");
    titleEl.textContent = item.title;
    itemEl.append(titleEl);

    if ("cover" in item) {
      const coverEl = document.createElement("img");
      coverEl.classList.add("cover");
      coverEl.src = item.cover;
      itemEl.append(coverEl);
    }

    const contentEl = document.createElement("div");
    contentEl.classList.add("content", "ellipsis");
    contentEl.textContent = item.content;
    itemEl.append(contentEl);

    const actionsEl = document.createElement("div");
    actionsEl.classList.add("actions");
    actionsEl.append(createAction());
    itemEl.append(actionsEl);

    fragment.append(itemEl);
  });

  const containerEl = document.querySelector(".container");
  containerEl.append(fragment);
}

render();
