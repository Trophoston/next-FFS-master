import localFont from 'next/font/local'
import "./globals.css";
import Header from './components/header'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Slidebar from "./components/slidebar";

const myFont = localFont({ src: './src/Kanit-Regular.ttf' })

const axios = require('axios');
const callApi = async () => {

  const response = await axios.get('https://api.github.com/users/defunkt');
  await console.log(response.data);

};

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>

        <Header />



      <main>
        {children}
      </main>



        <script
          // you might need to get a newer version
          src="https://kit.fontawesome.com/fbadad80a0.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
