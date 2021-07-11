import React from 'react'
import '../scss/App.scss'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import UpdateUser from '../components/UpdateUser'
import Layout from '../components/Layout'
import RegisterAdmin from '../components/RegisterAdmin'
import IncomeExpense from '../components/IncomeExpense'
import PrioriUser from '../components/PrioriUser'
import Home from '../components/Home'
import PageNotFound from '../components/PageNotFound'
import Login from '../components/Login'
import SuggestHab from '../components/SuggestHab'
import ReportFailure from '../components/ReportFailure'


function App() {
    return (
        <div>
            <BrowserRouter>
                {/*<Layout> */}
                <Switch>
                    <Route exact path="/registrar" component={RegisterAdmin}/>
                    <Route exact path="/actualizar" component={UpdateUser}/>
                    <Route exact path="/ingresosegresos" component={IncomeExpense}/>
                    <Route exact path="/prioridadUsuario" component={PrioriUser}/>
                    <Route exact path="/genrarsugerencia" component={SuggestHab}/>
                    <Route exact path="/reportfalla" component={ReportFailure}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/"component={Home}/>
                    <Route component={PageNotFound}/>
                </Switch>
                {/*</Layout>*/}
            </BrowserRouter>
        </div>
    )
}

export default App
