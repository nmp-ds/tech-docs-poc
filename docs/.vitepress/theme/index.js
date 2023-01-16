import DefaultTheme from 'vitepress/theme'
import CompHead from '../CompHead.vue'
import ApiTable from '../ApiTable.vue'
import '../bootExamples.js'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ApiTable', ApiTable)
    app.component('CompHead', CompHead)
  }
}
