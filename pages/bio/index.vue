<template>
  <div class="bio-wrapper">
  <h1 class="page-title"><span class="marker">{{ title }}</span></h1>
    <section class="bio-item">
      <h2 class="bio-item-label">NAME</h2>
      <div class="bio-item-content">
        <p>Emiri Ito</p>
      </div>
    </section>
    <section class="bio-item">
      <h2 class="bio-item-label">BIRTH</h2>
      <div class="bio-item-content">
        <p>1995.01.17</p>
      </div>
    </section>
    <section class="bio-item">
      <h2 class="bio-item-label">BLOOD TYPE</h2>
      <div class="bio-item-content">
        <p>A</p>
      </div>
    </section>
    <section class="bio-item">
      <h2 class="bio-item-label">SKILL</h2>
      <div class="bio-item-content">
        <p>Programming / Web Design</p>
      </div>
    </section>
    <section class="bio-item">
      <p>
        1995年東京都生まれ。津田塾大学学芸学部英文学科卒業。<br>
        ロックバンド中心に音楽が大好きです。
      </p>
    </section>
  </div>
</template>

<style scoped>
.bio-wrapper {
  margin-left: auto;
  margin-right: auto;
}

.page-title {
  margin-bottom: 64px;
}

.bio-item {
  width: 79.591%; /* 780/980 */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}

.bio-item .bio-item-label {
  width: 23.076; /* 180/780 */
  font-size: 1em;
  text-align: right;
}

.bio-item .bio-item-content {
  width: 74.358%; /* 580/780 */
  line-height: 1.8;
}

/*
  ===========================
  target size:
  375px(750px)x677px(1334px);
  ===========================
*/ 

@media screen and (max-width: 780px) {
  /* TODO: 各ページ統一 */
  .bio-wrapper {
   width: 96%; /* 370/375 edited */
    padding-top: 60px;
  }

  .page-title {
    margin-bottom: 40px;
  }

  .bio-item {
    width: 100%;
  }

  .bio-item .bio-item-label {
    width: 100%;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      title: 'Biography'
    }
  },
  head() {
    return {
      title: this.title,
    }
  }
}
</script>