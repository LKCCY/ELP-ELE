<template>
  <div class="elp-card">
    <header v-if="title" class="elp-card__head">
      <div>
        <el-tooltip :content="tooltip">
          <i class="el-icon-warning" v-if="tooltip"></i>
        </el-tooltip>
        <span class="elp-card__head__title">{{title}}</span>
        <span class="elp-card__head__sub">{{subTitle}}</span>
      </div>
      <div>
        <slot name="operate"></slot>
      </div>
    </header>
    <main class="elp-card__main" :class="{'elp-card__main--symmetry': !title}">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'elp-card',
  props: {
    title: String,
    subTitle: String,
    tooltip: String
  }
}
</script>

<style lang="less">
.elp-card {
  background: #fff;
  &__head {
    padding: 16px 20px;
    border-bottom: 1px solid @color-border;
    display: flex;
    justify-content: space-between;
    &__title {
      font-size: 16px;
      color: @color-text-regular;
      font-weight: 600;
      margin-right: 10px;
    }
    &__sub {
      font-size: 12px;
      color: @color-text-secondary;
    }
  }
  &__main {
    padding: 20px 30px;
    color: @color-text-regular;
    font-size: 14px;
    &--symmetry {
      padding: 30px;
    }
  }
}
</style>
