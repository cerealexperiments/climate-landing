const russian = {
  heroHeading: "предотвращение изменения климата",
  heroText: "что делать при изменении климата",
  preventSubheading: "Способы предотвращения изменения климата",
  preventText: "Мы можем остановить измнения климата следуя данным пунктам",

  step1Title: "Удобрения",
  step1Desc: "Используйте органические удобрения вместо химических добавок",
  step2Title: "Переработка",
  step2Desc: "Не бросайте мусор на землю, а собирайте его и сдавайте его на переработку.",
  step3Title: "Озеленение",
  step3Desc: "Озеленение города поможет предотвратить загрязнение воздуха.",

  helpHeading: "Помогите окружающей среде",
  helpText: "Один житель - одно дерево. Спасение окружающей среды в наших руках.",
  helpButton: "помочь",
  articlesSubheading: "статьи",
  articlesText: "Ознакомьтесь с данными статьями",

  article1Title: "Насколько опасно сжигание опавших листьев?",
  article1Text: "Сжигание листьев вредно для окружающей среды. Это приводит к загрязнению воздуха, проблемам со здоровьем и пожароопасности.",
  article2Title: "Что такое биогумус?",
  article2Text: "Органическое удобрение биогумус - это живой материал. Он содержит много полезных микроорганизмов.",
  article3Title: "Как вести себя в случае поздних заморозок?",
  article3Text: "При резком снижении температуры и выпадения снега во время весны эксперты советуют укрывать деревья прозрачной пленкой.",

  articleButton: "подробнее",
}

const kyrgyz = {
  heroHeading: "климаттын өзгөрүшүн алдын алуу",
  heroText: "климаттын өзгөрүшүндө эмне кылыш керек?",
  preventSubheading: "климаттын өзгөрүүсүн алдын алуу жолдору",
  preventText: "Бул пункттарды аткаруу менен климаттын өзгөрүшүн токтото алабыз",

  step1Title: "жер семирткичтер",
  step1Desc: "Химиялык кошумчалардын ордуна органикалык жер семирткичтерди колдонуңуз.",
  step2Title: "кайра иштетүү",
  step2Desc: "Таштанды жерге таштабай, аны чогултуп кайра иштет.",
  step3Title: "жашылдандыруу",
  step3Desc: "Шаарды жашылдандыруу абанын булганышынын алдын алат.",

  helpHeading: "айлана-чөйрөгө жардам бериниз",
  helpText: "Бир жашоочу - бир дарак. Айлана-чөйрөнү сактоо биздин колубузда.",
  helpButton: "Жардам берүү",
  articlesSubheading: "макалалар",
  articlesText: "Бул макалаларды карап көрүңүз",

  article1Title: "Кулаган жалбырактарды күйгүзүү канчалык кооптуу?",
  article1Text: "Жалбырактарды күйгүзүү экологияга зыян. Бул абанын булганышына, ден соолук көйгөйлөрүнө жана өрт коркунучуна алып келет.",
  article2Title: "Биогумус деген эмне?",
  article2Text: "Биогумус органикалык жер семирткич тирүү материал болуп саналат. Анын курамында көптөгөн пайдалуу микроорганизмдер бар.",
  article3Title: "Кеч үшүк түшкөндө эмне кылыш керек?",
  article3Text: "Жаз мезгилинде температуранын кескин төмөндөшү жана кардын жаашы менен адистер дарактарды тунук пленка менен жабууну кеңеш беришет.",

  articleButton: "көбүрөөк",
}

let language = "RU";
const languageButton = document.querySelector(".header__language");

const heroHeading = document.querySelector(".hero__heading");
const heroText = document.querySelector(".hero__text");

const preventSubheading = document.querySelector(".prevent__subheading");
const preventText = document.querySelector(".prevent__text");

const steps = document.querySelectorAll(".step");
const step1 = steps[0];
const step2 = steps[1];
const step3 = steps[2];

const helpHeading = document.querySelector(".help__heading");
const helpText = document.querySelector(".help__text");
const helpButton = document.querySelector(".help__button");

const articlesSubheading = document.querySelector(".articles__subheading");
const articlesText = document.querySelector(".articles__text");
const articles = document.querySelectorAll(".article");
const article1 = articles[0];
const article2 = articles[1];
const article3 = articles[2];
const articleButtons = document.querySelectorAll(".article__button");

languageButton.addEventListener("click", changeLanguage);


function changeLanguage() {
  language = language === "RU" ? "KY" : "RU";
  let selectedLanguage = language === "RU" ? russian : kyrgyz;
  languageButton.textContent = language;

  const step1Title = step1.querySelector(".step__title");
  const step1Desc = step1.querySelector(".step__description");
  const step2Title = step2.querySelector(".step__title");
  const step2Desc = step2.querySelector(".step__description");
  const step3Title = step3.querySelector(".step__title");
  const step3Desc = step3.querySelector(".step__description");

  const article1Title = article1.querySelector(".article__title");
  const article1Text = article1.querySelector(".article__text");
  const article2Title = article2.querySelector(".article__title");
  const article2Text = article2.querySelector(".article__text");
  const article3Title = article3.querySelector(".article__title");
  const article3Text = article3.querySelector(".article__text");


  heroHeading.textContent = selectedLanguage.heroHeading;
  heroText.textContent = selectedLanguage.heroText;
  preventSubheading.textContent = selectedLanguage.preventSubheading;
  preventText.textContent = selectedLanguage.preventText;

  step1Title.textContent = selectedLanguage.step1Title;
  step1Desc.textContent = selectedLanguage.step1Desc;
  step2Title.textContent = selectedLanguage.step2Title;
  step2Desc.textContent = selectedLanguage.step2Desc;
  step3Title.textContent = selectedLanguage.step3Title;
  step3Desc.textContent = selectedLanguage.step3Desc;

  helpHeading.textContent = selectedLanguage.helpHeading;
  helpText.textContent = selectedLanguage.helpText;
  helpButton.textContent = selectedLanguage.helpButton;

  articlesSubheading.textContent = selectedLanguage.articlesSubheading;
  articlesText.textContent = selectedLanguage.articlesText;

  article1Title.textContent = selectedLanguage.article1Title;
  article1Text.textContent = selectedLanguage.article1Text;
  article2Title.textContent = selectedLanguage.article2Title;
  article2Text.textContent = selectedLanguage.article2Text;
  article3Title.textContent = selectedLanguage.article3Title;
  article3Text.textContent = selectedLanguage.article3Text;

  articleButtons.forEach(button => {
    button.textContent = selectedLanguage.articleButton;
  })
}

