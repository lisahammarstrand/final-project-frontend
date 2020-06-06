import React from 'react'
import { PackageCard } from 'components/PackageCard'
import { Header } from 'components/Header'

export const StartPage = () => {
  return (
    <>
      <div>StartPage</div>
      <Header />
      <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
      <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
      <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
      <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
    </>
  )
}