<template>
  <div class="profile-wrapper">
    <h1 class="page-title">私について</h1>
    <section class="sect-wrapper">
      <h2 class="sect-title">プロフィール</h2>
      <div class="sect-content">
        <p class="my-name">irimemiri</p>
        <p class="my-comment">1995年生まれ。</p>
      </div>
    </section>
    <section class="sect-wrapper">
      <h2 class="sect-title">バックグラウンド</h2>
      <div class="sect-content">
        <div>
          2017年
          大学の英文学科を卒業
        </div>
          ダイレクトメール発送代行会社の社内SE
        <div>
          デジタル広告代理店のエンジニア
        </div>
        <div>
          職業訓練校でデザインを学ぶ
        </div>
        <div>
          デザイナーを目指して勉強中
        </div>
      </div>
    </section>
    <section class="sect-wrapper">
      <h2 class="sect-title">スキルセット</h2>
      <!-- <p class="prof_img"><img :src="`/images/prof.jpg`"></p>
      <div class="bio">
        <h2 class="name"><a href="https://github.com/irimemiri">@irimemiri</a></h2>
        <p>絵と音楽とSplatoonが好きな圧倒的インドア派。英語と韓国語が少しわかります。</p>
        <p>サークル活動がきっかけで広告に興味を持ち、大学卒業後は広告系の会社で社内SE、Webエンジニアとして勤務。2021年、エンジニアを辞めて、デザインを学び始めました。</p>
      </div> -->
      <div class="sect-content">
        <dl class="skill_list">
          <div class="skill_item">
            <dt>Backend</dt>
            <dd>
              Ruby/Ruby on Rails/PHP/CodeIgniter/Node.js
            </dd>
          </div>
          <div class="skill_item">
            <dt>Frontend</dt>
            <dd>
              HTML5/CSS3/JavaScript/vue.js/jQuery
            </dd>
          </div>
          <div class="skill_item">
            <dt>Design Tools</dt>
            <dd>
              Sketch/Illustrator/Photoshop
            </dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>

<style>
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

  /* とりあえず全体に幅設定 */
  .profile-wrapper {
    width: 980px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 150px;
  }

  .bio {
    margin-bottom: 30px;
  }

  .skills {
    margin-bottom: 10px;
  }

  .skill_list {
    margin-bottom: 20px;
  }

  .skill_item {
    display: flex;
  }

  .skill_item dt {
    width: 35.897%; /* 280/780 */
    text-align: right;
    margin-right: 2.564% /* 20/780 */
  }

  .skill_item dd {
    width: 61.538%; /* 480/780 */
  }
</style>
