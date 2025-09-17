import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CICD JENKINS DEMO</h1>
      <div>
        <p>
          Jenkins source code uses Git repo and branch <code>/main</code>. In <b>Build Triggers,</b> select <b>Poll SCM</b> and use schedule <code>* * * * *</code>.
        </p>
      </div>
      <div>
        <p>
          In <b>Build Steps</b>, add <b>Windows batch command:</b>
        </p>
        <pre>
          {`call npm install
call npm run build
rmdir "C:\\tomcat9\\webapps\\jenkinsfrontdemo" /s /q
mkdir "C:\\tomcat9\\webapps\\jenkinsfrontdemo"
xcopy "dist\\*" "C:\\tomcat9\\webapps\\jenkinsfrontdemo" /s /e /y`}
        </pre>
      </div>
      <div>
        <p>
          Another <b>Build Step</b> with <b>Windows batch command</b> to restart Tomcat:
        </p>
        <pre>
          {`net stop Tomcat9
net start Tomcat9`}
        </pre>
      </div>
    </>
  )
}

export default App