export const metadata = {
  title: 'Login',
  description: 'Login screen',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <h1>Login - Treinador pokemon</h1>
        {children}
      </body>
    </html>
  )
}
