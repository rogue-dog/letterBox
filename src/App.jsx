import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, videocam } from 'ionicons/icons';

import Tab1 from './pages/Contacts';
import Tab2 from './pages/AllUsers';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { AppContext } from "./initialState";
import { useContext } from 'react';
import LoginForm from './pages/LoginPage';
import ChatPage from './pages/ChatPage';



function App() {

  let { state, dispatch } = useContext(AppContext);


  function Router() {

    return (
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route exact path="/chatpage">
              <ChatPage />
            </Route>

            <Route exact path="/">
              <Redirect to="/tab2" />

            </Route>
          </IonRouterOutlet>
          {state.tabs ? <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={triangle} />
              <IonLabel>Contacts</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={ellipse} />
              <IonLabel>All Users</IonLabel> </IonTabButton> </IonTabBar> : <IonTabBar />}




        </IonTabs>
      </IonReactRouter>)
  }

  ;
  return (<IonApp>
    {state.user ? <Router /> : <LoginForm />}

  </IonApp>);
}


export default App;
