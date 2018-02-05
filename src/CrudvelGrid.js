import DinamicTag from './components/DinamicTag.vue'
import CvOrderIcons from './components/CvOrderIcons.vue'
import CvGrid from './components/CvGrid.vue'
import CvPaginate from './components/CvPaginate.vue'
import CvSimpleFilters from './components/CvSimpleFilters.vue'
import CvAdvancedFilters from './components/CvAdvancedFilters.vue'
import CvExpertFilters from './components/CvExpertFilters.vue'
import CvThs from './components/CvThs.vue'
import CvTds from './components/CvTds.vue'
import CvSpinner from './components/CvSpinner.vue'

const CrudvelGrid = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue, options) {
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.component("dinamic-tag",DinamicTag)
    Vue.component("cv-grid",CvGrid)
    Vue.component("cv-paginate",CvPaginate)
    Vue.component("cv-simple-filters",CvSimpleFilters)
    Vue.component("cv-advanced-filters",CvAdvancedFilters)
    Vue.component("cv-expert-filters",CvExpertFilters)
    Vue.component("cv-ord-icon",CvOrderIcons)
    Vue.component("cv-ths",CvThs)
    Vue.component("cv-tds",CvTds)
    Vue.component("cv-spinner",CvSpinner)
  	Vue.mixin({
    });
  }
};

export default CrudvelGrid;