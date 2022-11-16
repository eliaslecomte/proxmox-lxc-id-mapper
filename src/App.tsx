import React from 'react';
import './App.css';

// https://pve.proxmox.com/wiki/Unprivileged_LXC_containers

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Proxmox LXC id mapper
      </header>

      <div>
        <p>
          LXC Container Id: <input />
        </p>
        
        <div>
          <p># Add to <code>/etc/pve/lxc/103.conf</code></p>
          <p>lxc.idmap: u 0 100000 65535</p>
          <p>lxc.idmap: g 0 100000 65535</p>

          <p># Add to <b>/etc/subuid</b></p>

          <p># Add to <b>/etc/subgid</b></p>
        </div>

      
      </div>
    </div>
  );
}

export default App;
