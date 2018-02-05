import DinamicTag from './components/DinamicTag'
import CvOrderIcons from './components/CvOrderIcons'
import CvGrid from './components/CvGrid'
import CvPaginate from './components/CvPaginate'
import CvSimpleFilters from './components/CvSimpleFilters'
import CvAdvancedFilters from './components/CvAdvancedFilters'
import CvExpertFilters from './components/CvExpertFilters'
import CvThs from './components/CvThs'
import CvTds from './components/CvTds'
import CvSpinner from './components/CvSpinner'

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