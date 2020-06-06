import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StartPage } from 'pages/StartPage'
import { PackageDetails } from 'pages/PackageDetails'
import { BookingPage } from 'pages/BookingPage'
import { Summary } from 'pages/Summary'
import { MyPage } from 'pages/MyPage'
import { Profile } from 'pages/Profile'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
          <Route path="/package" exact>
            <PackageDetails />
          </Route>
          <Route path="/booking" exact>
            <BookingPage />
          </Route>
          <Route path="/summary" exact>
            <Summary />
          </Route>
          <Route path="/mypage" exact>
            <MyPage />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
