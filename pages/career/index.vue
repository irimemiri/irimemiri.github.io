<template>
  <div class="career-wrapper">
    <!-- <h1 class="page-title"><span class="marker">{{ title }}</span></h1> -->
    <div class="chrono-graph">
      <div class="timeline"></div>
      <div class="graph-item dms">
        <p class="period">2017-2019</p>
        <p class="company">DM SOLUTIONS.Co., Ltd.</p>
        <p class="occupation">Web Engineer</p>
        <p class="employment">Full-time worker</p>
      </div>
      <div class="graph-item gls">
        <p class="period">2019-2020</p>
        <p class="company">Glossom, Inc.</p>
        <p class="occupation">Web Engineer</p>
        <p class="employment">Full-time worker</p>
      </div>
      <div class="graph-item ymgs">
        <p class="period">2021.6-2021.8</p>
        <p class="company">Yamagishi, Co., Ltd.</p>
        <p class="occupation">Designer</p>
        <p class="employment">Full-time worker</p>
      </div>
      <div class="graph-item szl">
        <p class="period">2021.11-</p>
        <p class="company">SAZABY LEAGUE, Ltd.
          <br>
          IVY COMPANY
        </p>
        <p class="occupation">Kitchen staff</p>
        <p class="employment">Part-time worker</p>
      </div>
    </div>
  </div>
</template>

<style>
.chrono-graph {
}

.timeline {
  width: 80%; /* 仮 */
  height: 1px;
  background-color: #fff;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.graph-item::before {
  content: '';
  display: block;
  width: 200px;
  height: 1px;
  background-color: #fff;
  position: relative;
  transform: rotate(-60deg);
  left: -80%;
  top: 80px;
  /* top: 260px; */
}

.graph-item::after {
  content: '';
  display: block;
  width: 200px;
  height: 1px;
  background-color: tomato;
  position: relative;
  transform: rotate(-60deg);
  left: -80%;
  top: 60px;
  /* top: 260px; */
}

.graph-item .period {
  font-size: .8em;
}

.graph-item .company {
  font-style: italic;
}

.graph-item .occupation, .graph-item .employment {
  font-size: .8em;
}

.graph-item {
  position: absolute;
}

.graph-item.dms {
  left: 20%;
  top: 180px;
}

.graph-item.gls {
  left: 40%;
  top: 180px;
}

.graph-item.ymgs {
  left: 60%;
  top: 180px;
}

.graph-item.szl {
  left: 80%;
  top: 180px;
}

</style>

<script>
export default {
  data() {
    return {
      title: 'Career'
    }
  },
  head() {
    return {
      title: this.title,
    }
  }
}
</script>