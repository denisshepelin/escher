// import map from '../docs/_static/example_data/S5_iJO1366.Glycolysis_PPP_AA_Nucleotides.json'
import map from '/Users/zaking/repos/escher.github.io/1-0-0/maps/Escherichia coli/iJO1366.Central metabolism.json'
import { Builder, libs } from '../src/main'

window.builder = new Builder( // eslint-disable-line no-new
  map,
  null,
  null,
  libs.d3_select('#root'),
  {
    fill_screen: true,
    never_ask_before_quit: true
  }
)
