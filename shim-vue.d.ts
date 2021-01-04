// declare module '*.vue' {
//   import { defineComponent } from 'vue-demi'
//   const component: ReturnType<typeof defineComponent>
//   export default component
// }

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
