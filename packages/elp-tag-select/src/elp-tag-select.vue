<template>
  <section class="elp-tag-select">
    <!-- 标签名 -->
    <slot name="title">
      <label
        v-if="label"
        class="elp-tag-select__title"
        :style="{width: `${labelWidth}px`}">
        {{label}}
      </label>
    </slot>
    <!-- 标签列表 -->
    <section class="elp-tag-select__list">
      <div class="list-items" :class="{ 'hidden-more': showMore && hideMoreItem }">
        <span v-if="!tagList.length" class="placeholder">{{placeholder}}</span>
        <span
          v-else
          v-for="(tag, index) in tagList"
          :key="index"
          class="ep-tag"
          :class="[
            size && `ep-tag--${size}`,
            {'ep-tag__checked': tag.checked},
          ]"
          :style="{
            color: hoverdTag === tag.value ? tag.checked ? '#fff' : color : '',
            backgroundColor: tag.checked ? color : ''
          }"
          @click.stop="handleSelect(tag)"
          @mouseover.stop="handleHoverd(true, tag)"
          @mouseout.stop="handleHoverd(false, tag)">
          {{tag.label}}
        </span>
      </div>
      <div class="list-more" v-show="showMore">
        <el-button type="text" class="btn-more" @click="hideMoreItem = !hideMoreItem">
          更多 <i :class="hideMoreItem ? 'el-icon-arrow-down' : 'el-icon-arrow-up'" />
        </el-button>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent, computed, watch, PropType } from 'vue-demi'

import cloneDeep from 'lodash.clonedeep'
import omit from 'lodash.omit'
import { ITag } from '../index'

export default defineComponent({
  name: 'elp-tag-select',
  props: {
    value: {
      type: [String, Array, Boolean, Number],
      default: ''
    },
    tags: {
      type: Array as PropType<ITag[]>,
      required: true
    },
    props: {
      type: Object // 对照表({label: 'name', value: 'id'})
    },
    label: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: Number,
      default: 100
    },
    color: {
      type: String,
      default: '#00C4FF'
    },
    size: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    isRequired: { // 单选时是否是必选项目
      type: Boolean,
      default: false
    },
    labelInChange: {
      type: Boolean,
      default: false
    },
    labelInValue: {
      type: Boolean,
      default: false
    },
    showMore: { // 是否需要折叠
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String
    },
    noCancel: { // 不能取消当前选中
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const tagList = ref<Array<ITag>>([])
    const hoverdTag = ref('')
    const hideMoreItem = ref(true)
    const compatLabelInChange = computed(() => props.labelInChange || props.labelInValue)

    function init (): void {
      let _tag = props.props ? (props.tags as Array<any>).map(
        item => ({ ...item, label: item[props.props!.label], value: item[props.props!.value] })) : props.tags
      tagList.value = cloneDeep(_tag).map((v, i) => {
        v.checked = props.multiple ? (props.value as Array<any>).includes(v.value) : v.value === props.value
        return v
      })
    }
    function handleSelect (tag: ITag): void {
      if (props.noCancel && tag.checked) return

      let modelValue: string | any[] = ''
      let changeValue: string | any[] = ''
      if (props.multiple) {
        tag.checked = !tag.checked
        modelValue = tagList.value.filter(v => v.checked).map(v => v.value)
        changeValue = tagList.value.filter(v => v.checked).map(v => compatLabelInChange ? omit(v, 'checked') : v.value)
      } else {
        let _hasSelected = false
        tagList.value.map(v => {
          if (props.isRequired) { v.checked = v.value === tag.value } else {
            if (v.value === tag.value) _hasSelected = v.checked
            v.checked = v.value === tag.value ? !v.checked : v.checked
          }
        })
        modelValue = _hasSelected ? '' : tag.value
        changeValue = compatLabelInChange.value ? _hasSelected ? {} : omit(tag, 'checked') : _hasSelected ? '' : tag.value
      }

      emit('input', modelValue)
      emit('change', changeValue)
    }
    function handleHoverd (isHoverd: boolean, tag: ITag) {
      hoverdTag.value = isHoverd ? tag.value : ''
    }

    watch(
      () => props.tags,
      () => {
        init()
      },
      {
        immediate: true,
        deep: true
      }
    )
    watch(
      () => props.value,
      () => {
        init()
      }
    )

    return {
      hideMoreItem,
      tagList,
      hoverdTag,

      handleSelect,
      handleHoverd
    }
  }
})

</script>

<style lang="less">
@tag-select-prefix-cls: ~"elp-tag-select";

.@{tag-select-prefix-cls} {
  display: flex;
  flex-direction: row;
  &__title {
    display: inline;
    flex-shrink: 0;
    min-height: 36px;
    line-height: 24px;
    font-size: 12px;
    font-weight: 600;
    color: @color-text-primary;
  }
  &__list {
    display: flex;
    width: 100%;
    .list-items {
      display: flex;
      flex-wrap: wrap;
      margin-right: 50px;
      .placeholder {
        font-size: 14px;
        color: @color-text-placeholder;
        line-height: 25px;
        padding-left: 6px;
      }
      &.hidden-more {
        max-height: 36px;
        overflow: hidden;
      }
      .ep-tag {
        padding: 0 5px;
        line-height: 24px;
        margin-bottom: 10px;
        margin-right: 20px;
        color: @color-text-regular;
        list-style: none;
        border-radius: 4px;
        border: 1px solid transparent;
        font-size: 14px;
        box-sizing: border-box;
        -webkit-transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        opacity: 1;
        cursor: pointer;

        &.ep-tag__checked {
          color: #fff;
          &:hover {
            color: #fff;
          }
        }
        &.ep-tag--medium {
          height: 28px;
          line-height: 26px;
        }
        &.ep-tag--small {
          height: 24px;
          line-height: 22px;
        }
        &.ep-tag--mini {
          height: 20px;
          line-height: 18px;
        }
      }
    }
    .list-more {
      flex: 1;
      position: relative;
      .btn-more {
        position: absolute;
        left: calc(100% * 5000 - 50px);
        top: 3px;
        margin-right: 40px;
        padding-top: 3px;
        font-size: 14px;
        color: @color-info;
        &:hover {
          color: @color-theme;
        }
      }
    }
  }
}
</style>
