import React from 'react'
import '../scss/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UpdateUser from '../components/UpdateUser'
import Layout from '../components/Layout'
import RegisterAdmin from '../components/RegisterAdmin'
import IncomeExpense from '../components/IncomeExpense'


function App() {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                <Switch>
                    <Route exact path="/registrar" component={RegisterAdmin}/>
                    <Route exact path="/actualizar" component={UpdateUser}/>
                    <Route exact path="/ingresosegresos" component={IncomeExpense}/>
                </Switch>
                </Layout>
            </BrowserRouter>
        </div>
    )
}

export default App
