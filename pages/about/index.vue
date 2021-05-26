<template>
  <div class="profile-wrapper">
  <h1 class="page-title"><span class="marker">私について</span></h1>
    <section class="sect-wrapper">
      <h2 class="sect-title">プロフィール</h2>
      <div class="sect-content">
        <p class="my-name">伊東絵美莉 (<a href="https://github.com/irimemiri" class="github-link">@irimemiri</a>)</p>
        <p class="my-comment">1995年生まれ。大学在学中に大学生協の企画広報活動をしたことでPRや広告に興味を持ち、卒業後は広告系の会社にWebエンジニアとして就職。
          2020年、退職をきっかけにデザインに興味を持ち、職業訓練校でWeb制作を3ヶ月間学びました。
          何事も考え抜くタイプで、目的に合わせて色々な手段を試すことが好きです。趣味は絵を描くこと、音楽鑑賞、語学。</p>
      </div>
    </section>
    <section class="sect-wrapper">
      <h2 class="sect-title">バックグラウンド</h2>
      <div class="sect-content">
        <dl class="history">
          <div class="history-row">
            <dt class="period">2017</dt>
            <dd class="event">大学の英文学科を卒業</dd>
          </div>
          <div class="history-row">
            <dt class="period">2017-2019</dt>
            <dd class="event">DM発送代行会社の社内SE</dd>
          </div>
          <div class="history-row">
            <dt class="period">2019-2020</dt>
            <dd class="event">インターネット広告代理店のWebエンジニア</dd>
          </div>
          <div class="history-row">
            <dt class="period">2020-2021</dt>
            <dd class="event">職業訓練校で3ヶ月間Web制作を学ぶ
            </dd>
          </div>
          <div class="history-row">
            <dt class="period">2021-現在</dt>
            <dd class="event">デザイナーを目指して転職活動中</dd>
          </div>
        </dl>
      </div>
    </section>
    <section class="sect-wrapper">
      <h2 class="sect-title">スキルセット</h2>
      <div class="sect-content">
        <dl class="skillset">
          <div class="skillset-row">
            <dt class="skill-type">Backend</dt>
            <dd class="skill-text">
              Ruby / Ruby on Rails / PHP / CodeIgniter / Node.js
            </dd>
          </div>
          <div class="skillset-row">
            <dt class="skill-type">Frontend</dt>
            <dd class="skill-text">
              HTML5 / CSS3 / JavaScript / vue.js / jQuery
            </dd>
          </div>
          <div class="skillset-row">
            <dt class="skill-type">Design Tools</dt>
            <dd class="skill-text">
              Sketch / Illustrator / Photoshop
            </dd>
          </div>
          <div class="skillset-row">
            <dt class="skill-type">Other Tools</dt>
            <dd class="skill-text">
              WordPress / Google Analytics / AWS
            </dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>

<style scoped>
.profile-wrapper {
  width: 76.562%; /* 980/1280 */
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
}

.page-title .marker {
  background: linear-gradient(transparent 60%, #c1e0ff 60%);
}

.page-title {
  margin-bottom: 64px;
}

.sect-wrapper {
  width: 79.591%; /* 780/980 */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}

.sect-wrapper .sect-title {
  width: 23.076; /* 180/780 */
  font-size: 1em;
  text-align: right;
}

.sect-wrapper .sect-content {
  width: 74.358%; /* 580/780 */
  line-height: 1.8;
}

.prof_img {
  width: 100%;
  margin-bottom: 30px;
}

.name {
  margin-bottom: 15px;
}

.name a:link, .name a:visited {
  color: #000;    
}

.name, .skills {
  text-align: center;
}

.my-name {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 10px;
}

.my-name .github-link:link, .my-name .github-link:visited, .my-name .github-link:hover {
  color: #000;
}

.history, .skillset {
  font-size: .9em;
}

.history .history-row, .skillset-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%; /* 580/580 */
  line-height: 2em;
}

.history .history-row .period, .skillset-row .skill-type {
  width: 31.034%; /* 180/580 */
  letter-spacing: .1em;
  text-align: right;
}
.history .history-row .event, .skillset-row .skill-text {
  width: 65.517%; /* 380/580 */
  letter-spacing: .1em;
}

/*
  ===========================
  target size:
  375px(750px)x677px(1334px);
  ===========================
*/ 

@media screen and (max-width: 780px) {
  /* TODO: 各ページ統一 */
  .profile-wrapper {
   width: 96%; /* 370/375 edited */
    padding-top: 60px;
  }

  .page-title {
    margin-bottom: 40px;
  }

  .sect-wrapper {
    width: 100%;
  }

  .sect-wrapper .sect-title {
    width: 100%;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  .my-name {
    font-size: .9em;
  }

  .sect-wrapper .sect-content {
    width: 100%;
  }

  .history, .skillset {
    font-size: .8em;
  }

  .history .history-row, .skillset-row {
    width: 100%;
  }

  .history .history-row .period, .skillset-row .skill-type {
    width: 37.837%; /* 140/370 */
  }

  .history .history-row .event, .skillset-row .skill-text {
    width: 58.108%; /* 215/370 */
  }
}
</style>