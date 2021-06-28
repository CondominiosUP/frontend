import React from 'react'
import '../scss/App.scss'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import UpdateUser from '../components/UpdateUser'
import Layout from '../components/Layout'
import RegisterAdmin from '../components/RegisterAdmin'
import IncomeExpense from '../components/IncomeExpense'
import PrioriUser from '../components/PrioriUser'


function App() {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                <Switch>
                    <Route exact path="/registrar" component={RegisterAdmin}/>
                    <Route exact path="/actualizar" component={UpdateUser}/>
                    <Route exact path="/ingresosegresos" component={IncomeExpense}/>
                    <Route exact path="/prioridadUsuario" component={PrioriUser}/>
                </Switch>
                </Layout>
            </BrowserRouter>
        </div>
    )
}

export default App
