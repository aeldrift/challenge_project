### Features:
Ephemeral WebSocket voice mode
Text and image HTTP chat mode
WebRTC voice, camera, and screenshare chat mode
Persistent conversation storage to a SQLite database

### Server setup:
```
cd server
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
```

### Initialize the project
```python3 sesame.py init```

### Run the server
```python3 sesame.py run```

### Client setup (In new terminal window)
```
cd server
source venv/bin/activate
python3 sesame.py init-client
```

### Run the client:
```
cd ..
cd client
npm install
npm run dev
```

Visit the URL shown in the terminal. Be sure that both the server and client are running.
