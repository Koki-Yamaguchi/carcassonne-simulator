<template>
  <div class="wrapper">
    <slot />
    <div class="footer">
      <div class="ui vertical footer segment">
        <div class="ui center aligned container">
          <div class="ui section divider"></div>
          <div class="ui horizontal small divided link list">
            <a class="item"> © 2023 Koki Yamaguchi </a>
            <a
              class="item"
              href="https://github.com/Koki-Yamaguchi/carcassonne-simulator"
              target="_blank"
            >
              Contribute
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;

  position: relative;
  min-height: 100vh;
}
.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
