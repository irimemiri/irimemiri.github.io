<template>
  <div class="profile-wrapper">
    <h1 class="page-title"><span class="marker">私について</span></h1>
    <div class="profile-inner-box">
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
                Ruby/Ruby on Rails/PHP/CodeIgniter/Node.js
              </dd>
            </div>
            <div class="skillset-row">
              <dt class="skill-type">Frontend</dt>
              <dd class="skill-text">
                HTML5/CSS3/JavaScript/vue.js/jQuery
              </dd>
            </div>
            <div class="skillset-row">
              <dt class="skill-type">Design Tools</dt>
              <dd class="skill-text">
                Sketch/Illustrator/Photoshop
              </dd>
            </div>
            <div class="skillset-row">
              <dt class="skill-type">Other Tools</dt>
              <dd class="skill-text">
                WordPress/Google Analytics/AWS
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
  .page-title .marker {
    background: linear-gradient(transparent 60%, #c1e0ff 60%);
  }

  .sect-wrapper {
    width: 780px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  .sect-wrapper .sect-title {
    width: 180px;
    font-size: 1em;
    text-align: right;
  }

  .sect-wrapper .sect-content {
    width: 580px;
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

  .history {
    font-size: .9em;
  }

  .history .history-row {
    display: flex;
    width: 680px;
    line-height: 2em;
  }

  .history .history-row .period {
    width: 180px;
    letter-spacing: .1em;
    text-align: right;
    padding-right: 20px;
  }
  .history .history-row .event {
    width: 480px;
    letter-spacing: .1em;
  }

  /* とりあえず全体に幅設定 */
  .profile-wrapper {
    width: 980px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 150px;
  }

  /* .profile-inner-box { */
    /* background-color: #fff; */
  /* } */

  .skillset {
    font-size: .9em;
    /* margin-bottom: 20px; */
  }

  .skillset-row {
    display: flex;
    width: 680px;
    line-height: 2em;
}

  .skillset-row .skill-type {
    width: 180px;
    letter-spacing: .1em;
    text-align: right;
    padding-right: 20px;
  }

  .skillset-row .skill-text {
    width: 480px;
    letter-spacing: .1em;
  }
</style>
