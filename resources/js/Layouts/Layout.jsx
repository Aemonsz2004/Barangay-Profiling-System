import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <header>
            <nav>
              <a href='/'></a>
              <a></a>
              <a></a>
            </nav>

            <main>
                {children}
            </main>
        </header>
    </div>
  )
}

export default Layout