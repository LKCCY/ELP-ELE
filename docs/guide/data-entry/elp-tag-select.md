---
title: elp-tag-select 标签选择
sidebarDepth: 0
---

## elp-tag-select


#### 不同尺寸
可选 medium、small、mini 不同尺寸

<code-card compName="docs-tag-select-size">
<<< @/docs/.vuepress/components/data-entry/elp-tag-select/size.vue
</code-card>


#### 超出隐藏
标签过多时可支持标签超出一行时隐藏,同时无数据时可设定占位符

<code-card compName="docs-tag-select">
<<< @/docs/.vuepress/components/data-entry/elp-tag-select/index.vue
</code-card>

#### 多种绑值方式
默认单选，可点击已选中的标签取消选择。

<code-card compName="docs-tag-select-multiple">
<<< @/docs/.vuepress/components/data-entry/elp-tag-select/multiple.vue
</code-card>

#### 定制label、value
tags默认是包含label、value两个属性的对象数组，当默认结构不是这样的情形出现，可通过props属性传递label、value的key标识。

<code-card compName="docs-tag-select-props">
<<< @/docs/.vuepress/components/data-entry/elp-tag-select/props.vue
</code-card>

#### Attributes
参数|说明|类型|可选值|默认值
--|:--|:--|:--|:--|:--
label|标签名|string
label-width|标签宽度|number|-|100
color|自定义标签颜色  |string|-|#00C4FF
size| 自定义标签大小 | string| medium / small / mini | -
tags|标签列表|array|-|-
show-more|超出最大宽度隐藏|boolean|-|true
placeholder|数据为空时的占位|string
is-required|单选时是否必选|boolean|-|false
multiple|是否多选|boolean|-|false
~~label-in-value~~|	~~在返回选项时，是否将 label 和 value 一并返回，默认只返回 value~~| ~~boolean~~|-|~~false~~
label-in-change|	选中内容改变时，是否将 label 和 value 一并返回给change事件，默认只返回 value| boolean|-|false
props| 指定tags中的label、value的key标识 | object |-|-

#### tags options
参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
label|标签名|string|-|-
value|标签值|string,number|-|-


#### events
参数|说明|返回|备注
--|:--|:--|:--
change|change时触发
