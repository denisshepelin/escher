/** @jsx h */
// For issue with npm run build - https://stackoverflow.com/questions/47439067/uglifyjs-throws-unexpected-token-keyword-const-with-node-modules
// This popup will use simple vega-lite example -  https://altair-viz.github.io/gallery/layered_heatmap_text.html
// FIX make chart spec part of constructor
import chart_spec from '../docs/_static/example_data/chart.json'
import { Component, h } from 'preact'
import * as embed from 'vega-embed'

export default class VegaTooltip extends Component {
    // constructor(spec_json) {
    //     super()
    //     this.spec = spec_json
    // }
  
    render(props, state) {
    return (
    <div className='default-tooltip'>
      <h3>{this.props.biggId}</h3>
      <div id="vega-chart"></div>
    </div>
    )
  }

  componentDidUpdate() {
    // Push the chart into the previously created div
    // console.log(this.props)
    if (this.props.type === "reaction") {
      let new_spec = chart_spec
      let transform = [{"filter": 
            {"field" : "BiGG_ID", "equal" : this.props.biggId}
      }]
      new_spec['transform'] = transform
      embed.default("#vega-chart", new_spec)
      .then(function(result){result => console.log(result)})
      .catch(console.error)
    }
  }
}