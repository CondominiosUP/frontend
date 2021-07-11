import React from 'react'
import '../scss/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LayoutUser from '../components/LayoutUser'
import LayoutAdmin from '../components/LayoutAdmin'
import Home from '../components/Home'
import RegisterAdmin from '../components/RegisterAdmin'
import Login from '../components/Login'
import UpdateUser from '../components/UpdateUser'
import IncomeExpense from '../components/IncomeExpense'
import PrioriAdmin from '../components/PrioriAdmin'
import PrioriUser from '../components/PrioriUser'
import ReportFailure from '../components/ReportFailure'
import SuggestAdmin from '../components/SuggestAdmin'
import SuggestHab from '../components/SuggestHab'


function App() {

    const admin = true;

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    {
                        admin === true ? (
                            <>
                                {console.log("admin")}
                                <LayoutAdmin>
                                    <Route exact path="/registrar" component={RegisterAdmin} />
                                    {/* <Route exact path="/informacioncasa" component={InformacionCasa} /> */}
                                    <Route exact path="/ingresosegresos" component={IncomeExpense} />
                                    <Route exact path="/prioridadesadmin" component={PrioriAdmin} />
                                    <Route exact path="/sugerenciasadmin" component={SuggestAdmin} />
                                </LayoutAdmin>
                            </>

                        ) : (
                            <>
                                {console.log("user")}
                                <LayoutUser>
                                    <Route exact path="/actualizar" component={UpdateUser} />
                                    <Route exact path="/ingresosegresos" component={IncomeExpense} />
                                    <Route exact path="/prioridadesuser" component={PrioriUser} />
                                    <Route exact path="/sugerenciauser" component={SuggestHab} />
                                    <Route exact path="/reportarfalla" component={ReportFailure} />
                                </LayoutUser>

                            </>
                        )
                    }

                </Switch>
            </BrowserRouter>
        </div>
    )

}

export default App
