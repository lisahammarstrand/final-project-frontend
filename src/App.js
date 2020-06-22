import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from 'components/Header'
import { StartPage } from 'pages/StartPage'
import { RiksgransenDetails } from 'pages/RiksgransenDetails'
import { FunasfjallenDetails } from 'pages/FunasfjallenDetails'
import { KittelfjallDetails } from 'pages/KittelfjallDetails'
import { StorulvanDetails } from 'pages/StorulvanDetails'
import { BookingPage } from 'pages/BookingPage'
import { LoginPage } from 'pages/LoginPage'
import { MyPage } from 'pages/MyPage'
import { Footer } from 'components/Footer'
import { GlobalStyle } from 'components/GlobalStyle'
import { Confirmation } from 'components/Confirmation'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
          <Route path="/riksgransen" exact>
            <RiksgransenDetails />
          </Route>
          <Route path="/funasfjallen" exact>
            <FunasfjallenDetails />
          </Route>
          <Route path="/storulvan" exact>
            <StorulvanDetails />
          </Route>
          <Route path="/kittelfjall" exact>
            <KittelfjallDetails />
          </Route>
          <Route path="/booking" exact>
            <BookingPage />
          </Route>
          <Route path="/confirmation" exact>
            <Confirmation />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/mypage" exact>
            <MyPage />
          </Route>
        </Switch>
      </main>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  )
}

