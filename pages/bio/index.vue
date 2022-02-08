<template>
  <div class="profile-wrapper">
  <h1 class="page-title"><span class="marker">{{ title }}</span></h1>
    <section class="sect-wrapper">
      <h2 class="sect-title">NAME</h2>
      <div class="sect-content">
        <p>Emiri Ito</p>
      </div>
    </section>
    <section class="sect-wrapper">
      <h2 class="sect-title">BIRTH</h2>
      <div class="sect-content">
        <p>1995.01.17</p>
      </div>
    </section>
    <section class="sect-wrapper">
      <h2 class="sect-title">BLOOD TYPE</h2>
      <div class="sect-content">
        <p>A</p>
      </div>
    </section>
    <section class="sect-wrapper">
      <!-- 仮 -->
      <p>
        1995年東京都生まれ。津田塾大学学芸学部英文学科卒業。<br>
        プログラミングとデザインができます。
      </p>
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