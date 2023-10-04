const code = [
  {
    id: "file-summary",
    js: `
fetch('https://data-royale.netlify.app/api/file-summary?fileId=YOUR_FILE_ID', {
  headers: {
    'Authorization': 'Bearer a1B2c3D4e5F6g7H8i9J0'
  }
})
.then(response => {
  if (!response.ok) throw new Error('HTTP error');
  return response.json();
})
.then(data => console.log(data.summary))
.catch(error => console.error("Error fetching data:", error));
`,
    python: `
import requests

response = requests.get(
  'https://data-royale.netlify.app/api/file-summary?fileId=YOUR_FILE_ID',
  headers={'Authorization': 'Bearer a1B2c3D4e5F6g7H8i9J0'}
)

if response.status_code == 200:
  print(response.json())
else:
  print("Error:", response.status_code)
`,
    bash: `
curl -H "Authorization: Bearer a1B2c3D4e5F6g7H8i9J0" "https://data-royale.netlify.app/api/file-summary?fileId=YOUR_FILE_ID"
`,
    go: `
package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
  resp, err := http.Get("https://data-royale.netlify.app/api/file-summary?fileId=YOUR_FILE_ID")
  if err != nil {
    fmt.Println("Error:", err)
    return
  }
  defer resp.Body.Close()

  if resp.StatusCode == http.StatusOK {
    bodyBytes, err := ioutil.ReadAll(resp.Body)
    if err != nil {
      fmt.Println("Error reading body:", err)
      return
    }
    fmt.Println(string(bodyBytes))
  } else {
    fmt.Println("Error status:", resp.StatusCode)
  }
}
`,
  },
  {
    id: "file-chat",
    js: `
const fileId = "YOUR_FILE_ID";
const promptValue = "YOUR_PROMPT_VALUE";

fetch(\`https://data-royale.netlify.app/api/file-chat?fileId=\${fileId}&prompt=\${encodeURIComponent(promptValue)}\`, {
  headers: {
    'Authorization': 'Bearer a1B2c3D4e5F6g7H8i9J0'
  }
})
.then(response => {
  if (!response.ok) throw new Error('HTTP error');
  return response.json();
})
.then(data => console.log(data.summary))
.catch(error => console.error("Error fetching data:", error));
`,
    python: `
import requests

file_id = "YOUR_FILE_ID"
prompt_value = "YOUR_PROMPT_VALUE"
headers = {"Authorization": "Bearer a1B2c3D4e5F6g7H8i9J0"}

response = requests.get(f"https://data-royale.netlify.app/api/file-chat?fileId={file_id}&prompt={prompt_value}", headers=headers)

if response.status_code == 200:
  print(response.json())
else:
  print(f"Error: {response.status_code}")
`,
    bash: `
FILE_ID="YOUR_FILE_ID"
PROMPT="YOUR_PROMPT_VALUE"

curl -H "Authorization: Bearer a1B2c3D4e5F6g7H8i9J0" "https://data-royale.netlify.app/api/file-chat?fileId=$FILE_ID&prompt=$PROMPT"
`,
    go: `
package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
  fileId := "YOUR_FILE_ID"
  promptValue := "YOUR_PROMPT_VALUE"
  url := fmt.Sprintf("https://data-royale.netlify.app/api/file-chat?fileId=%s&prompt=%s", fileId, promptValue)

  req, err := http.NewRequest("GET", url, nil)
  if err != nil {
    fmt.Println("Error creating request:", err)
    return
  }

  req.Header.Add("Authorization", "Bearer a1B2c3D4e5F6g7H8i9J0")

  client := &http.Client{}
  resp, err := client.Do(req)
  if err != nil {
    fmt.Println("Error executing request:", err)
    return
  }
  defer resp.Body.Close()

  if resp.StatusCode == http.StatusOK {
    bodyBytes, err := ioutil.ReadAll(resp.Body)
    if err != nil {
      fmt.Println("Error reading body:", err)
      return
    }
    fmt.Println(string(bodyBytes))
  } else {
    fmt.Println("Error status:", resp.StatusCode)
  }
}
`,
  },
  {
    id: "generate-content",
    js: `
fetch('https://data-royale.netlify.app/api/generate-content?fileId=YOUR_FILE_ID', {
  headers: {
    'Authorization': 'Bearer a1B2c3D4e5F6g7H8i9J0'
  }
})
.then(response => {
  if (!response.ok) throw new Error('HTTP error');
  return response.json();
})
.then(data => console.log(data.summary))
.catch(error => console.error("Error fetching data:", error));
`,
    python: `
import requests

response = requests.get(
  'https://data-royale.netlify.app/api/generate-content?fileId=YOUR_FILE_ID',
  headers={'Authorization': 'Bearer a1B2c3D4e5F6g7H8i9J0'}
)

if response.status_code == 200:
  print(response.json())
else:
  print("Error:", response.status_code)
`,
    bash: `
curl -H "Authorization: Bearer a1B2c3D4e5F6g7H8i9J0" "https://data-royale.netlify.app/api/generate-content?fileId=YOUR_FILE_ID"
`,
    go: `
package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
  resp, err := http.Get("https://data-royale.netlify.app/api/generate-content?fileId=YOUR_FILE_ID")
  if err != nil {
    fmt.Println("Error:", err)
    return
  }
  defer resp.Body.Close()

  if resp.StatusCode == http.StatusOK {
    bodyBytes, err := ioutil.ReadAll(resp.Body)
    if err != nil {
      fmt.Println("Error reading body:", err)
      return
    }
    fmt.Println(string(bodyBytes))
  } else {
    fmt.Println("Error status:", resp.StatusCode)
  }
}
`,
  },
  {
    id: "csv-story",
    js: `
const fileId = "YOUR_FILE_ID";
const promptValue = "YOUR_PROMPT_VALUE";

fetch(\`https://data-royale.netlify.app/api/csv-story?fileId=\${fileId}&prompt=\${encodeURIComponent(promptValue)}\`, {
  headers: {
    'Authorization': 'Bearer a1B2c3D4e5F6g7H8i9J0'
  }
})
.then(response => {
  if (!response.ok) throw new Error('HTTP error');
  return response.json();
})
.then(data => console.log(data.summary))
.catch(error => console.error("Error fetching data:", error));
`,
    python: `
import requests

file_id = "YOUR_FILE_ID"
prompt_value = "YOUR_PROMPT_VALUE"
headers = {"Authorization": "Bearer a1B2c3D4e5F6g7H8i9J0"}

response = requests.get(f"https://data-royale.netlify.app/api/csv-story?fileId={file_id}&prompt={prompt_value}", headers=headers)

if response.status_code == 200:
  print(response.json())
else:
  print(f"Error: {response.status_code}")
`,
    bash: `
FILE_ID="YOUR_FILE_ID"
PROMPT="YOUR_PROMPT_VALUE"

curl -H "Authorization: Bearer a1B2c3D4e5F6g7H8i9J0" "https://data-royale.netlify.app/api/csv-story?fileId=$FILE_ID&prompt=$PROMPT"
`,
    go: `
package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
  fileId := "YOUR_FILE_ID"
  promptValue := "YOUR_PROMPT_VALUE"
  url := fmt.Sprintf("https://data-royale.netlify.app/api/csv-story?fileId=%s&prompt=%s", fileId, promptValue)

  req, err := http.NewRequest("GET", url, nil)
  if err != nil {
    fmt.Println("Error creating request:", err)
    return
  }

  req.Header.Add("Authorization", "Bearer a1B2c3D4e5F6g7H8i9J0")

  client := &http.Client{}
  resp, err := client.Do(req)
  if err != nil {
    fmt.Println("Error executing request:", err)
    return
  }
  defer resp.Body.Close()

  if resp.StatusCode == http.StatusOK {
    bodyBytes, err := ioutil.ReadAll(resp.Body)
    if err != nil {
      fmt.Println("Error reading body:", err)
      return
    }
    fmt.Println(string(bodyBytes))
  } else {
    fmt.Println("Error status:", resp.StatusCode)
  }
}
`,
  },
];

export default code;
