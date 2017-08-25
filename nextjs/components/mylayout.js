import NavigateTop from '../components/navigate.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}



const Layout = (props) => (

  <div style={layoutStyle}>
    <MuiThemeProvider>
      <NavigateTop />
    </MuiThemeProvider>
    {props.children}
  </div>
)

export default Layout