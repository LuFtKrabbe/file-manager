## Description

⚠️There is a penalty for the Commits after deadline:  
-30% of total task score Commits after deadline (except commits that affect only Readme.md, .gitignore, etc.)

⏰I didn't have time to complete the assignment by the deadline, but with your permission I would like to ask you check the task in additional branch ``file-manager-plus`` with latest Commits. [Code branch file-manager-plus](https://github.com/LuFtKrabbe/file-manager/tree/file-manager-plus)

Please, write about in crosscheck form or message me in Discord if something wrong. Thank you!  

## Command examples for checking

```bash
My base path after program launching: /home/luftkrabbe
```

**Navigation & working directory:** 
- up
- cd
```bash
  cd ./file-manager/src/modules (relative)
  cd /home/luftkrabbe/file-manager/src/modules (absolute)
```
- ls

**Basic operations with files:**
- cat path_to_file
```bash
  cat ./file-manager/src/index.js (relative)
  cat /home/luftkrabbe/file-manager/src/index.js (absolute)
```
- add new_file_name (only in the current directory according to the task)
```bash
  add newFile.js
```
- rn path_to_file new_filename
```bash
  rn ./file-manager/src/text.txt renamedText.txt  (relative)
  rn /home/luftkrabbe/file-manager/src/text.txt renamedText.txt (absolute)
```
- cp path_to_file path_to_new_directory
```bash
  cp ./file-manager/src/text.txt ./file-manager/src/copyFolder  (relative)
  cp /home/luftkrabbe/file-manager/src/text.txt /home/luftkrabbe/file-manager/src/copyFolder (absolute)
```
- mv path_to_file path_to_new_directory
```bash
  mv ./file-manager/src/text.txt ./file-manager/src/copyFolder  (relative)
  mv /home/luftkrabbe/file-manager/src/text.txt /home/luftkrabbe/file-manager/src/copyFolder (absolute)
```
- rm path_to_file
```bash
  rm ./file-manager/src/newFile.js (relative)
  rm /home/luftkrabbe/file-manager/src/newFile.js (absolute)
```

**Operating system info:**
- os --EOL
- os --cpus
- os --homedir
- os --username
- os --architecture

**Hash and compress:** 
  - hash path_to_file
```bash
  hash ./file-manager/src/index.js (relative)
  hash /home/luftkrabbe/file-manager/src/index.js (absolute)
```
  - compress path_to_file path_to_destination
```bash
  compress ./file-manager/src/index.js ./file-manager/src (relative) 
  compress /home/luftkrabbe/file-manager/src/index.js /home/luftkrabbe/file-manager/src (absolute)
```
  - decompress path_to_file path_to_destination
```bash
  decompress ./file-manager/src/index.gz ./file-manager/src  (relative) 
  decompress /home/luftkrabbe/file-manager/src/index.gz /home/luftkrabbe/file-manager/src (absolute)
```